# GISTDA AI Photo Studio & Mission Avatar Kiosk
### Partner Engagement Program 2026 — Interactive Activation Suite

An enterprise-grade, high-speed **AI Photo Studio & Generative Mission Avatar Engine** engineered by **HAMO Event Lab** for the **Geo-Informatics and Space Technology Development Agency (GISTDA)** at **Partner Engagement Program 2026**.

This repository is cloned directly from the core **HAMO Photo Booth Engine** (`02_ENGINES/photo-booth-engine`), pre-wired for on-site interactive kiosks, instant smartphone QR delivery, 16:9 stage display broadcasting, and thermal photo printing.

---

## TOR Master Context & On-Site Deployment

| Parameter | Details |
|---|---|
| **Client Agency** | สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ (องค์การมหาชน) — GISTDA |
| **Operations** | HAMO Event Lab |
| **Event Name** | GISTDA Partner Engagement Program 2026 |
| **Dates** | October 27–31, 2026 (5 Days) |
| **Main Venue** | True Icon Hall, 7th Floor, Iconsiam, Bangkok |
| **Target Participants** | International VIP delegations (JAXA, ESA, NASA, CNES), satellite primes (Airbus, Planet Labs, SSTL), executive partners, and attendees |

### On-Site Touchpoints & Integration:
1. **VIP Lounge & Foyer Interactive Kiosk (Level 7)**:
   - Self-serve interactive touch totem / iPad kiosk allowing delegates and visitors to transform their portrait into accredited mission astronaut avatars.
2. **Activity 4: VIP Reception Dinner (Iconsiam Riverfront Grand Ballroom)**:
   - High-throughput digital souvenir studio generating custom branded keepsakes with GISTDA & Partner 2026 watermarks.
3. **Live Celebration Wall / Digital Signature Wall (`/stage.html`)**:
   - 16:9 full-screen auto-cycling showcase projected onto foyer LED screens (≥100") via real-time Server-Sent Events (SSE).

---

## Architecture & Key Capabilities

- **Multi-Input Camera Viewfinder**:
  - Live Webcam / Touch Kiosk Camera: Mirrored real-time feed with countdown voice synthesis, flash burst, and auto-centering guide.
  - Mobile Camera Flip: Smooth toggle between front and rear cameras on tablets/smartphones.
  - Photo / File Upload: Drag-and-drop or file picker with client-side scaling to 1024×1024.
  - 1-Click Test Model: Instant sample face for rapid offline UI testing and styling without needing an active webcam.
- **Swappable Multi-Engine Adapters (`engine/adapters/`)**:
  - `mock`: Instant zero-key simulation (instant color-grade and badge overlay for rapid offline UI testing and styling in IDE).
  - `cloud_fal`: Sub-second cloud generation via Fal.ai (`fal-ai/flux-pulid` or Flux Dev for zero-shot facial identity preservation).
  - `cloud_replicate`: Stability AI SDXL / Flux integration via Replicate.
  - `local_comfy`: Local GPU execution via ComfyUI WebSocket/REST API (RTX 5070 Ti 16GB at `http://127.0.0.1:8188`).
- **Instant Delivery & Printing**:
  - QR Code Delivery: Instant scan with any smartphone camera to download high-res portrait directly.
  - Direct Save: 1-click download button for desktop or mobile browser users.
  - Printer Spooler Hook: Pre-wired `/api/print` endpoint for on-site DNP / thermal badge printers.
- **Stage Display (`/stage.html`)**:
  - Real-time 16:9 celebration wall that receives newly generated photos automatically via SSE (`/api/stage/stream`).

---

## Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment (`.env`)
```env
# Cloud API Keys (Optional - only required if ACTIVE_ENGINE is cloud_fal or cloud_replicate)
FAL_KEY=your_fal_api_key_here
REPLICATE_API_TOKEN=

# Server Configuration
PORT=3006
NODE_ENV=development
ACTIVE_ENGINE=mock
```

### 3. Start Development Server
```bash
npm run dev
# or
node --watch server.js
```

### 4. Local URLs:
- **Main Photo Booth Kiosk**: http://localhost:3006
- **16:9 Live Celebration Wall**: http://localhost:3006/stage.html
- **API Health Check**: http://localhost:3006/api/config
