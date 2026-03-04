// نظام عرض البيانات التفاعلي
import { exoplanets, galaxies, stars, nebulae } from './astronomyData.js';
import { nasaData, esaData, spaceWeatherData, latestDiscoveries } from './realWorldData.js';
import * as physics from './physicsCalculations.js';

// تهيئة صفحة الفلك
export function initAstronomyPage() {
  displayExoplanets();
  displayGalaxies();
  displayStars();
  displayNebulae();
}

function displayExoplanets() {
  const container = document.getElementById('exoplanet-grid');
  if (!container) return;

  container.innerHTML = exoplanets.map(planet => `
    <div class="exoplanet-card">
      <div class="planet-image">
        <img src="${planet.image}" alt="${planet.name}">
      </div>
      <div class="planet-info">
        <h3>${planet.name}</h3>
        <p class="star">حول ${planet.star}</p>
        <div class="stats">
          <div class="stat">
            <span class="label">المسافة:</span>
            <span class="value">${planet.distance} فرسخ</span>
          </div>
          <div class="stat">
            <span class="label">النوع:</span>
            <span class="value">${planet.type}</span>
          </div>
          <div class="stat">
            <span class="label">الاكتشاف:</span>
            <span class="value">${planet.discovered}</span>
          </div>
          <div class="stat">
            <span class="label">الكتلة:</span>
            <span class="value">${planet.mass} M⊕</span>
          </div>
          <div class="stat">
            <span class="label">الحرارة:</span>
            <span class="value">${planet.temp} K</span>
          </div>
          <div class="stat">
            <span class="label">صالح للعيش:</span>
            <span class="value ${planet.habitable ? 'habitable' : 'not-habitable'}">${planet.habitable ? 'نعم ✓' : 'غير محتمل'}</span>
          </div>
        </div>
        <p class="description">${planet.description}</p>
      </div>
    </div>
  `).join('');
}

