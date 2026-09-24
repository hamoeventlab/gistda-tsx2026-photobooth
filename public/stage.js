// ==========================================================================
// HAMO LIVE STAGE WALL CONTROLLER
// Real-time SSE Sync + Calm Signage Loop
// ==========================================================================

let stagePhotos = [];
let currentIndex = 0;
let slideIntervalTimer = null;
let slideIntervalSeconds = 8;

const elHeroImg = document.getElementById('stage-hero-img');
const elSpotlightCard = document.getElementById('spotlight-card');
const elThemeTag = document.getElementById('stage-theme-tag');
const elTimeTag = document.getElementById('stage-time-tag');
const elGuestName = document.getElementById('stage-guest-name');
const elHeadline = document.getElementById('stage-headline');
const elRibbonTrack = document.getElementById('ribbon-track');
const elRibbonCount = document.getElementById('ribbon-count');
const elStageQr = document.getElementById('stage-qr-code');

async function initStage() {
  console.log('[Stage] Initializing live stage wall...');
  
  // 1. Fetch event config & QR
  try {
    const configRes = await fetch('/api/config');
    const config = await configRes.json();
    if (config.stage_display?.headline) {
      elHeadline.textContent = config.stage_display.headline;
    }
    if (config.stage_display?.slide_interval_seconds) {
      slideIntervalSeconds = config.stage_display.slide_interval_seconds;
    }
    
    // Generate QR code for stage footer
    const currentHost = window.location.origin;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentHost)}`;
    elStageQr.src = qrUrl;
  } catch (err) {
    console.warn('[Stage] Failed loading config:', err);
  }

  // 2. Fetch history
  try {
    const histRes = await fetch('/api/stage/history');
    const historyData = await histRes.json();
    if (historyData.photos && historyData.photos.length > 0) {
      stagePhotos = historyData.photos;
      renderRibbon();
      showPhoto(stagePhotos.length - 1, false);
    } else {
      // Fallback demo photos if empty
      stagePhotos = [
        { imageUrl: 'themes/cosmic_astronaut.jpg', theme: 'THEOS-2 Earth Orbit', guestName: 'Mission Specialist', timestamp: Date.now() },
        { imageUrl: 'assets/costumes/astronaut.jpg', theme: 'THEOS-2 EVA Suit', guestName: 'Flight Commander', timestamp: Date.now() - 60000 },
        { imageUrl: 'assets/costumes/executive_gala.jpg', theme: 'Riverfront VIP Gala', guestName: 'TSX VIP Delegate', timestamp: Date.now() - 120000 },
        { imageUrl: 'assets/costumes/royal_heritage.jpg', theme: 'Royal Space Envoy', guestName: 'Diplomatic Envoy', timestamp: Date.now() - 180000 },
      ];
      renderRibbon();
      showPhoto(0, false);
    }
  } catch (err) {
    console.warn('[Stage] Failed fetching history:', err);
  }

  // 3. Connect to SSE Stream for real-time broadcasts
  connectSSE();

  // 4. Start idle carousel loop
  startSlideLoop();
}

function connectSSE() {
  console.log('[Stage] Connecting to SSE stream at /api/stage/stream...');
  const eventSource = new EventSource('/api/stage/stream');

  eventSource.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      if (data.type === 'new_photo' && data.photo) {
        console.log('[Stage] ⚡ New photo received via SSE:', data.photo);
        onNewPhotoReceived(data.photo);
      }
    } catch (err) {
      console.warn('[Stage] Error parsing SSE message:', err);
    }
  };

  eventSource.onerror = () => {
    console.warn('[Stage] SSE disconnected, attempting to reconnect in 5s...');
    eventSource.close();
    setTimeout(connectSSE, 5000);
  };
}

function onNewPhotoReceived(photo) {
  stagePhotos.push(photo);
  if (stagePhotos.length > 50) stagePhotos.shift();
  renderRibbon();

  // Reset timer and show newly published photo immediately
  restartSlideLoop();
  currentIndex = stagePhotos.length - 1;
  showPhoto(currentIndex, true);
}

function showPhoto(index, isNew = false) {
  if (stagePhotos.length === 0) return;
  const photo = stagePhotos[index];
  if (!photo) return;

  // Calm transition: gentle fade out, swap, gentle fade in
  elSpotlightCard.classList.remove('fade-in');
  elSpotlightCard.classList.add('fade-out');

  setTimeout(() => {
    elHeroImg.src = photo.imageUrl;
    elThemeTag.textContent = photo.theme || 'Studio Portrait';
    elGuestName.textContent = photo.guestName || 'GUEST MEMORY';
    
    if (isNew) {
      elTimeTag.textContent = 'JUST NOW ⚡';
      elTimeTag.style.color = '#00F0FF';
    } else {
      elTimeTag.textContent = 'FEATURED';
      elTimeTag.style.color = '#E63946';
    }

    // Update active highlight in ribbon
    const ribbonItems = elRibbonTrack.querySelectorAll('.ribbon-item');
    ribbonItems.forEach((item, idx) => {
      item.classList.toggle('active', idx === index);
    });

    elSpotlightCard.classList.remove('fade-out');
    elSpotlightCard.classList.add('fade-in');
  }, 400);
}

function renderRibbon() {
  elRibbonTrack.innerHTML = '';
  elRibbonCount.textContent = `${stagePhotos.length} MOMENTS`;

  // Display up to 10 most recent
  stagePhotos.forEach((photo, idx) => {
    const item = document.createElement('div');
    item.className = 'ribbon-item' + (idx === currentIndex ? ' active' : '');
    item.onclick = () => {
      currentIndex = idx;
      showPhoto(currentIndex, false);
      restartSlideLoop();
    };

    const img = document.createElement('img');
    img.src = photo.imageUrl;
    img.alt = 'Thumbnail';
    item.appendChild(img);
    elRibbonTrack.appendChild(item);
  });

  // Auto-scroll ribbon to end
  elRibbonTrack.scrollLeft = elRibbonTrack.scrollWidth;
}

function startSlideLoop() {
  if (slideIntervalTimer) clearInterval(slideIntervalTimer);
  slideIntervalTimer = setInterval(() => {
    if (stagePhotos.length <= 1) return;
    currentIndex = (currentIndex + 1) % stagePhotos.length;
    showPhoto(currentIndex, false);
  }, slideIntervalSeconds * 1000);
}

function restartSlideLoop() {
  startSlideLoop();
}

document.addEventListener('DOMContentLoaded', initStage);
