import * as THREE from 'three';

/**
 * Simplified Landing Page - optimized for performance
 */
export class LandingPageSimple {
  constructor(callbacks) {
    this.callbacks = callbacks;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.animationFrameId = null;
    this.lastRenderAt = 0;
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    this.element = this.createDOM();
    this.initThree();
    this.setupEventListeners();
    this.animate();
  }

  createDOM() {
    const page = document.createElement('div');
    page.className = 'landing-page';
    
    const canvas = document.createElement('canvas');
    canvas.className = 'landing-canvas';
    
    const content = document.createElement('div');
    content.className = 'landing-content landing-content-visible';
    
    const title = document.createElement('h1');
    title.className = 'landing-title';
    title.textContent = 'Exploring the Geometry of Spacetime';
    
    const subtitle = document.createElement('p');
    subtitle.className = 'landing-subtitle';
    subtitle.textContent = 'A journey through black holes and wormholes';
    
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'landing-buttons';
    
    // Wormhole portal button
    const wormholePortal = document.createElement('button');
    wormholePortal.className = 'portal-button';
    wormholePortal.innerHTML = '<span class="portal-icon">◇</span><span class="portal-label">Wormhole</span>';
    wormholePortal.addEventListener('click', () => this.callbacks.onWormholeClick());

    const equationsBtn = document.createElement('button');
    equationsBtn.className = 'glow-button equations-btn';
    equationsBtn.textContent = '∑ Equations & How It Works';
    equationsBtn.addEventListener('click', () => this.callbacks.onEquationsClick());
    
    buttonContainer.appendChild(wormholePortal);
    buttonContainer.appendChild(equationsBtn);
    
    content.appendChild(title);
    content.appendChild(subtitle);
    content.appendChild(buttonContainer);
    
    page.appendChild(canvas);
    page.appendChild(content);
    
    this.canvas = canvas;
    this.element = page;
    return page;
  }

  initThree() {
    console.log('LandingPageSimple: Initializing Three.js...');
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x000000, 5000, 10000);
    
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100000
    );
    this.camera.position.z = 100;
    
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
      precision: 'mediump'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.isMobile ? 0.85 : 1));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    console.log('LandingPageSimple: Three.js initialized, creating live background...');

    // Lightweight live cosmic background
    this.createLiveBackground();
  }

  createLiveBackground() {
    const textureSize = this.isMobile ? 512 : 768;
    const bgCanvas = document.createElement('canvas');
    bgCanvas.width = textureSize;
    bgCanvas.height = textureSize;
    const bgCtx = bgCanvas.getContext('2d');

    const gradient = bgCtx.createRadialGradient(
      textureSize * 0.5,
      textureSize * 0.45,
      textureSize * 0.08,
      textureSize * 0.5,
      textureSize * 0.5,
      textureSize * 0.7
    );
    gradient.addColorStop(0, '#1f1a44');
    gradient.addColorStop(0.5, '#0d1125');
    gradient.addColorStop(1, '#010205');
    bgCtx.fillStyle = gradient;
    bgCtx.fillRect(0, 0, textureSize, textureSize);

    const starCount = this.isMobile ? 80 : 140;
    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * textureSize;
      const y = Math.random() * textureSize;
      const r = Math.random() * 1.2 + 0.2;
      const alpha = Math.random() * 0.7 + 0.2;
      bgCtx.fillStyle = `rgba(${170 + Math.floor(Math.random() * 80)}, ${190 + Math.floor(Math.random() * 60)}, 255, ${alpha})`;
      bgCtx.beginPath();
      bgCtx.arc(x, y, r, 0, Math.PI * 2);
      bgCtx.fill();
    }

    this.liveBgTexture = new THREE.CanvasTexture(bgCanvas);
    this.liveBgTexture.wrapS = THREE.RepeatWrapping;
    this.liveBgTexture.wrapT = THREE.RepeatWrapping;
    this.liveBgTexture.repeat.set(1.15, 1.15);
    this.liveBgTexture.colorSpace = THREE.SRGBColorSpace;

    const bgGeometry = new THREE.SphereGeometry(1600, this.isMobile ? 12 : 18, this.isMobile ? 10 : 14);
    const bgMaterial = new THREE.MeshBasicMaterial({
      map: this.liveBgTexture,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.95
    });

    this.liveBgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
    this.scene.add(this.liveBgMesh);
  }

  setupEventListeners() {
    this._resizeListener = () => this.onWindowResize();
    window.addEventListener('resize', this._resizeListener);
  }

  onWindowResize() {
    if (!this.camera || !this.renderer) return;
    
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate(now = performance.now()) {
    this.animationFrameId = requestAnimationFrame((time) => this.animate(time));

    const minFrameGap = this.isMobile ? 50 : 33;
    if (now - this.lastRenderAt < minFrameGap) return;
    this.lastRenderAt = now;

    // Gentle camera movement
    const time = now * 0.0001;
    this.camera.position.x = Math.sin(time) * 30;
    this.camera.position.y = Math.cos(time * 0.8) * 20;
    this.camera.lookAt(0, 0, 0);

    if (this.liveBgTexture) {
      this.liveBgTexture.offset.x += 0.0001;
      this.liveBgTexture.offset.y += 0.00005;
    }
    
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    
    window.removeEventListener('resize', this._resizeListener);
    
    this.scene.children.forEach(child => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => {
            if (m.map) m.map.dispose();
            m.dispose();
          });
        } else {
          if (child.material.map) child.material.map.dispose();
          child.material.dispose();
        }
      }
    });

    if (this.liveBgTexture) {
      this.liveBgTexture.dispose();
      this.liveBgTexture = null;
    }
    
    this.renderer.dispose();
  }
}
