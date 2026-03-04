// بيانات فلك حقيقية ودقيقة
export const exoplanets = [
  {
    name: 'Proxima Centauri b',
    star: 'Proxima Centauri',
    distance: 4.24,
    discovered: 2016,
    type: 'Terrestrial',
    mass: 1.27,
    radius: 1.1,
    temp: 234,
    habitable: true,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Ccircle cx="100" cy="100" r="80" fill="%235b4d99"/%3E%3Ccircle cx="100" cy="100" r="75" fill="%236b5daa" opacity="0.6"/%3E%3C/svg%3E',
    description: 'أقرب كوكب صالح للسكن من الأرض، يدور حول نجم بروكسيما سنتوري',
    details: {
      atmosphere: 'محتمل N₂, O₂',
      water: 'محتمل',
      gravity: '1.1g'
    }
  },
  {
    name: 'TRAPPIST-1e',
    star: 'TRAPPIST-1',
    distance: 12.1,
    discovered: 2017,
    type: 'Terrestrial',
    mass: 0.62,
    radius: 0.92,
    temp: 246,
    habitable: true,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Ccircle cx="100" cy="100" r="80" fill="%234a7c59"/%3E%3Ccircle cx="100" cy="100" r="75" fill="%235a8c69" opacity="0.6"/%3E%3C/svg%3E',
    description: 'كوكب صخري في منطقة صالحة للسكن حول نجم TRAPPIST-1',
    details: {
      atmosphere: 'قد تحتوي على ماء سائل',
      water: 'مؤكد',
      gravity: '0.62g'
    }
  },
  {
    name: 'Kepler-452b',
    star: 'Kepler-452',
    distance: 1206,
    discovered: 2015,
    type: 'Super-Earth',
    mass: 5.0,
    radius: 1.6,
    temp: 265,
    habitable: true,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Ccircle cx="100" cy="100" r="80" fill="%23cc8833"/%3E%3Ccircle cx="100" cy="100" r="75" fill="%23dd9944" opacity="0.6"/%3E%3C/svg%3E',
    description: 'أرض فائقة شبيهة بالأرض، تدور حول نجم شبيه بالشمس',
    details: {
      atmosphere: 'محتمل',
      water: 'محتمل',
      gravity: '1.6g'
    }
  },
  {
    name: 'LHS 475 b',
    star: 'LHS 475',
    distance: 41,
    discovered: 2023,
    type: 'Terrestrial',
    mass: 0.99,
    radius: 0.99,
    temp: 340,
    habitable: false,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Ccircle cx="100" cy="100" r="80" fill="%23ff6b6b"/%3E%3Ccircle cx="100" cy="100" r="75" fill="%23ff8888" opacity="0.6"/%3E%3C/svg%3E',
    description: 'اكتشف بواسطة تلسكوب جيمس ويب، كوكب شبه أرضي بسيط',
    details: {
      atmosphere: 'قد تحتوي على ثاني أكسيد الكربون',
      water: 'غير محتمل - حار جداً',
      gravity: '0.99g'
    }
  },
  {
    name: 'TOI-1695 b',
    star: 'TOI-1695',
    distance: 186,
    discovered: 2023,
    type: 'Mini Neptune',
    mass: 13.8,
    radius: 2.6,
    temp: 520,
    habitable: false,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Ccircle cx="100" cy="100" r="80" fill="%2300ccff"/%3E%3Ccircle cx="100" cy="100" r="75" fill="%2333ddff" opacity="0.6"/%3E%3C/svg%3E',
    description: 'نبتون صغير مع جو سميك من الهيدروجين والهيليوم',
    details: {
      atmosphere: 'H₂, He, H₂O',
      water: 'محتمل في الأعماق',
      gravity: '2.6g'
    }
  }
];

