// حسابات فيزياء الفضاء والنسبية
// جميع الصيغ مأخوذة من الفيزياء النسبية والكلاسيكية

const G = 6.67430e-11; // ثابت الجاذبية (m³ kg⁻¹ s⁻²)
const c = 299792458; // سرعة الضوء (m/s)
const M_sun = 1.989e30; // كتلة الشمس (kg)
const M_earth = 5.972e24; // كتلة الأرض (kg)
const R_earth = 6371000; // نصف قطر الأرض (m)
const AU = 1.496e11; // الوحدة الفلكية (m)

// حساب نصف قطر شفارتسشيلد (Schwarzschild Radius)
export function schwarzschildRadius(mass) {
  // r_s = 2GM/c²
  return (2 * G * mass) / (c * c);
}

// حساب سرعة الهروب من جسم سماوي
export function escapeVelocity(mass, radius) {
  // v_e = √(2GM/r)
  return Math.sqrt((2 * G * mass) / radius);
}

// حساب تمدد الزمن النسبوي (Time Dilation)
export function timeDilation(v) {
  // t' = t/√(1 - v²/c²) - معامل لورنتز
  const factor = v / c;
  return 1 / Math.sqrt(1 - factor * factor);
}

// حساب الانزياح الأحمر النسبوي (Redshift)
export function dopperRedshift(v) {
  // z = √((1 + β)/(1 - β)) - 1 حيث β = v/c
  const beta = v / c;
  if (beta >= 1) return Infinity;
  const z = Math.sqrt((1 + beta) / (1 - beta)) - 1;
  return z;
}

// حساب طاقة الربط الجاذبي (Gravitational Binding Energy)
export function bindingEnergy(mass, radius) {
  // E_b ≈ (3/5) * G * M² / R
  return (3 * G * mass * mass) / (5 * radius);
}

// حساب قوة المد والجزر (Tidal Force)
export function tidalForce(M, m, r, d) {
  // F = 2 * G * M * m * d / r³
  // M: كتلة الجسم الأكبر
  // m: كتلة الجسم الأصغر
  // r: المسافة بين المركزين
  // d: نصف قطر الجسم الأصغر
  return (2 * G * M * m * d) / (r * r * r);
}

// حساب مدار إسكو (Innermost Stable Circular Orbit)
export function ISCO(M) {
  // r_isco = 6 * r_s = 12GM/c²
  const r_s = schwarzschildRadius(M);
  return 6 * r_s;
}

// حساب سرعة المدار الدائري
export function orbitalVelocity(mass, radius) {
  // v = √(GM/r)
  return Math.sqrt((G * mass) / radius);
}

// حساب المسافة من المجرة (معادلة هابل)
export function hubbleDistance(redshift) {
  // d = z * c / H0 حيث H0 ≈ 70 km/s/Mpc
  const H0 = 70000; // m/s per parsec
  const parsec = 3.086e16; // m
  const H0_SI = H0 / parsec;
  return (redshift * c) / H0_SI / AU;
}

// حساب درجة حرارة الجسم الأسود
export function blackbodyTemperature(wavelength) {
  // Wien's law: λ * T = b حيث b ≈ 2.898e-3 m·K
  const b = 2.897771955e-3;
  return b / wavelength;
}

// حساب قوة الإشعاع (Stefan-Boltzmann)
export function radiationPower(area, temperature) {
  // P = σ * A * T⁴ حيث σ ≈ 5.67e-8 W/(m²·K⁴)
  const sigma = 5.670374419e-8;
  return sigma * area * Math.pow(temperature, 4);
}

// حساب اللمعان النسبي
export function luminosity(mass) {
  // L/L_sun ≈ (M/M_sun)^3.5 (تقريب تقريبي)
  return Math.pow(mass / M_sun, 3.5);
}

// حساب العمر المتوقع للنجم
export function stellarAge(mass) {
  // T ≈ 10^10 * (M/M_sun)^-2.5 (بالسنوات)
  return 1e10 * Math.pow(mass / M_sun, -2.5);
}

// حساب التسارع الجاذبي على السطح
export function surfaceGravity(mass, radius) {
  // g = GM/r²
  return (G * mass) / (radius * radius);
}

// حساب الكتلة من السرعة المدارية
export function massfromOrbitalVelocity(velocity, radius) {
  // M = v²r/G
  return (velocity * velocity * radius) / G;
}

// حساب طول موجة كومبتون
export function comptonWavelength(mass) {
  // λ_c = h / (m * c) حيث h = 6.62607015e-34 J·s
  const h = 6.62607015e-34;
  return h / (mass * c);
}

// حساب طاقة الفوتون
export function photonEnergy(frequency) {
  // E = h * f
  const h = 6.62607015e-34;
  return h * frequency;
}

// تحويل درجة الحرارة من كلفن إلى سيليسيوس
export function kelvinToCelsius(K) {
  return K - 273.15;
}

// تحويل السنة الضوئية إلى كيلومترات
export function lightYearsToKm(ly) {
  const speedOfLight = 299792.458; // km/s
  const secondsPerYear = 365.25 * 24 * 60 * 60;
  return ly * speedOfLight * secondsPerYear;
}

// حساب الحجم الكروي
export function sphereVolume(radius) {
  // V = (4/3) * π * r³
  return (4/3) * Math.PI * radius * radius * radius;
}

// حساب الكثافة المتوسطة
export function averageDensity(mass, radius) {
  // ρ = M / V
  return mass / sphereVolume(radius);
}

export const physicsConstants = {
  G,
  c,
  M_sun,
  M_earth,
  R_earth,
  AU,
  h: 6.62607015e-34,
  k_B: 1.380649e-23,
  sigma: 5.670374419e-8
};
