/**
 * THAILAND SPACE EXPO 2026 (TSX 2026) — GISTDA AI MISSION STUDIO
 * Engineered by HAMO Event Lab (Sinjanakom Corporation Co., Ltd.)
 * - 1 Official Theme: THEOS-2 Mission Spacesuit (Seamless Neural Face-Swap)
 * - Photo Format Selection FIRST (4:6 Postcard, 1:1 Square, 2:6 Photostrip)
 * - Live Camera Viewfinder with matching Aspect Ratio & Real-time Frame Border Overlay
 * - Interactive Touch Studio (Drawing, Signature, Stamps, Stickers)
 * - High-speed Local Composite & Dye-sub Printer Spooler Hook
 * - Bilingual Support (Thai Default / English Toggle)
 * - Live Celebration Wall Broadcast (/stage.html via SSE)
 */

const TRANSLATIONS = {
  th: {
    agency_badge: 'GISTDA THAILAND',
    header_title: 'THAILAND SPACE EXPO 2026',
    header_sub: 'AI MISSION AVATAR STUDIO',
    btn_stage: '📺 จอแสดงผล Stage',
    step1_tag: 'ขั้นตอนที่ 1 จาก 4 • เตรียมภารกิจ',
    step1_title: 'THEOS-2 Mission Avatar Studio',
    step1_desc: 'ชุดนักบินอวกาศภารกิจทางการ สทอภ. • เลือกขนาดรูปถ่ายและแตะเพื่อเริ่มถ่ายภาพ:',
    hero_theme_title: 'ชุดนักบินอวกาศภารกิจ THEOS-2',
    hero_theme_desc: 'ชุดปฏิบัติการอวกาศสภาวะสุญญากาศทางการ พร้อมตราภารกิจ THEOS-2 ธงชาติไทย และหน้ากากตรวจจับข้อมูล HUD สวมใส่ใบหน้าของคุณแบบเรียลไทม์',
    feat_instant: 'สวมใส่ชุดทันใจ',
    feat_frame: 'พรีวิวกรอบภาพสด',
    feat_print: 'พร้อมพิมพ์เป็นที่ระลึก',
    format_select_title: '📐 เลือกขนาดรูปถ่ายและกรอบ',
    format_select_hint: 'ช่องมองกล้องจะปรับสัดส่วนตามกรอบที่คุณเลือก',
    btn_confirm_style: 'เริ่มถ่ายภาพสด 📸',
    btn_back_style: '⬅️ เปลี่ยนขนาด',
    style_prefix: 'สไตล์',
    costume_prefix: 'ชุด',
    tab_camera: '📸 ถ่ายภาพสด',
    tab_upload: '📁 อัปโหลดภาพ',
    upload_title: 'คลิกเพื่อเลือกภาพ หรือลากไฟล์มาวาง',
    upload_hint: 'รองรับภาพเซลฟี่หรือภาพพอร์ตเทรต (JPG, PNG, WebP)',
    btn_browse: 'เลือกไฟล์ในเครื่อง',
    btn_snap: 'ถ่ายภาพ',
    btn_gen_upload: 'สร้างอวาตาร์ภารกิจ',
    vf_face_guide: 'จัดตำแหน่งใบหน้าให้อยู่ในกรอบหมวก',
    loading_title: 'กำลังสังเคราะห์อวาตาร์ภารกิจ...',
    loading_sub: 'ผสานใบหน้าเข้ากับชุดนักบินอวกาศ THEOS-2 อย่างแนบเนียน...',
    step3_tag: 'ขั้นตอนที่ 3 จาก 4',
    step3_title: 'สตูดิโอตกแต่งภาพดิจิทัล',
    step3_hint: 'เซ็นชื่อด้วยปากกานีออน ติดตราสัญลักษณ์ภารกิจ และปรับแต่งกรอบภาพได้ตามต้องการ',
    btn_undo: '↩️ ย้อนกลับ',
    btn_clear: '🗑️ ล้างทั้งหมด',
    tool_frames: '🖼️ กรอบตราสัญลักษณ์ภารกิจ',
    tool_pen: '✍️ ปากกานีออนและลายเซ็นต์',
    tool_stickers: '✨ ตราสัญลักษณ์และสติกเกอร์',
    btn_finish: 'เสร็จสิ้นและรับภาพ 🚀',
    btn_assembling: '⏳ กำลังรวมภาพที่ระลึก...',
    result_badge: 'ภาพที่ระลึกพร้อมดาวน์โหลด & พิมพ์',
    result_title: 'สแกน QR Code หรือบันทึกลงอุปกรณ์',
    result_hint: 'สแกนด้วยกล้องสมาร์ตโฟนเพื่อดาวน์โหลดภาพความละเอียดสูงเก็บเป็นที่ระลึก',
    btn_save: '⬇️ บันทึกลงอุปกรณ์',
    btn_print: '🖨️ พิมพ์ภาพที่ระลึก',
    btn_next: '✨ ต้อนรับท่านถัดไป',
    pen_badge: 'ปากกานีออน',
    eraser_badge: 'ยางลบ',
    printing_msg: '🖨️ กำลังส่งพิมพ์ภาพ...',
    print_queued: 'ส่งไฟล์ภาพไปยังเครื่องพิมพ์ดายซับเรียบร้อยแล้ว!',
    print_failed: 'ไม่สามารถส่งพิมพ์ภาพได้',
    saved_device: '✅ บันทึกลงเครื่องสำเร็จ',
  },
  en: {
    agency_badge: 'GISTDA THAILAND',
    header_title: 'THAILAND SPACE EXPO 2026',
    header_sub: 'AI MISSION AVATAR STUDIO',
    btn_stage: '📺 Stage Screen',
    step1_tag: 'STEP 1 OF 4 • MISSION SETUP',
    step1_title: 'THEOS-2 Mission Avatar Studio',
    step1_desc: 'Official GISTDA Deep Space EVA Suit • Select your photo size and tap to start:',
    hero_theme_title: 'THEOS-2 Mission Spacesuit',
    hero_theme_desc: 'High-altitude pressurized EVA suit equipped with THEOS-2 mission badge, Thai national flag patch, and cybernetic HUD helmet. Seamless real-time face integration.',
    feat_instant: 'Instant Face Fit',
    feat_frame: 'Live Border Viewfinder',
    feat_print: 'Dye-Sub Keepsake Ready',
    format_select_title: '📐 SELECT PHOTO SIZE & BORDER',
    format_select_hint: 'Viewfinder will adapt to this exact border',
    btn_confirm_style: 'Start Live Camera 📸',
    btn_back_style: '⬅️ Change Size',
    style_prefix: 'Style',
    costume_prefix: 'Spacesuit',
    tab_camera: '📸 Live Camera',
    tab_upload: '📁 Upload Photo',
    upload_title: 'Click to Select or Drag Photo',
    upload_hint: 'Upload any selfie or portrait photo (JPG, PNG, WebP)',
    btn_browse: 'Browse Files',
    btn_snap: 'Take Snapshot',
    btn_gen_upload: 'Generate Mission Avatar',
    vf_face_guide: 'ALIGN FACE IN HELMET',
    loading_title: 'Synthesizing Mission Avatar...',
    loading_sub: 'Seamlessly aligning face into THEOS-2 Spacesuit...',
    step3_tag: 'STEP 3 OF 4',
    step3_title: 'Interactive Touch Studio',
    step3_hint: 'Sign with neon starlight, place mission patches, and finalize your keepsake border!',
    btn_undo: '↩️ Undo',
    btn_clear: '🗑️ Clear',
    tool_frames: '🖼️ MISSION FORMAT & FRAMES',
    tool_pen: '✍️ SIGNATURE & WISH PEN',
    tool_stickers: '✨ DIGITAL STICKERS & PROPS',
    btn_finish: 'Complete & Download 🚀',
    btn_assembling: '⏳ Assembling Keepsake...',
    result_badge: 'MISSION SOUVENIR READY',
    result_title: 'Scan or Save to Device',
    result_hint: 'Scan with your smartphone camera to save the high-res keepsake directly.',
    btn_save: '⬇️ Save to Device',
    btn_print: '🖨️ Print Keepsake',
    btn_next: '✨ Next Guest',
    pen_badge: 'Neon Pen',
    eraser_badge: 'Eraser',
    printing_msg: '🖨️ Printing Photo...',
    print_queued: 'Photo queued to local dye-sub printer successfully!',
    print_failed: 'Failed to send print job.',
    saved_device: '✅ Saved to Device',
  }
};

