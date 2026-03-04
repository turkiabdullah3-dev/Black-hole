// أدوات تفاعلية لحسابات الفيزياء والفلك
import * as physics from './physicsCalculations.js';

export function initializeCalculators() {
  // حاسبة نصف قطر شفارتسشيلد
  const schwarzschildForm = document.getElementById('schwarzschild-form');
  if (schwarzschildForm) {
    schwarzschildForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const mass = parseFloat(document.getElementById('schwarzschild-mass').value);
      const massType = document.getElementById('schwarzschild-type').value;
      
      // تحويل إلى كيلوجرام
      const massKg = massType === 'solar' ? mass * physics.physicsConstants.M_sun : mass;
      const radius = physics.schwarzschildRadius(massKg);
      
      document.getElementById('schwarzschild-result').innerHTML = `
        <div class="result-card">
          <h3>نصف قطر شفارتسشيلد</h3>
          <p class="value">${(radius / 1000).toFixed(2)} كم</p>
          <p class="detail">إذا تم ضغط هذه الكتلة إلى داخل هذا النصف القطر، ستصبح ثقباً أسود!</p>
        </div>
      `;
    });
  }

  // حاسبة سرعة الهروب
  const escapeForm = document.getElementById('escape-form');
  if (escapeForm) {
    escapeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const mass = parseFloat(document.getElementById('escape-mass').value);
      const radius = parseFloat(document.getElementById('escape-radius').value);
      
      const v_e = physics.escapeVelocity(mass, radius);
      const speedOfLight = physics.physicsConstants.c;
      
      document.getElementById('escape-result').innerHTML = `
        <div class="result-card">
          <h3>سرعة الهروب</h3>
          <p class="value">${(v_e / 1000).toFixed(2)} كم/ث</p>
          <p class="detail">${((v_e / speedOfLight) * 100).toFixed(3)}% من سرعة الضوء</p>
        </div>
      `;
    });
  }

  // حاسبة تمدد الزمن النسبوي
  const timeDilationForm = document.getElementById('time-dilation-form');
  if (timeDilationForm) {
    timeDilationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const velocity = parseFloat(document.getElementById('time-dilation-velocity').value);
      const earthTime = parseFloat(document.getElementById('time-dilation-time').value);
      
      const dilationFactor = physics.timeDilation(velocity);
      const properTime = earthTime / dilationFactor;
      
      document.getElementById('time-dilation-result').innerHTML = `
        <div class="result-card">
          <h3>تمدد الزمن</h3>
          <p class="value">${properTime.toFixed(2)} سنة</p>
          <p class="detail">لشخص يسافر بسرعة ${(velocity/physics.physicsConstants.c*100).toFixed(1)}% من سرعة الضوء</p>
          <p class="detail">بينما تمر ${earthTime} سنة على الأرض</p>
        </div>
      `;
    });
  }

  // حاسبة الانزياح الأحمر
  const redshiftForm = document.getElementById('redshift-form');
  if (redshiftForm) {
    redshiftForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const velocity = parseFloat(document.getElementById('redshift-velocity').value);
      const wavelength = parseFloat(document.getElementById('redshift-wavelength').value);
      
      const z = physics.dopperRedshift(velocity);
      const newWavelength = wavelength * (1 + z);
      
      document.getElementById('redshift-result').innerHTML = `
        <div class="result-card">
          <h3>الانزياح الأحمر النسبوي</h3>
          <p class="value">z = ${z.toFixed(4)}</p>
          <p class="detail">الطول الموجي الجديد: ${newWavelength.toFixed(2)} نانومتر</p>
          <p class="detail">بتحرك بعيداً بسرعة ${(velocity/1000).toFixed(0)} كم/ث</p>
        </div>
      `;
    });
  }

  // حاسبة قوة المد والجزر
  const tidalForm = document.getElementById('tidal-form');
  if (tidalForm) {
    tidalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const primaryMass = parseFloat(document.getElementById('tidal-primary-mass').value) * physics.physicsConstants.M_sun;
      const secondaryMass = parseFloat(document.getElementById('tidal-secondary-mass').value) * physics.physicsConstants.M_earth;
      const distance = parseFloat(document.getElementById('tidal-distance').value) * physics.physicsConstants.AU;
      const secondaryRadius = parseFloat(document.getElementById('tidal-secondary-radius').value) * physics.physicsConstants.R_earth;
      
      const tidalF = physics.tidalForce(primaryMass, secondaryMass, distance, secondaryRadius);
      
      document.getElementById('tidal-result').innerHTML = `
        <div class="result-card">
          <h3>قوة المد والجزر</h3>
          <p class="value">${(tidalF / 1e20).toFixed(2)} × 10²⁰ نيوتن</p>
          <p class="detail">قوة تمزق المحيط التي يعاني منها الجسم الثانوي</p>
        </div>
      `;
    });
  }

  // حاسبة مدار ISCO
  const iscoForm = document.getElementById('isco-form');
  if (iscoForm) {
    iscoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const mass = parseFloat(document.getElementById('isco-mass').value) * physics.physicsConstants.M_sun;
      
      const r_isco = physics.ISCO(mass);
      const v_isco = physics.orbitalVelocity(mass, r_isco);
      
      document.getElementById('isco-result').innerHTML = `
        <div class="result-card">
          <h3>مدار ISCO (الأقرب المستقر)</h3>
          <p class="value">${(r_isco / 1000).toFixed(0)} كم</p>
          <p class="detail">السرعة المدارية: ${(v_isco / 1000).toFixed(0)} كم/ث</p>
          <p class="detail">${((v_isco / physics.physicsConstants.c) * 100).toFixed(1)}% من سرعة الضوء</p>
        </div>
      `;
    });
  }
}

