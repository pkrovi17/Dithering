# Dithershop

Dithershop is a browser-based retro media editor for turning images and video into dithered, ASCII, halftone, CRT, and terminal-inspired visuals. It runs as a static web app and includes a layer stack for compositing images before sending them through the main effects engine.

## Features

- Image and video processing in the browser
- WebGL2 accelerated rendering path
- ASCII art rendering with configurable character sets and image controls
- Dithering, halftone, contour, edge detection, crosshatch, block, threshold, noise, matrix rain, and Voronoi-style effects
- CRT-style post-processing, including scanlines, bloom, grain, chromatic offset, vignette, barrel distortion, and phosphor tinting
- Layer panel with image imports, visibility toggles, reordering, opacity, and blend modes
- Flattened PNG export for layer composites
- Built-in process monitor for import, update, and export activity

## Project Structure

```text
.
├── index.html              # App entry point
├── index-DXtjAZsq.css      # Bundled base styles
├── index-D5s-AdpN.js       # Main app bundle
├── index-D4g1FOHw.js       # Rendering/effects bundle
├── index-C-104lQ3.js       # Supporting bundle
├── index-CPD5w-YN.js       # Supporting bundle
├── index-DKljlg_S.js       # Supporting bundle
├── avc-BEVfBVZY.js         # Video encoding support bundle
├── dithershop-pro.css      # Dithershop CRT/layer UI styling
└── dithershop-pro.js       # Dithershop layer stack and process monitor
```

## Running Locally

Because the app uses JavaScript modules, serve the folder with a local static server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

No build step or package install is required for the current checked-in version.

## Basic Workflow

1. Open the app in a modern browser with WebGL2 support.
2. Import an image or video into the main editor.
3. Adjust the effect controls to build a dithered, ASCII, CRT, or glitch-style output.
4. Use the right-side layer panel to import multiple image layers.
5. Reorder layers, toggle visibility, set opacity, and choose blend modes.
6. Send the active layer to the editor or export the visible stack as a flattened PNG.

## Browser Notes

Dithershop is designed for modern desktop browsers. Some video export paths may depend on browser media APIs such as WebCodecs, MediaRecorder, and WebGL2 support.

## Development Notes

This repository currently contains built static assets rather than the original source project. If source files are added later, update this README with the package manager, build command, and deployment workflow.