class PhotoBoothApp {
  constructor() {
    this.lang = 'en';
    this.selectedCostumeId = 'theos2_astronaut';
    this.selectedCostumeName = 'THEOS-2 Mission Spacesuit';

    // Format & Border State
    this.selectedFrameId = 'portrait_4x6';
    this.selectedFrameSvg = '/assets/frames/frame_portrait_4x6.svg';
    this.selectedFrameAspectRatio = '2:3';

    this.config = null;
    this.stream = null;
    this.currentFacingMode = 'user';
    this.inputMode = 'camera'; // 'camera' | 'upload'
    this.uploadedImageBase64 = null;
    this.currentGeneratedImageUrl = null;
    this.audioCtx = null;

    // Decoration Studio State
    this.brushColor = '#00F0FF';
    this.brushSize = 6;
    this.isEraser = false;
    this.isDrawing = false;
    this.lastX = 0;
    this.lastY = 0;
    this.drawingUndoStack = [];
    this.activeStickerEl = null;

    // Core DOM Elements
    this.videoEl = document.getElementById('webcam');
    this.canvasEl = document.getElementById('photo-canvas');
    this.cameraFlash = document.getElementById('camera-flash');
    this.cameraFrameOverlay = document.getElementById('camera-frame-overlay');
    this.cameraFormatBadge = document.getElementById('camera-format-badge');
    this.quickFormatPills = document.getElementById('quick-format-pills');
    this.formatOptionsGrid = document.getElementById('format-options-grid');
    this.btnConfirmTheme = document.getElementById('btn-confirm-theme');
    this.btnBackTheme = document.getElementById('btn-back-theme');
    this.selectedThemeBadge = document.getElementById('selected-theme-badge');
    this.btnSnap = document.getElementById('btn-snap');
    this.btnReset = document.getElementById('btn-reset');
    this.btnPrint = document.getElementById('btn-print');
    this.btnDownload = document.getElementById('btn-download');
    this.countdownOverlay = document.getElementById('countdown-overlay');
    this.countdownNumber = document.getElementById('countdown-number');
    this.engineBadge = document.getElementById('engine-badge');

    // Language buttons
    this.btnLangTh = document.getElementById('btn-lang-th');
    this.btnLangEn = document.getElementById('btn-lang-en');

    // Mode Switcher Elements
    this.tabModeCamera = document.getElementById('tab-mode-camera');
    this.tabModeUpload = document.getElementById('tab-mode-upload');
    this.wrapperCamera = document.getElementById('wrapper-camera');
    this.wrapperUpload = document.getElementById('wrapper-upload');
    this.btnFlipCamera = document.getElementById('btn-flip-camera');
    this.fileInput = document.getElementById('file-input');
    this.uploadDropzone = document.getElementById('upload-dropzone');
    this.uploadPreview = document.getElementById('upload-preview');
    this.uploadPlaceholder = document.getElementById('upload-placeholder');
    this.btnBrowseFile = document.getElementById('btn-browse-file');
    this.btnGenerateUploaded = document.getElementById('btn-generate-uploaded');

    // Decoration Studio Elements
    this.screenDecorate = document.getElementById('step-decorate');
    this.studioViewport = document.getElementById('studio-viewport');
    this.studioBasePhoto = document.getElementById('studio-base-photo');
    this.studioFrameOverlay = document.getElementById('studio-frame-overlay');
    this.studioDrawCanvas = document.getElementById('studio-draw-canvas');
    this.studioStickersLayer = document.getElementById('studio-stickers-layer');
    this.framesSelector = document.getElementById('frames-selector');
    this.stickersTray = document.getElementById('stickers-tray');
    this.btnUndoDraw = document.getElementById('btn-undo-draw');
    this.btnClearDraw = document.getElementById('btn-clear-draw');
    this.btnFinishDecorate = document.getElementById('btn-finish-decorate');
    this.brushModeBadge = document.getElementById('brush-mode-badge');
    this.brushSizeSlider = document.getElementById('brush-size-slider');
    this.brushSizeDisplay = document.getElementById('brush-size-display');
    this.btnToolEraser = document.getElementById('btn-tool-eraser');

    // Screens
    this.screenTheme = document.getElementById('step-theme');
    this.screenCapture = document.getElementById('step-capture');
    this.screenLoading = document.getElementById('step-loading');
    this.screenResult = document.getElementById('step-result');

    // Result elements
    this.resultPhoto = document.getElementById('result-photo');
    this.qrCode = document.getElementById('qr-code');

    this.init();
  }