function displayGalaxies() {
  const container = document.getElementById('galaxy-grid');
  if (!container) return;

  container.innerHTML = galaxies.map(galaxy => `
    <div class="galaxy-card">
      <div class="galaxy-image">
        <img src="${galaxy.image}" alt="${galaxy.name}">
      </div>
      <div class="galaxy-info">
        <h3>${galaxy.name}</h3>
        <p class="type">نوع: ${galaxy.type}</p>
        <div class="stats">
          <div class="stat">
            <span class="label">المسافة:</span>
            <span class="value">${galaxy.distance} مليون سنة ضوئية</span>
          </div>
          <div class="stat">
            <span class="label">القطر:</span>
            <span class="value">${(galaxy.diameter / 1000).toFixed(0)}K ly</span>
          </div>
          <div class="stat">
            <span class="label">النجوم:</span>
            <span class="value">${(galaxy.stars / 1e9).toFixed(1)} مليار</span>
          </div>
        </div>
        <p class="description">${galaxy.description}</p>
        <div class="facts">
          ${galaxy.facts.map(fact => `<div class="fact">• ${fact}</div>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function displayStars() {
  const container = document.getElementById('stars-grid');
  if (!container) return;

  container.innerHTML = stars.map(star => `
    <div class="star-card" style="border-left-color: ${star.color}">
      <div class="star-header">
        <h3>${star.name}</h3>
        <span class="type">${star.type}</span>
      </div>
      <div class="star-stats">
        <div class="stat">
          <span>الحجم النسبي:</span>
          <span class="value">${star.luminosity > 100 ? 'عملاق' : star.luminosity > 10 ? 'كبير' : 'عادي'}</span>
        </div>
        <div class="stat">
          <span>درجة الحرارة:</span>
          <span class="value">${(star.temp / 1000).toFixed(1)} K</span>
        </div>
        <div class="stat">
          <span>اللمعان النسبي:</span>
          <span class="value">${star.luminosity.toFixed(1)} L☉</span>
        </div>
        <div class="stat">
          <span>المسافة:</span>
          <span class="value">${star.distance.toFixed(2)} pc</span>
        </div>
        <div class="stat">
          <span>القدر الظاهري:</span>
          <span class="value">${star.magnitude.toFixed(2)}</span>
        </div>
      </div>
      <p>${star.description}</p>
    </div>
  `).join('');
}

function displayNebulae() {
  const container = document.getElementById('nebulae-grid');
  if (!container) return;

  container.innerHTML = nebulae.map(nebula => `
    <div class="nebula-card">
      <div class="nebula-header">
        <h3>${nebula.name}</h3>
        <span class="type">${nebula.type}</span>
      </div>
      <div class="nebula-stats">
        <div class="stat">
          <span>المسافة:</span>
          <span>${nebula.distance} سنة ضوئية</span>
        </div>
        <div class="stat">
          <span>القطر:</span>
          <span>${nebula.diameter} سنة ضوئية</span>
        </div>
        <div class="stat">
          <span>درجة الحرارة:</span>
          <span>${nebula.temp} كلفن</span>
        </div>
        <div class="stat">
          <span>القدر:</span>
          <span>${nebula.brightness}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// عرض بيانات NASA
export function displayNASAData() {
  const container = document.getElementById('nasa-data');
  if (!container) return;

  // صور JWST
  const jwstHtml = `
    <div class="data-section">
      <h3>صور جيمس ويب</h3>
      <div class="image-grid">
        ${nasaData.jwstImages.map(image => `
          <div class="data-card">
            <h4>${image.name}</h4>
            <p class="meta">التاريخ: ${image.date}</p>
            <p class="meta">الموجة: ${image.wavelength}</p>
            <p class="meta">المسافة: ${image.distance}</p>
            <p>${image.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // المهام النشطة
  const missionsHtml = `
    <div class="data-section">
      <h3>المهام النشطة</h3>
      <div class="missions-grid">
        ${nasaData.missions.map(mission => `
          <div class="mission-card">
            <h4>${mission.name}</h4>
            <div class="status" data-status="${mission.status.toLowerCase()}">
              ${mission.status}
            </div>
            <p class="location">📍 ${mission.location}</p>
            <p class="date">منذ ${new Date(mission.operationalSince).getFullYear()}</p>
            <p class="discoveries">🔍 ${mission.discoveries} اكتشاف</p>
            <p>${mission.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.innerHTML = jwstHtml + missionsHtml;
}

// عرض بيانات ESA
export function displayESAData() {
  const container = document.getElementById('esa-data');
  if (!container) return;

  const esaHtml = `
    <div class="data-section">
      <h3>مراقبة كوبرنيكوس</h3>
      <div class="observations-grid">
        ${esaData.copernicusObservations.map(obs => `
          <div class="obs-card">
            <h4>${obs.name}</h4>
            <p class="date">📅 ${obs.date}</p>
            <p>${obs.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="data-section">
      <h3>مراقب النجوم Gaia</h3>
      <div class="gaia-stats">
        <div class="stat">
          <span class="label">عدد النجوم المرصودة:</span>
          <span class="value">${(esaData.gaiaData.totalStars / 1e9).toFixed(2)} مليار</span>
        </div>
        <div class="stat">
          <span class="label">دقة القياس:</span>
          <span class="value">${esaData.gaiaData.parallaxPrecision} ميلي ثانية</span>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = esaHtml;
}

// عرض بيانات الطقس الفضائي
export function displaySpaceWeather() {
  const container = document.getElementById('space-weather');
  if (!container) return;

  const updateTime = new Date().toLocaleTimeString('ar-SA');
  
  const weatherHtml = `
    <div class="weather-update">آخر تحديث: ${updateTime}</div>
    
    <div class="weather-section">
      <h3>الرياح الشمسية</h3>
      <div class="weather-stats">
        <div class="weather-stat">
          <span class="label">السرعة</span>
          <span class="value">${spaceWeatherData.solarWind.speed.toFixed(0)} كم/ث</span>
        </div>
        <div class="weather-stat">
          <span class="label">الكثافة</span>
          <span class="value">${spaceWeatherData.solarWind.density.toFixed(1)} ن/سم³</span>
        </div>
        <div class="weather-stat">
          <span class="label">درجة الحرارة</span>
          <span class="value">${(spaceWeatherData.solarWind.temperature / 1000).toFixed(0)}K</span>
        </div>
      </div>
    </div>

    <div class="weather-section">
      <h3>نشاط الشمس</h3>
      <div class="weather-stats">
        <div class="weather-stat">
          <span class="label">فئة الانفجار الحالي</span>
          <span class="value">${spaceWeatherData.solarFlares.current}</span>
        </div>
        <div class="weather-stat">
          <span class="label">عدد الانفجارات (24 ساعة)</span>
          <span class="value">${spaceWeatherData.solarFlares.count24h}</span>
        </div>
      </div>
    </div>

    <div class="weather-section">
      <h3>المغناطيسية الأرضية</h3>
      <div class="weather-stats">
        <div class="weather-stat">
          <span class="label">مؤشر Kp</span>
          <span class="value">${spaceWeatherData.magnetosphere.kpIndex}/9</span>
        </div>
        <div class="weather-stat">
          <span class="label">الحالة</span>
          <span class="value">${spaceWeatherData.magnetosphere.status}</span>
        </div>
        <div class="weather-stat">
          <span class="label">شدة الأضواء القطبية</span>
          <span class="value">${spaceWeatherData.magnetosphere.auroraIntensity}</span>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = weatherHtml;
}

// عرض آخر الاكتشافات
export function displayLatestDiscoveries() {
  const container = document.getElementById('latest-discoveries');
  if (!container) return;

  const discoveriesHtml = latestDiscoveries.map(discovery => `
    <div class="discovery-card significance-${discovery.significance.toLowerCase()}">
      <div class="discovery-header">
        <h4>${discovery.title}</h4>
        <span class="date">${discovery.date}</span>
      </div>
      <p class="source">المصدر: ${discovery.source}</p>
      <p class="summary">${discovery.summary}</p>
      <div class="significance">أهمية: ${discovery.significance}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <h3>آخر الاكتشافات العلمية</h3>
    <div class="discoveries-list">
      ${discoveriesHtml}
    </div>
  `;
}

// دالة عامة لتهيئة جميع البيانات
export function initializeAllData() {
  initAstronomyPage();
  displayNASAData();
  displayESAData();
  displaySpaceWeather();
  displayLatestDiscoveries();
}

export default {
  initAstronomyPage,
  displayNASAData,
  displayESAData,
  displaySpaceWeather,
  displayLatestDiscoveries,
  initializeAllData
};
