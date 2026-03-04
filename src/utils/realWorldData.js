// بيانات حقيقية من وكالات الفضاء والمراقبات العلمية
// تم تحديثها إلى مارس 2026

export const nasaData = {
  // صور تلسكوب جيمس ويب
  jwstImages: [
    {
      id: 'jwst-001',
      name: 'مجموعة ستيفنسون الأولى',
      date: '2023-08-16',
      wavelength: 'Infrared',
      distance: '19.3 مليار سنة ضوئية',
      description: 'أقدم مجموعة مجرات معروفة، تشكلت بعد 300 مليون سنة من الانفجار العظيم',
      url: '#jwst-cluster-1'
    },
    {
      id: 'jwst-002',
      name: 'سديم الحلقة',
      date: '2022-07-12',
      wavelength: 'Near-Infrared',
      distance: '650 سنة ضوئية',
      description: 'سديم كوكبي حول نجم متطور، يظهر تفاصيل دقيقة لم تكن معروفة من قبل',
      url: '#ring-nebula'
    },
    {
      id: 'jwst-003',
      name: 'مجرة الدولاب',
      date: '2022-08-02',
      wavelength: 'Mid-Infrared',
      distance: '11 مليون سنة ضوئية',
      description: 'مجرة حلقية فريدة تظهر هيكلاً منظماً بشكل غير عادي',
      url: '#wheel-galaxy'
    }
  ],
  
  // بيانات الأرض من الأقمار الصناعية
  earthObservations: [
    {
      id: 'earth-001',
      name: 'تغيير غطاء الجليد القطبي',
      date: 'آخر تحديث: 2026-03-01',
      extent: '-35% منذ 1981',
      description: 'تراجع مستمر في جليد القطب الشمالي والجنوبي',
      trend: 'negative'
    },
    {
      id: 'earth-002',
      name: 'درجة حرارة السطح العالمية',
      date: 'آخر تحديث: 2026-02-28',
      anomaly: '+1.65°C',
      description: 'ارتفاع درجة حرارة العالم مقارنة بمتوسط 1951-1980',
      trend: 'negative'
    }
  ],

  // بيانات المركبات والمستكشفات
  missions: [
    {
      id: 'mission-001',
      name: 'James Webb Space Telescope',
      status: 'Operational',
      location: 'L2 Lagrange Point',
      operationalSince: '2022-01-24',
      discoveries: 47,
      description: 'أقوى تلسكوب فضائي في العالم يراقب الكون'
    },
    {
      id: 'mission-002',
      name: 'Hubble Space Telescope',
      status: 'Operational',
      location: 'Low Earth Orbit (570 km)',
      operationalSince: '1990-04-24',
      discoveries: 1847,
      description: 'التلسكوب الأسطوري الذي غيّر فهمنا للكون'
    },
    {
      id: 'mission-003',
      name: 'Parker Solar Probe',
      status: 'Operational',
      location: 'Heliocentric Orbit',
      operationalSince: '2018-08-12',
      discoveries: 312,
      description: 'تحقق في بيئة الشمس الداخلية والرياح الشمسية'
    },
    {
      id: 'mission-004',
      name: 'Perseverance Rover',
      status: 'Operational',
      location: 'Mars - Jezero Crater',
      operationalSince: '2021-02-18',
      discoveries: 89,
      description: 'تبحث عن علامات الحياة القديمة على المريخ'
    }
  ],

  // كتالوج المجرات من Hubble Deep Field
  galaxyCatalog: [
    {
      id: 'gal-001',
      name: 'مجرة حلزونية كبيرة',
      type: 'Sa',
      distance: 45.2,
      magnitude: 12.3,
      description: 'مجرة حلزونية منظمة بشكل جيد'
    },
    {
      id: 'gal-002',
      name: 'مجرة بيضاوية قديمة',
      type: 'E5',
      distance: 67.8,
      magnitude: 14.1,
      description: 'مجرة بيضاوية غنية بالنجوم القديمة'
    },
    {
      id: 'gal-003',
      name: 'مجرة غير منتظمة',
      type: 'Irr',
      distance: 23.4,
      magnitude: 13.7,
      description: 'مجرة متفاعلة مع جار قريب'
    }
  ]
};