  async init() {
    this.setupTheme();
    this.setupLanguage();
    this.setupAudio();
    this.bindEvents();
    this.bindUploadEvents();
    this.bindStudioEvents();
    await this.fetchConfig();
    await this.setupCamera();
  }

  /* -------------------------------------------------------------------------- */
  /* 0. LANGUAGE SWITCHER (THAI / ENGLISH)                                      */
  /* -------------------------------------------------------------------------- */
  setupLanguage() {
    const userExplicitlyToggled = localStorage.getItem('hamo_user_toggled_lang');
    const savedLang = localStorage.getItem('hamo_booth_lang');
    this.lang = (userExplicitlyToggled && savedLang) ? savedLang : 'en';

    if (this.btnLangTh) {
      this.btnLangTh.addEventListener('click', () => {
        localStorage.setItem('hamo_user_toggled_lang', 'true');
        this.setLanguage('th');
      });
    }
    if (this.btnLangEn) {
      this.btnLangEn.addEventListener('click', () => {
        localStorage.setItem('hamo_user_toggled_lang', 'true');
        this.setLanguage('en');
      });
    }
    this.applyLanguage();
  }

  setLanguage(lang) {
    this.lang = lang;
    localStorage.setItem('hamo_booth_lang', lang);
    if (this.btnLangTh) this.btnLangTh.classList.toggle('active', lang === 'th');
    if (this.btnLangEn) this.btnLangEn.classList.toggle('active', lang === 'en');
    this.applyLanguage();
    if (this.config) {
      this.renderFormatCards();
      this.renderFramesSelector();
      this.renderStickersTray();
      this.updateFormatBadge();
    }
  }

  applyLanguage() {
    const t = TRANSLATIONS[this.lang] || TRANSLATIONS.th;
    document.documentElement.lang = this.lang;

    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setText('badge-agency-text', t.agency_badge);
    setText('txt-header-title', t.header_title);
    setText('txt-header-sub', t.header_sub);
    setText('txt-btn-stage', t.btn_stage);

    setText('txt-step1-tag', t.step1_tag);
    setText('txt-step1-title', t.step1_title);
    setText('txt-step1-desc', t.step1_desc);
    setText('txt-hero-theme-title', t.hero_theme_title);
    setText('txt-hero-theme-desc', t.hero_theme_desc);
    setText('txt-feat-instant', t.feat_instant);
    setText('txt-feat-frame', t.feat_frame);
    setText('txt-feat-print', t.feat_print);
    setText('txt-format-select-title', t.format_select_title);
    setText('txt-format-select-hint', t.format_select_hint);
    setText('txt-btn-confirm-theme', t.btn_confirm_style);

    setText('txt-btn-back', t.btn_back_style);
    setText('txt-tab-camera', t.tab_camera);
    setText('txt-tab-upload', t.tab_upload);
    setText('txt-upload-title', t.upload_title);
    setText('txt-upload-hint', t.upload_hint);
    setText('txt-btn-browse', t.btn_browse);
    setText('txt-btn-snap', t.btn_snap);
    setText('txt-btn-gen-upload', t.btn_gen_upload);
    setText('txt-vf-face-guide', t.vf_face_guide);

    setText('txt-loading-title', t.loading_title);
    setText('loading-subtitle', t.loading_sub);

    setText('txt-step3-tag', t.step3_tag);
    setText('txt-step3-title', t.step3_title);
    setText('txt-step3-hint', t.step3_hint);
    setText('txt-btn-undo', t.btn_undo);
    setText('txt-btn-clear', t.btn_clear);
    setText('txt-tool-frames', t.tool_frames);
    setText('txt-tool-pen', t.tool_pen);
    setText('txt-tool-stickers', t.tool_stickers);
    setText('txt-btn-finish', t.btn_finish);

    setText('txt-result-badge', t.result_badge);
    setText('txt-result-title', t.result_title);
    setText('txt-result-hint', t.result_hint);
    setText('txt-btn-download', t.btn_save);
    setText('txt-btn-print', t.btn_print);
    setText('txt-btn-next', t.btn_next);

    if (this.brushModeBadge) {
      this.brushModeBadge.textContent = this.isEraser ? t.eraser_badge : t.pen_badge;
    }
  }