// دالة لرسم منحنى الإضاءة (Light Curve)
export function drawLightCurve(canvasId, time, brightness) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const padding = 40;

  // الخلفية
  ctx.fillStyle = '#0a0e27';
  ctx.fillRect(0, 0, width, height);

  // محاور
  ctx.strokeStyle = '#00d4ff';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(padding, height - padding);
  ctx.lineTo(width - padding, height - padding);
  ctx.moveTo(padding, height - padding);
  ctx.lineTo(padding, padding);
  ctx.stroke();

  // النقاط والخطوط
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  const maxBrightness = Math.max(...brightness);
  const minBrightness = Math.min(...brightness);
  const brightnessRange = maxBrightness - minBrightness || 1;

  ctx.strokeStyle = '#00ffdc';
  ctx.lineWidth = 2;
  ctx.beginPath();

  for (let i = 0; i < time.length; i++) {
    const x = padding + (i / (time.length - 1)) * plotWidth;
    const y = height - padding - ((brightness[i] - minBrightness) / brightnessRange) * plotHeight;
    
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();

  // النقاط
  ctx.fillStyle = '#ff6b6b';
  for (let i = 0; i < time.length; i++) {
    const x = padding + (i / (time.length - 1)) * plotWidth;
    const y = height - padding - ((brightness[i] - minBrightness) / brightnessRange) * plotHeight;
    
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // التسميات
  ctx.fillStyle = '#ffffff';
  ctx.font = '12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('الوقت', width / 2, height - 10);
  ctx.save();
  ctx.translate(15, height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('الإضاءة النسبية', 0, 0);
  ctx.restore();
}

// دالة لرسم دالة الكتلة النسبية
export function drawMassFunction(canvasId, masses, luminosities) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const padding = 40;

  // الخلفية
  ctx.fillStyle = '#0a0e27';
  ctx.fillRect(0, 0, width, height);

  // الشبكة
  ctx.strokeStyle = '#1a3a3a';
  ctx.lineWidth = 1;
  for (let i = 1; i < 5; i++) {
    const x = padding + (i / 5) * (width - 2 * padding);
    ctx.beginPath();
    ctx.moveTo(x, padding);
    ctx.lineTo(x, height - padding);
    ctx.stroke();

    const y = height - padding - (i / 5) * (height - 2 * padding);
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  // محاور
  ctx.strokeStyle = '#00d4ff';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(padding, height - padding);
  ctx.lineTo(width - padding, height - padding);
  ctx.moveTo(padding, height - padding);
  ctx.lineTo(padding, padding);
  ctx.stroke();

  // البيانات
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  const maxMass = Math.max(...masses);
  const maxLuminosity = Math.max(...luminosities);

  ctx.fillStyle = '#9678ff';
  for (let i = 0; i < masses.length; i++) {
    const x = padding + (masses[i] / maxMass) * plotWidth;
    const y = height - padding - (luminosities[i] / maxLuminosity) * plotHeight;
    
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default {
  initializeCalculators,
  drawLightCurve,
  drawMassFunction
};