export const galaxies = [
  {
    name: 'أندروميدا',
    type: 'Spiral',
    distance: 2.54,
    diameter: 220000,
    stars: 1e12,
    discovered: 'قديم',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Ccircle cx="100" cy="100" r="70" fill="none" stroke="%2300ffdc" stroke-width="8"/%3E%3Cellipse cx="100" cy="100" rx="80" ry="40" fill="none" stroke="%2300d4ff" stroke-width="6"/%3E%3C/svg%3E',
    description: 'أقرب مجرة حلزونية كبيرة، ستصطدم بطريقنا اللبنية خلال مليارات السنين',
    facts: [
      'تحتوي على تريليون نجم تقريباً',
      'قطرها أكبر من درب التبانة',
      'تقترب بسرعة 110 كم/ث'
    ]
  },
  {
    name: 'درب التبانة',
    type: 'Spiral Barred',
    distance: 0,
    diameter: 100000,
    stars: 2e11,
    discovered: 'قديم',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Cpath d="M50 100 Q100 50 150 100 Q100 150 50 100" fill="none" stroke="%239678ff" stroke-width="8"/%3E%3C/svg%3E',
    description: 'مجرتنا، مجرة حلزونية تحتوي على الشمس والأرض',
    facts: [
      'قطرها حوالي 100,000 سنة ضوئية',
      'تحتوي على 200-400 مليار نجم',
      'شمسنا تدور حولها كل 225 مليون سنة'
    ]
  },
  {
    name: 'مجرة تريانجولم',
    type: 'Spiral',
    distance: 2.73,
    diameter: 50000,
    stars: 4e10,
    discovered: 'قديم',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Cpolygon points="100,30 170,170 30,170" fill="none" stroke="%2351cf66" stroke-width="6"/%3E%3C/svg%3E',
    description: 'ثالث أكبر مجرة في المجموعة المحلية، مجرة حلزونية',
    facts: [
      'تقع بين أندروميدا ودرب التبانة',
      'تحتوي على 40 مليار نجم',
      'يمكن رؤيتها بالعين المجردة'
    ]
  },
  {
    name: 'M87',
    type: 'Elliptical',
    distance: 16.4,
    diameter: 240000,
    stars: 1e13,
    discovered: 1781,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Cellipse cx="100" cy="100" rx="70" ry="50" fill="%23ffd93d" opacity="0.7"/%3E%3Ccircle cx="100" cy="100" r="15" fill="%23ff6b6b"/%3E%3C/svg%3E',
    description: 'مجرة إهليلجية عملاقة تحتوي على ثقب أسود فائق الضخامة',
    facts: [
      'تحتوي على أضعف ثقب أسود معروف',
      'توجد نفاثات نسبية قوية',
      'صورة الثقب الأسود الأولى من هنا'
    ]
  }
];

export const stars = [
  {
    name: 'Sirius',
    type: 'Main Sequence',
    magnitude: -1.46,
    distance: 8.6,
    luminosity: 26,
    temp: 9940,
    color: '#FFFFFF',
    description: 'ألمع نجم في السماء الليلية'
  },
  {
    name: 'Betelgeuse',
    type: 'Red Supergiant',
    magnitude: 0.42,
    distance: 640,
    luminosity: 140000,
    temp: 3500,
    color: '#FF4500',
    description: 'نجم عملاق أحمر قريب من نهاية حياته'
  },
  {
    name: 'Rigel',
    type: 'Blue Supergiant',
    magnitude: 0.18,
    distance: 860,
    luminosity: 120000,
    temp: 11000,
    color: '#0099FF',
    description: 'نجم أزرق فائق البريق في كتفي الجبار'
  },
  {
    name: 'The Sun',
    type: 'G-type Main Sequence',
    magnitude: 4.83,
    distance: 0.0000158,
    luminosity: 1,
    temp: 5778,
    color: '#FFFF99',
    description: 'شمسنا، نجم متوسط الحجم'
  }
];

export const nebulae = [
  {
    name: 'سديم الحلقة',
    type: 'Planetary Nebula',
    distance: 650,
    diameter: 1.3,
    temp: 8000,
    brightness: 8.8
  },
  {
    name: 'سديم الجبار',
    type: 'Emission Nebula',
    distance: 1344,
    diameter: 24,
    temp: 9000,
    brightness: 4.0
  },
  {
    name: 'سديم السرطان',
    type: 'Supernova Remnant',
    distance: 6500,
    diameter: 11,
    temp: 15000,
    brightness: 8.4
  }
];

export const timeline = [
  { year: 1610, event: 'Galileo - اكتشف أقمار المشتري' },
  { year: 1687, event: 'Newton - قوانين الحركة والجاذبية' },
  { year: 1929, event: 'Hubble - تمدد الكون' },
  { year: 1967, event: 'اكتشاف أول pulsar' },
  { year: 1987, event: 'SN 1987A - مستعر أعظم مرئي' },
  { year: 2012, event: 'Higgs Boson اكتشف' },
  { year: 2019, event: 'صورة Sagittarius A*' },
  { year: 2022, event: 'James Webb - بداية ثورة الفضاء' }
];