  /* -------------------------------------------------------------------------- */
  /* 0.1 THEME SWITCHER (DARK / LIGHT MODE)                                     */
  /* -------------------------------------------------------------------------- */
  setupTheme() {
    this.btnThemeToggle = document.getElementById('btn-theme-toggle');
    const userExplicitlyToggled = localStorage.getItem('hamo_user_toggled_theme');
    const savedTheme = localStorage.getItem('hamo_photo_booth_theme');
    const initialTheme = (userExplicitlyToggled && savedTheme) ? savedTheme : 'dark';
    this.setTheme(initialTheme);

    if (this.btnThemeToggle) {
      this.btnThemeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('hamo_user_toggled_theme', 'true');
        this.setTheme(nextTheme);
      });
    }
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hamo_photo_booth_theme', theme);
    
    const logoImg = document.querySelector('.brand-logo-img.gistda-logo');
    if (logoImg) {
      logoImg.src = theme === 'dark' ? 'logo/gistda-white.png' : 'logo/gistda-color.png';
    }
  }

  /* -------------------------------------------------------------------------- */
  /* 1. AUDIO SYNTHESIZER (BEEP & SHUTTER)                                      */
  /* -------------------------------------------------------------------------- */
  setupAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      try {
        this.audioCtx = new AudioContext();
      } catch (e) {
        console.warn('AudioContext deferred:', e);
      }
    }
  }

  playBeep() {
    if (!this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.audioCtx.currentTime); // High pitch beep
      gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.12);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  playShutterSound() {
    if (!this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const bufferSize = this.audioCtx.sampleRate * 0.15;
      const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.audioCtx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1200;
      const gain = this.audioCtx.createGain();
      gain.gain.setValueAtTime(0.4, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.15);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);
      noise.start();
    } catch (err) {
      console.warn('Audio play error:', err);
    }
  }

  /* -------------------------------------------------------------------------- */
  /* 2. CONFIGURATION & FORMAT SELECTION FIRST                                  */
  /* -------------------------------------------------------------------------- */
  async fetchConfig() {
    try {
      const res = await fetch('/api/config');
      this.config = await res.json();

      if (this.engineBadge) {
        this.engineBadge.textContent = `🛰️ ${this.config.active_engine.toUpperCase()}: READY`;
      }

      if (this.config.print_enabled && this.btnPrint) {
        this.btnPrint.classList.remove('hidden');
      }

      // Default format: portrait_4x6 or config default
      const defaultId = this.config.default_frame_id || 'portrait_4x6';
      this.renderFormatCards();
      this.selectFormat(defaultId);

      // Render frames selector in touch studio & stickers tray
      this.renderFramesSelector();
      this.renderStickersTray();

      this.showScreen('theme');
    } catch (err) {
      console.error('Failed to load configuration:', err);
    }
  }

  renderFormatCards() {
    if (!this.formatOptionsGrid) return;
    this.formatOptionsGrid.innerHTML = '';
    const frames = (this.config?.frame_templates || []).filter(f => f.id !== 'none');

    frames.forEach((frame) => {
      const card = document.createElement('div');
      const isActive = frame.id === this.selectedFrameId;
      card.className = `format-card ${isActive ? 'active' : ''}`;
      card.dataset.frameId = frame.id;

      const displayName = this.lang === 'th' ? (frame.name_th || frame.name) : frame.name;
      const displayTag = this.lang === 'th' ? (frame.tag_th || frame.tag || frame.aspect_ratio) : (frame.tag || frame.aspect_ratio);
      const displayDesc = this.lang === 'th' ? (frame.description_th || frame.description || '') : (frame.description || '');

      let ratioClass = 'r-4x6';
      if (frame.aspect_ratio === '1:1') ratioClass = 'r-1x1';
      else if (frame.aspect_ratio === '1:3') ratioClass = 'r-2x6';

      card.innerHTML = `
        <div class="format-aspect-preview">
          <div class="ratio-box ${ratioClass}"></div>
        </div>
        <div class="format-info">
          <div class="format-tag-row">
            <span class="format-dim-badge">${frame.width}×${frame.height}</span>
            <span>${displayTag}</span>
          </div>
          <h4 class="format-title">${displayName}</h4>
          <p class="format-desc">${displayDesc}</p>
        </div>
      `;

      card.addEventListener('click', () => {
        this.selectFormat(frame.id);
      });

      this.formatOptionsGrid.appendChild(card);
    });
  }

  selectFormat(frameId) {
    const frame = (this.config?.frame_templates || []).find(f => f.id === frameId);
    if (!frame) return;

    this.selectedFrameId = frame.id;
    this.selectedFrameSvg = frame.svg_path;
    this.selectedFrameAspectRatio = frame.aspect_ratio || '2:3';

    // Highlight active card
    document.querySelectorAll('.format-card').forEach((c) => {
      c.classList.toggle('active', c.dataset.frameId === frameId);
    });

    this.applyFormatToViewfinder(frame);
    this.updateFormatBadge();
  }

  applyFormatToViewfinder(frame) {
    const formatClass = frame.aspect_ratio === '1:1' ? 'format-1x1' : (frame.aspect_ratio === '1:3' ? 'format-2x6' : 'format-4x6');

    // Update Camera Viewfinder & Upload wrapper classes
    if (this.wrapperCamera) {
      this.wrapperCamera.className = `camera-wrapper ${formatClass}`;
    }
    if (this.wrapperUpload) {
      this.wrapperUpload.className = `upload-wrapper ${this.inputMode === 'upload' ? '' : 'hidden'} ${formatClass}`;
    }

    // Update Live Border Frame Overlay over camera
    if (this.cameraFrameOverlay) {
      if (frame.svg_path) {
        this.cameraFrameOverlay.src = frame.svg_path;
        this.cameraFrameOverlay.classList.remove('hidden');
      } else {
        this.cameraFrameOverlay.classList.add('hidden');
      }
    }

    // Telemetry text
    const telemFormat = document.getElementById('vf-telemetry-format');
    if (telemFormat) {
      telemFormat.textContent = `FORMAT: ${frame.name.toUpperCase()}`;
    }

    // Update quick format pills in camera header
    this.renderQuickFormatPills();
  }

  renderQuickFormatPills() {
    if (!this.quickFormatPills) return;
    this.quickFormatPills.innerHTML = '';
    const frames = (this.config?.frame_templates || []).filter(f => f.id !== 'none');

    frames.forEach((frame) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      const isActive = frame.id === this.selectedFrameId;
      btn.className = `quick-format-pill ${isActive ? 'active' : ''}`;
      const label = frame.aspect_ratio === '2:3' ? '4:6' : (frame.aspect_ratio === '1:1' ? '1:1' : '2:6');
      btn.textContent = label;
      btn.title = frame.name;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectFormat(frame.id);
      });
      this.quickFormatPills.appendChild(btn);
    });
  }

  updateFormatBadge() {
    const frame = (this.config?.frame_templates || []).find(f => f.id === this.selectedFrameId);
    if (!frame) return;
    const name = this.lang === 'th' ? (frame.name_th || frame.name) : frame.name;
    if (this.cameraFormatBadge) {
      this.cameraFormatBadge.textContent = name;
    }
    if (this.selectedThemeBadge) {
      this.selectedThemeBadge.textContent = this.lang === 'th' ? 'ชุดอวกาศ: THEOS-2' : 'Spacesuit: THEOS-2';
    }
  }

  /* -------------------------------------------------------------------------- */
  /* 3. CAMERA SETUP & VIEWPORT CROPPED CAPTURE                                 */
  /* -------------------------------------------------------------------------- */
  async setupCamera() {
    if (this.inputMode !== 'camera') return;
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
    }

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: this.currentFacingMode,
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
        audio: false,
      });

      this.videoEl.srcObject = this.stream;
      if (this.currentFacingMode === 'user') {
        this.videoEl.style.transform = 'scaleX(-1)';
      } else {
        this.videoEl.style.transform = 'scaleX(1)';
      }
    } catch (err) {
      console.warn('Camera access unavailable:', err);
    }
  }

  flipCamera() {
    this.currentFacingMode = this.currentFacingMode === 'user' ? 'environment' : 'user';
    this.setupCamera();
  }

  switchInputMode(mode) {
    this.inputMode = mode;
    const formatClass = this.selectedFrameAspectRatio === '1:1' ? 'format-1x1' : (this.selectedFrameAspectRatio === '1:3' ? 'format-2x6' : 'format-4x6');

    if (mode === 'camera') {
      this.tabModeCamera.classList.add('active');
      this.tabModeUpload.classList.remove('active');
      this.wrapperCamera.className = `camera-wrapper ${formatClass}`;
      this.wrapperUpload.classList.add('hidden');
      this.btnSnap.classList.remove('hidden');
      this.btnGenerateUploaded.classList.add('hidden');
      this.setupCamera();
    } else {
      this.tabModeCamera.classList.remove('active');
      this.tabModeUpload.classList.add('active');
      this.wrapperCamera.classList.add('hidden');
      this.wrapperUpload.className = `upload-wrapper ${formatClass}`;
      this.btnSnap.classList.add('hidden');
      this.btnGenerateUploaded.classList.remove('hidden');
      if (this.stream) {
        this.stream.getTracks().forEach((track) => track.stop());
        this.stream = null;
      }
    }
  }

  processUploadedFile(file) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');
        const minDim = Math.min(img.width, img.height);
        const sx = (img.width - minDim) / 2;
        const sy = (img.height - minDim) / 2;
        ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, 1024, 1024);

        this.uploadedImageBase64 = canvas.toDataURL('image/jpeg', 0.94);
        this.uploadPreview.src = this.uploadedImageBase64;
        this.uploadPreview.classList.remove('hidden');
        this.uploadPlaceholder.classList.add('hidden');
        this.btnGenerateUploaded.disabled = false;
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  bindUploadEvents() {
    if (this.tabModeCamera) {
      this.tabModeCamera.addEventListener('click', () => this.switchInputMode('camera'));
    }
    if (this.tabModeUpload) {
      this.tabModeUpload.addEventListener('click', () => this.switchInputMode('upload'));
    }
    if (this.btnFlipCamera) {
      this.btnFlipCamera.addEventListener('click', () => this.flipCamera());
    }
    if (this.btnBrowseFile && this.fileInput) {
      this.btnBrowseFile.addEventListener('click', (e) => {
        e.stopPropagation();
        this.fileInput.click();
      });
    }
    if (this.uploadDropzone && this.fileInput) {
      this.uploadDropzone.addEventListener('click', () => this.fileInput.click());
      this.uploadDropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        this.uploadDropzone.classList.add('drag-over');
      });
      this.uploadDropzone.addEventListener('dragleave', () => this.uploadDropzone.classList.remove('drag-over'));
      this.uploadDropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        this.uploadDropzone.classList.remove('drag-over');
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          this.processUploadedFile(e.dataTransfer.files[0]);
        }
      });
    }
    if (this.fileInput) {
      this.fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
          this.processUploadedFile(e.target.files[0]);
        }
      });
    }
    if (this.btnGenerateUploaded) {
      this.btnGenerateUploaded.addEventListener('click', () => {
        if (!this.uploadedImageBase64) return;
        this.captureAndGenerate(this.uploadedImageBase64);
      });
    }
  }

  capturePhotoBase64() {
    const ctx = this.canvasEl.getContext('2d');
    const vidW = this.videoEl.videoWidth || 1280;
    const vidH = this.videoEl.videoHeight || 720;

    let targetRatio = 1.0;
    if (this.selectedFrameAspectRatio === '2:3') {
      targetRatio = 2 / 3;
    } else if (this.selectedFrameAspectRatio === '1:3') {
      targetRatio = 1 / 3;
    }

    // Calculate crop rectangle matching viewfinder on screen
    let cropW, cropH, cropX, cropY;
    const vidRatio = vidW / vidH;

    if (vidRatio > targetRatio) {
      cropH = vidH;
      cropW = Math.round(vidH * targetRatio);
      cropX = Math.round((vidW - cropW) / 2);
      cropY = 0;
    } else {
      cropW = vidW;
      cropH = Math.round(vidW / targetRatio);
      cropX = 0;
      cropY = Math.round((vidH - cropH) / 2);
    }

    const outWidth = targetRatio === 1 ? 1024 : (targetRatio === 2/3 ? 1200 : 600);
    const outHeight = targetRatio === 1 ? 1024 : 1800;

    this.canvasEl.width = outWidth;
    this.canvasEl.height = outHeight;

    if (this.videoEl.readyState >= 2) {
      ctx.save();
      if (this.currentFacingMode === 'user') {
        ctx.scale(-1, 1);
        ctx.drawImage(this.videoEl, cropX, cropY, cropW, cropH, -outWidth, 0, outWidth, outHeight);
      } else {
        ctx.drawImage(this.videoEl, cropX, cropY, cropW, cropH, 0, 0, outWidth, outHeight);
      }
      ctx.restore();
    } else {
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, outWidth, outHeight);
    }

    return this.canvasEl.toDataURL('image/jpeg', 0.94);
  }

  /* -------------------------------------------------------------------------- */
  /* 4. INTERACTIVE DECORATION STUDIO (FRAMES, STICKERS, DRAWING)               */
  /* -------------------------------------------------------------------------- */
  renderFramesSelector() {
    if (!this.framesSelector) return;
    this.framesSelector.innerHTML = '';
    const frames = this.config?.frame_templates || [];

    frames.forEach((frame) => {
      const btn = document.createElement('button');
      btn.className = `frame-btn ${frame.id === this.selectedFrameId ? 'active' : ''}`;
      const name = this.lang === 'th' ? (frame.name_th || frame.name) : frame.name;
      btn.innerHTML = `<span>${frame.icon || '🛰️'}</span><span>${name}</span>`;
      btn.onclick = () => {
        document.querySelectorAll('.frame-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.applyFrame(frame);
      };
      this.framesSelector.appendChild(btn);
    });
  }

  applyFrame(frame) {
    this.selectedFrameId = frame.id;
    this.selectedFrameSvg = frame.svg_path;
    this.selectedFrameAspectRatio = frame.aspect_ratio || '2:3';

    // Update studio viewport format class
    const formatClass = frame.aspect_ratio === '1:1' ? 'format-1x1' : (frame.aspect_ratio === '1:3' ? 'format-2x6' : 'format-4x6');
    this.studioViewport.className = `studio-viewport ${formatClass}`;

    // Update photo frame container class on result screen too
    const resultFrameContainer = document.querySelector('.photo-frame-container');
    if (resultFrameContainer) {
      resultFrameContainer.className = `photo-frame-container ${formatClass}`;
    }

    // Update frame overlay image
    if (frame.svg_path) {
      this.studioFrameOverlay.src = frame.svg_path;
      this.studioFrameOverlay.classList.remove('hidden');
    } else {
      this.studioFrameOverlay.classList.add('hidden');
    }

    setTimeout(() => this.resizeDrawCanvas(), 50);
  }

  renderStickersTray() {
    if (!this.stickersTray) return;
    this.stickersTray.innerHTML = '';
    const stickers = this.config?.stickers || [];

    stickers.forEach((sticker) => {
      const btn = document.createElement('button');
      btn.className = 'sticker-pick-btn';
      const name = this.lang === 'th' ? (sticker.name_th || sticker.name) : sticker.name;
      btn.title = name;
      btn.innerHTML = `<img src="${sticker.src}" alt="${name}" class="sticker-pick-img">`;
      btn.onclick = () => this.addStickerToCanvas(sticker);
      this.stickersTray.appendChild(btn);
    });
  }

  addStickerToCanvas(sticker) {
    const stickerEl = document.createElement('div');
    stickerEl.className = 'sticker-item selected';
    const width = sticker.default_width || 100;
    stickerEl.style.width = `${width}px`;
    stickerEl.style.height = `${width * 0.75}px`;
    stickerEl.style.left = '40%';
    stickerEl.style.top = '40%';

    stickerEl.innerHTML = `
      <img src="${sticker.src}" alt="${sticker.name}" style="width:100%;height:100%;object-fit:contain;pointer-events:none;">
      <button class="sticker-del-btn" style="position:absolute;top:-8px;right:-8px;background:#ef4444;color:#fff;border:none;border-radius:50%;width:22px;height:22px;font-size:11px;font-weight:bold;cursor:pointer;display:flex;align-items:center;justify-content:center;" title="Delete">✕</button>
    `;

    // Make Draggable
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let origLeft = 0;
    let origTop = 0;

    const onPointerDown = (e) => {
      if (e.target.classList.contains('sticker-del-btn')) {
        stickerEl.remove();
        return;
      }
      isDragging = true;
      startX = e.clientX || e.touches?.[0]?.clientX;
      startY = e.clientY || e.touches?.[0]?.clientY;
      origLeft = stickerEl.offsetLeft;
      origTop = stickerEl.offsetTop;

      document.querySelectorAll('.sticker-item').forEach(s => s.classList.remove('selected'));
      stickerEl.classList.add('selected');
      this.activeStickerEl = stickerEl;
      e.stopPropagation();
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const curX = e.clientX || e.touches?.[0]?.clientX;
      const curY = e.clientY || e.touches?.[0]?.clientY;
      const dx = curX - startX;
      const dy = curY - startY;
      stickerEl.style.left = `${origLeft + dx}px`;
      stickerEl.style.top = `${origTop + dy}px`;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    stickerEl.addEventListener('mousedown', onPointerDown);
    stickerEl.addEventListener('touchstart', onPointerDown, { passive: false });
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove, { passive: false });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);

    this.studioStickersLayer.appendChild(stickerEl);
  }

  resizeDrawCanvas() {
    const rect = this.studioViewport.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.studioDrawCanvas.width = rect.width * dpr;
    this.studioDrawCanvas.height = rect.height * dpr;
    this.studioDrawCanvas.style.width = `${rect.width}px`;
    this.studioDrawCanvas.style.height = `${rect.height}px`;

    const ctx = this.studioDrawCanvas.getContext('2d');
    ctx.scale(dpr, dpr);
    this.drawingUndoStack = [];
    this.saveCanvasState();
  }

  saveCanvasState() {
    const ctx = this.studioDrawCanvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, this.studioDrawCanvas.width, this.studioDrawCanvas.height);
    this.drawingUndoStack.push(imageData);
    if (this.drawingUndoStack.length > 20) this.drawingUndoStack.shift();
  }

  undoDraw() {
    if (this.drawingUndoStack.length <= 1) return;
    this.drawingUndoStack.pop();
    const prev = this.drawingUndoStack[this.drawingUndoStack.length - 1];
    const ctx = this.studioDrawCanvas.getContext('2d');
    ctx.putImageData(prev, 0, 0);
  }

  clearDrawingsAndStickers() {
    const ctx = this.studioDrawCanvas.getContext('2d');
    ctx.clearRect(0, 0, this.studioDrawCanvas.width, this.studioDrawCanvas.height);
    this.drawingUndoStack = [];
    this.saveCanvasState();
    this.studioStickersLayer.innerHTML = '';
  }

  bindStudioEvents() {
    const t = () => TRANSLATIONS[this.lang] || TRANSLATIONS.th;

    // Color Palette
    document.querySelectorAll('.color-dot').forEach((dot) => {
      dot.addEventListener('click', () => {
        document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
        if (this.btnToolEraser) this.btnToolEraser.classList.remove('active');
        dot.classList.add('active');
        this.brushColor = dot.dataset.color;
        this.isEraser = false;
        if (this.brushModeBadge) this.brushModeBadge.textContent = t().pen_badge;
      });
    });

    // Eraser
    if (this.btnToolEraser) {
      this.btnToolEraser.addEventListener('click', () => {
        this.isEraser = !this.isEraser;
        this.btnToolEraser.classList.toggle('active', this.isEraser);
        document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
        if (this.brushModeBadge) this.brushModeBadge.textContent = this.isEraser ? t().eraser_badge : t().pen_badge;
      });
    }

    // Brush Slider
    if (this.brushSizeSlider) {
      this.brushSizeSlider.addEventListener('input', (e) => {
        this.brushSize = parseInt(e.target.value, 10);
        if (this.brushSizeDisplay) this.brushSizeDisplay.textContent = `${this.brushSize}px`;
      });
    }

    // Undo / Clear
    if (this.btnUndoDraw) this.btnUndoDraw.addEventListener('click', () => this.undoDraw());
    if (this.btnClearDraw) this.btnClearDraw.addEventListener('click', () => this.clearDrawingsAndStickers());

    // Finish Decoration Studio
    if (this.btnFinishDecorate) {
      this.btnFinishDecorate.addEventListener('click', () => this.bakeFinalComposite());
    }

    // Touch & Mouse Drawing on Canvas
    const canvas = this.studioDrawCanvas;
    const ctx = canvas.getContext('2d');

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    const startDraw = (e) => {
      e.preventDefault();
      this.isDrawing = true;
      const pos = getPos(e);
      this.lastX = pos.x;
      this.lastY = pos.y;
    };

    const drawMove = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      const pos = getPos(e);

      ctx.save();
      const dpr = window.devicePixelRatio || 1;
      ctx.lineWidth = this.brushSize * dpr;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (this.isEraser) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.strokeStyle = 'rgba(0,0,0,1)';
      } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = this.brushColor;
        ctx.shadowBlur = 10 * dpr;
        ctx.shadowColor = this.brushColor;
      }

      ctx.beginPath();
      ctx.moveTo(this.lastX * dpr, this.lastY * dpr);
      ctx.lineTo(pos.x * dpr, pos.y * dpr);
      ctx.stroke();
      ctx.restore();

      this.lastX = pos.x;
      this.lastY = pos.y;
    };

    const stopDraw = () => {
      if (this.isDrawing) {
        this.isDrawing = false;
        this.saveCanvasState();
      }
    };

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', drawMove);
    window.addEventListener('mouseup', stopDraw);

    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('touchmove', drawMove, { passive: false });
    window.addEventListener('touchend', stopDraw);
  }

  /* -------------------------------------------------------------------------- */
  /* 5. BAKE COMPOSITE (PHOTO + FRAMES + DRAWINGS + STICKERS)                   */
  /* -------------------------------------------------------------------------- */
  async bakeFinalComposite() {
    const t = TRANSLATIONS[this.lang] || TRANSLATIONS.th;
    this.btnFinishDecorate.disabled = true;
    this.btnFinishDecorate.innerHTML = t.btn_assembling;

    try {
      const exportCanvas = document.createElement('canvas');
      let targetWidth = 1024;
      let targetHeight = 1024;

      if (this.selectedFrameAspectRatio === '2:3') {
        targetWidth = 1200;
        targetHeight = 1800; // 4x6 Keepsake
      } else if (this.selectedFrameAspectRatio === '1:3') {
        targetWidth = 600;
        targetHeight = 1800; // 2x6 strip
      }

      exportCanvas.width = targetWidth;
      exportCanvas.height = targetHeight;
      const ctx = exportCanvas.getContext('2d');

      // 1. Draw base photo
      const baseImg = this.studioBasePhoto;
      if (baseImg.complete && baseImg.naturalWidth > 0) {
        if (this.selectedFrameAspectRatio === '1:3') {
          // Double shot stack for 2x6 strip (Slot 1: Y=50, H=680; Slot 2: Y=770, H=680)
          ctx.drawImage(baseImg, 40, 50, 520, 680);
          ctx.drawImage(baseImg, 40, 770, 520, 680);
        } else {
          ctx.drawImage(baseImg, 0, 0, targetWidth, targetHeight);
        }
      }

      // 2. Draw Hand-drawn Signature & Wishes Canvas
      ctx.drawImage(this.studioDrawCanvas, 0, 0, targetWidth, targetHeight);

      // 3. Draw Placed Stickers
      const stickers = this.studioStickersLayer.querySelectorAll('.sticker-item');
      const vRect = this.studioViewport.getBoundingClientRect();

      for (const st of stickers) {
        const img = st.querySelector('img');
        if (img && img.complete) {
          const sRect = st.getBoundingClientRect();
          const relX = (sRect.left - vRect.left) / vRect.width;
          const relY = (sRect.top - vRect.top) / vRect.height;
          const relW = sRect.width / vRect.width;
          const relH = sRect.height / vRect.height;
          ctx.drawImage(img, relX * targetWidth, relY * targetHeight, relW * targetWidth, relH * targetHeight);
        }
      }

      // 4. Draw Frame Overlay on top (if present)
      if (this.selectedFrameSvg && !this.studioFrameOverlay.classList.contains('hidden')) {
        const frameImg = new Image();
        frameImg.crossOrigin = 'anonymous';
        await new Promise((resolve) => {
          frameImg.onload = () => {
            ctx.drawImage(frameImg, 0, 0, targetWidth, targetHeight);
            resolve();
          };
          frameImg.onerror = () => resolve();
          frameImg.src = this.selectedFrameSvg;
        });
      }

      const compositeDataUrl = exportCanvas.toDataURL('image/jpeg', 0.95);

      // Send to server to spool/save and broadcast to /stage
      const compRes = await fetch('/api/compose-print', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          compositeDataUrl,
          format: this.selectedFrameAspectRatio,
        }),
      });
      const compData = await compRes.json();

      const finalUrl = compData.imageUrl || compositeDataUrl;
      this.currentGeneratedImageUrl = finalUrl;
      this.resultPhoto.src = finalUrl;

      // Update photo frame container class on result screen
      const resultFrameContainer = document.querySelector('.photo-frame-container');
      if (resultFrameContainer) {
        const formatClass = this.selectedFrameAspectRatio === '1:1' ? 'format-1x1' : (this.selectedFrameAspectRatio === '1:3' ? 'format-2x6' : 'format-4x6');
        resultFrameContainer.className = `photo-frame-container ${formatClass}`;
      }

      // Update download link
      if (this.btnDownload) {
        this.btnDownload.href = finalUrl;
        this.btnDownload.setAttribute('download', `gistda_tsx2026_avatar_${Date.now()}.jpg`);
      }

      this.showScreen('result');
    } catch (err) {
      console.error('Bake composite error:', err);
      this.showScreen('result');
    } finally {
      this.btnFinishDecorate.disabled = false;
      this.btnFinishDecorate.innerHTML = t.btn_finish;
    }
  }

  /* -------------------------------------------------------------------------- */
  /* 6. CAPTURE, COUNTDOWN & GENERATE                                          */
  /* -------------------------------------------------------------------------- */
  bindEvents() {
    const t = () => TRANSLATIONS[this.lang] || TRANSLATIONS.th;

    if (this.btnConfirmTheme) {
      this.btnConfirmTheme.addEventListener('click', () => {
        this.showScreen('capture');
      });
    }

    if (this.btnBackTheme) {
      this.btnBackTheme.addEventListener('click', () => {
        this.showScreen('theme');
      });
    }

    this.btnSnap.addEventListener('click', () => this.startCountdown());

    this.btnReset.addEventListener('click', () => {
      this.clearDrawingsAndStickers();
      this.showScreen('theme');
    });

    if (this.btnDownload) {
      this.btnDownload.addEventListener('click', (e) => this.handleDownload(e));
    }

    if (this.btnPrint) {
      this.btnPrint.addEventListener('click', async () => {
        if (!this.currentGeneratedImageUrl) return;
        this.btnPrint.disabled = true;
        this.btnPrint.textContent = t().printing_msg;
        try {
          await fetch('/api/print', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              imageUrl: this.currentGeneratedImageUrl,
              format: this.selectedFrameAspectRatio,
            }),
          });
          alert(t().print_queued);
        } catch (e) {
          alert(t().print_failed);
        } finally {
          this.btnPrint.disabled = false;
          this.btnPrint.textContent = t().btn_print;
        }
      });
    }
  }

  async handleDownload(e) {
    if (!this.currentGeneratedImageUrl) return;
    e.preventDefault();
    const t = TRANSLATIONS[this.lang] || TRANSLATIONS.th;

    const originalText = this.btnDownload.innerHTML;
    this.btnDownload.innerHTML = '⏳ ...';

    try {
      const response = await fetch(this.currentGeneratedImageUrl);
      const blob = await response.blob();
      const filename = `gistda_tsx2026_avatar_${Date.now()}.jpg`;

      const file = new File([blob], filename, { type: 'image/jpeg' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Thailand Space Expo 2026',
          text: 'My Mission Avatar at Thailand Space Expo 2026 (GISTDA)',
        });
        this.btnDownload.innerHTML = originalText;
        return;
      }

      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);

      this.btnDownload.innerHTML = t.saved_device;
      setTimeout(() => {
        this.btnDownload.innerHTML = originalText;
      }, 2500);
    } catch (err) {
      console.warn('Smart download fallback:', err);
      window.open(this.currentGeneratedImageUrl, '_blank');
      this.btnDownload.innerHTML = originalText;
    }
  }

  async startCountdown() {
    let count = this.config?.countdown_seconds || 3;
    this.countdownNumber.textContent = count;
    this.countdownOverlay.classList.remove('hidden');
    this.btnSnap.disabled = true;

    this.playBeep();

    const timer = setInterval(() => {
      count -= 1;
      if (count > 0) {
        this.countdownNumber.textContent = count;
        this.playBeep();
      } else {
        clearInterval(timer);
        this.countdownOverlay.classList.add('hidden');
        this.btnSnap.disabled = false;

        this.playShutterSound();
        this.triggerCameraFlash();

        setTimeout(() => {
          const photoBase64 = this.capturePhotoBase64();
          this.captureAndGenerate(photoBase64);
        }, 150);
      }
    }, 1000);
  }

  triggerCameraFlash() {
    if (!this.cameraFlash) return;
    this.cameraFlash.classList.remove('hidden');
    setTimeout(() => {
      this.cameraFlash.classList.add('hidden');
    }, 450);
  }

  async captureAndGenerate(photoBase64) {
    this.showScreen('loading');

    const payload = {
      image: photoBase64,
      costumeId: 'theos2_astronaut',
      format: this.selectedFrameAspectRatio,
      isCostume: true,
    };

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.error || 'Generation failed');
      }

      this.currentGeneratedImageUrl = data.imageUrl;
      this.studioBasePhoto.src = data.imageUrl;
      this.qrCode.src = data.qrUrl;

      // Apply the active frame chosen in Step 1
      const activeFrame = (this.config?.frame_templates || []).find(f => f.id === this.selectedFrameId) || this.config?.frame_templates?.[0];
      if (activeFrame) {
        this.applyFrame(activeFrame);
      }

      // Transition to Step 4: Decoration Studio
      this.studioBasePhoto.onload = () => {
        this.showScreen('decorate');
        this.resizeDrawCanvas();
      };
      if (this.studioBasePhoto.complete) {
        this.showScreen('decorate');
        this.resizeDrawCanvas();
      }
    } catch (err) {
      console.error('Generation Error:', err);
      alert(`Face Swap Error: ${err.message}`);
      this.showScreen('theme');
    }
  }

  showScreen(screenName) {
    this.screenTheme.classList.add('hidden');
    this.screenCapture.classList.add('hidden');
    this.screenLoading.classList.add('hidden');
    this.screenDecorate.classList.add('hidden');
    this.screenResult.classList.add('hidden');

    if (screenName === 'theme') {
      this.screenTheme.classList.remove('hidden');
    } else if (screenName === 'capture') {
      this.screenCapture.classList.remove('hidden');
      if (this.inputMode === 'camera' && !this.stream) {
        this.setupCamera();
      }
    } else if (screenName === 'loading') {
      this.screenLoading.classList.remove('hidden');
    } else if (screenName === 'decorate') {
      this.screenDecorate.classList.remove('hidden');
    } else if (screenName === 'result') {
      this.screenResult.classList.remove('hidden');
    }
  }
}

function startPhotoBoothApp() {
  if (!window.photoBoothApp) {
    window.photoBoothApp = new PhotoBoothApp();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startPhotoBoothApp);
} else {
  startPhotoBoothApp();
}