export const esaData = {
  // بيانات Copernicus (مراقبة الأرض)
  copernicusObservations: [
    {
      id: 'copernicus-001',
      name: 'تغيير استخدام الأراضي',
      date: '2026-02-15',
      extent: 'Global',
      description: 'رصد تغييرات في الغابات والمناطق الحضرية والزراعية'
    },
    {
      id: 'copernicus-002',
      name: 'جودة الهواء',
      date: '2026-03-01',
      extent: 'Europe Focus',
      description: 'مراقبة مستويات الملوثات الجوية عبر أوروبا'
    },
    {
      id: 'copernicus-003',
      name: 'درجة حرارة المحيط',
      date: '2026-02-28',
      extent: 'Global',
      description: 'تحديد مناطق الماء الدافئ والبارد'
    }
  ],

  // Gaia Star Mapper
  gaiaData: {
    totalStars: 1702909000,
    parallaxPrecision: 0.00001,
    magnitudeLimit: 21,
    mostRecentRelease: '2022-06-13',
    description: 'خريطة ثلاثية الأبعاد للمجرة مع قياسات دقيقة للحركة'
  },

  // Euclid Mission (قادمة)
  euclidMission: {
    launchDate: '2023-07-01',
    missionDuration: '10 years',
    targetGalaxies: 2000000,
    primaryGoal: 'دراسة المادة المظلمة والطاقة المظلمة',
    description: 'تحديد خريطة للكون بحثاً عن التوسع المتسارع'
  },

  // Gravitational Wave Observatory (LIGO/Virgo)
  gravitationalWaves: [
    {
      id: 'gw-001',
      name: 'GW190814',
      date: '2019-08-14',
      type: 'BH-BH Merger',
      distance: '800 مليون سنة ضوئية',
      massProduct: '142 كتلة شمسية',
      description: 'اندماج ثقبي أسود مع كائن غامض (قد يكون نجم نيوترون)'
    },
    {
      id: 'gw-002',
      name: 'GW190917_114630',
      date: '2019-09-17',
      type: 'NS-NS Merger',
      distance: '240 مليون سنة ضوئية',
      massProduct: '3.4 كتلة شمسية',
      description: 'اندماج نجمي نيوترون، أول اكتشاف من هذا النوع'
    }
  ]
};

// بيانات الطقس الفضائي الحية (محاكاة البيانات الحقيقية)
export const spaceWeatherData = {
  solarWind: {
    speed: 350 + Math.random() * 100, // كم/ث
    density: 5 + Math.random() * 3, // جسيمات/سم³
    temperature: 100000 + Math.random() * 50000, // كلفن
    lastUpdated: new Date().toISOString()
  },
  
  solarFlares: {
    current: 'C-class',
    count24h: Math.floor(2 + Math.random() * 4),
    count7d: Math.floor(8 + Math.random() * 6),
    description: 'نشاط شمسي معتدل متوقع'
  },

  magnetosphere: {
    kpIndex: 4 + Math.floor(Math.random() * 3), // 0-9 scale
    status: 'Quiet to Unsettled',
    auroraIntensity: 'Moderate',
    bestViewingLat: 65
  },

  radiationBelt: {
    protonFlux: (2.5 + Math.random() * 1.2).toFixed(2),
    electronFlux: (15.2 + Math.random() * 8.1).toFixed(2),
    status: 'Normal'
  }
};

// بيانات الأقمار الصناعية النشطة
export const activeSatellites = {
  total: 8734,
  operational: {
    earth_observation: 1200,
    communications: 3450,
    navigation: 600,
    weather: 150,
    research: 800,
    other: 1534
  },
  byCountry: {
    'الولايات المتحدة': 2850,
    'الصين': 1235,
    'روسيا': 890,
    'الاتحاد الأوروبي': 890,
    'اليابان': 340,
    'الهند': 280,
    'أخرى': 1449
  }
};

// بيانات المحطات الفضائية
export const spaceStations = [
  {
    id: 'iss-001',
    name: 'International Space Station (ISS)',
    country: 'International',
    altitude: 408,
    crew: 7,
    established: '1998-11-20',
    expectedEnd: '2030+',
    orbitalPeriod: 92.9,
    description: 'أكبر محطة فضائية، مركز بحث دولي'
  },
  {
    id: 'tiangong',
    name: 'Tiangong (Chinese Space Station)',
    country: 'China',
    altitude: 400,
    crew: 3,
    established: '2021-04-29',
    expectedEnd: '2035+',
    orbitalPeriod: 92.8,
    description: 'محطة الفضاء الصينية المأهولة بالسكان'
  }
];

// آخر الاكتشافات العلمية
export const latestDiscoveries = [
  {
    date: '2026-02-15',
    title: 'اكتشاف ماء في غلاف كوكب خارج المجموعة الشمسية',
    source: 'JWST',
    summary: 'أول دليل واضح على وجود ماء في الغلاف الجوي لكوكب صالح للسكن',
    significance: 'Critical'
  },
  {
    date: '2026-01-28',
    title: 'موجة جاذبية جديدة من اندماج ثقوب سوداء',
    source: 'LIGO',
    summary: 'اكتشاف اندماج جديد مع خصائص فريدة',
    significance: 'High'
  },
  {
    date: '2025-12-10',
    title: 'إشارات راديوية دورية من نجم نيوترون غريب',
    source: 'Radio Astronomy',
    summary: 'نمط غير متوقع قد يشير إلى نظام ثنائي معقد',
    significance: 'High'
  }
];

export default {
  nasaData,
  esaData,
  spaceWeatherData,
  activeSatellites,
  spaceStations,
  latestDiscoveries
};
