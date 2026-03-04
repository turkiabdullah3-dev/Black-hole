import * as THREE from 'three';
import { LandingPageSimple } from './components/LandingPageSimple.js';
import { BlackHoleScene } from './scenes/BlackHoleScene.js';
import { WormholeScene } from './scenes/WormholeScene.js';
import { EquationsPage } from './components/EquationsPage.js';

export class App {
  constructor() {
    console.log('App: Initializing...');
    this.root = document.getElementById('root');
    console.log('App: Root element:', this.root);
    this.currentPage = null;
    this.init();
  }

  init() {
    // Check if there's a scene parameter in the URL
    const params = new URLSearchParams(window.location.search);
    const scene = params.get('scene');
    
    console.log('App: Detected scene parameter:', scene);
    
    if (scene === 'blackhole') {
      console.log('App: Loading Black Hole scene...');
      this.renderBlackHole();
    } else if (scene === 'wormhole') {
      console.log('App: Loading Wormhole scene...');
      this.renderWormhole();
    } else {
      console.log('App: Rendering landing page...');
      this.renderLanding();
    }
  }

  renderLanding() {
    this.cleanupCurrentPage();
    this.currentPage = new LandingPageSimple({
      onBlackHoleClick: () => this.renderBlackHole(),
      onWormholeClick: () => this.renderWormhole(),
      onEquationsClick: () => this.renderEquations()
    });
    this.root.appendChild(this.currentPage.element);
  }


  renderBlackHole() {
    this.cleanupCurrentPage();
    this.currentPage = new BlackHoleScene({
      onBack: () => this.renderLanding()
    });
    this.root.appendChild(this.currentPage.element);
  }

  renderWormhole() {
    this.cleanupCurrentPage();
    this.currentPage = new WormholeScene({
      onBack: () => this.renderLanding()
    });
    this.root.appendChild(this.currentPage.element);
  }

  renderEquations() {
    this.cleanupCurrentPage();
    this.currentPage = new EquationsPage({
      onBack: () => this.renderLanding()
    });
    this.root.appendChild(this.currentPage.element);
  }

  cleanupCurrentPage() {
    if (this.currentPage) {
      this.currentPage.dispose();
      this.currentPage.element.remove();
      this.currentPage = null;
    }
  }

  dispose() {
    this.cleanupCurrentPage();
  }
}

// Initialize app when DOM is ready
console.log('App: Document ready state:', document.readyState);
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('App: DOMContentLoaded triggered');
    window.app = new App();
  });
} else {
  console.log('App: DOM already loaded, initializing immediately');
  window.app = new App();
}

window.addEventListener('beforeunload', () => {
  if (window.app) {
    window.app.dispose();
  }
});

export default App;
