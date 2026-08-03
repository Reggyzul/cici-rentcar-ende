import { Car, Testimonial } from '../types';

export const CARS: Car[] = [
  {
    id: 'toyota-avanza-veloz',
    name: 'Toyota Avanza / Veloz',
    nameAr: 'تويوتا أفانزا / فيلوز',
    category: 'Family MPV',
    pricePerDay: 800000,
    priceDisplay: 'Rp 800.000 / Hari',
    image: '/avanza.avif',
    seats: 6,
    transmission: 'Manual/Matic',
    fuel: 'Gasoline',
    fuelAr: 'بنزين',
    includeList: ['Mobil', 'Driver', 'AC Dingin', 'Audio/USB'],
    includeListAr: ['السيارة', 'السائق', 'مكيف الهواء', 'صوتيات'],
    description: 'Pilihan hemat & lincah untuk perjalanan keluarga menjelajahi Ende dan rute wisata di Pulau Flores.',
    descriptionAr: 'سيارة عائلية اقتصادية ورشيقة مجهزة بمكيف هواء وصوتيات للسفر في جزيرة فلوريس.',
    rating: 4.9,
    reviewsCount: 118,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 6 Penumpang', labelAr: 'السعة', valueAr: '٦ ركاب' },
      { label: 'Fasilitas', value: 'AC dingin, kabin bersih, Audio/USB, Driver ramah & berpengalaman', labelAr: 'الميزات', valueAr: 'مكيف dingin، داخلي نظيف، Audio/USB، سائق ودود وخبير' }
    ]
  },
  {
    id: 'toyota-innova-grand',
    name: 'Toyota Innova Grand',
    nameAr: 'تويوتا إنوفا جراند',
    category: 'Comfort MPV',
    pricePerDay: 1000000,
    priceDisplay: 'Rp 1.000.000 / Hari',
    image: '/innova3.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Gasoline / Diesel',
    fuelAr: 'بنزين / ديزل',
    includeList: ['Mobil', 'Driver', 'AC Dingin', 'Audio/USB'],
    includeListAr: ['السيارة', 'السائق', 'مكيف الهواء', 'صوتيات'],
    description: 'Nyaman & luas dengan kabin ekstra lega, sangat ideal untuk perjalanan antarkota Ende, Bajawa, hingga Maumere.',
    descriptionAr: 'سيارة مريحة وواسعة للمسافات الطويلة بين مدن فلوريس.',
    rating: 4.9,
    reviewsCount: 134,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 7 Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas', value: 'AC dingin, kabin bersih, Audio/USB, Driver ramah & berpengalaman', labelAr: 'الميزات', valueAr: 'مكيف dingin، kabin lapang، Audio/USB، driver berpengalaman' }
    ]
  },
  {
    id: 'toyota-innova-reborn',
    name: 'Toyota Innova Reborn',
    nameAr: 'تويوتا إنوفا ريبورن',
    category: 'Luxury MPV',
    pricePerDay: 1300000,
    priceDisplay: 'Rp 1.300.000 / Hari',
    image: '/innova3.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Diesel / Gasoline',
    fuelAr: 'ديزل / بنزين',
    includeList: ['Mobil', 'Driver', 'AC Dingin', 'Audio/USB'],
    includeListAr: ['السيارة', 'السائق', 'مكيف الهواء', 'صوتيات'],
    description: 'Mewah & performa tangguh, sangat handal untuk menaklukkan medan Trip Lintas Flores (Ende - Labuan Bajo).',
    descriptionAr: 'سيارة فاخرة وذات أداء قوي وممتاز لطرقات فلوريس الجبلية.',
    rating: 5.0,
    reviewsCount: 162,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 7 Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas', value: 'AC dingin, kabin bersih, Audio/USB, Driver ramah & berpengalaman', labelAr: 'الميزات', valueAr: 'فاخرة جداً، تعليق مريح، سائق محترف' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Dimas Prasetyo',
    role: 'Wisatawan dari Jakarta',
    text: 'Sangat puas dengan pelayanan Cici Rentcar Ende! Sewa Innova Reborn untuk Trip Lintas Flores dari Ende ke Labuan Bajo. Mobil sangat bersih, AC dingin, dan drivernya ramah serta paham titik-titik foto terbaik.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    carModel: 'Toyota Innova Reborn',
    date: 'Juli 2026'
  },
  {
    id: 'testi-2',
    name: 'Maria Clarissa',
    role: 'Keluarga dari Surabaya',
    text: 'Sewa Avanza Veloz untuk keliling kota Ende dan Danau Kelimutu. Pelayanannya tepat waktu, harga transparan tanpa biaya tersembunyi. Sangat direkomendasikan jika ke Ende Flores!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    carModel: 'Toyota Avanza / Veloz',
    date: 'Juni 2026'
  },
  {
    id: 'testi-3',
    name: 'Budi Kurniawan',
    role: 'Rombongan Dinas dari Denpasar',
    text: 'Pakai Innova Grand dari Cici Rentcar Ende untuk perjalanan dinas Ende - Maumere - Bajawa. Perjalanan jauh terasa nyaman, kabin bersih, drivernya sopan & handal mengemudi di jalanan berliku.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    carModel: 'Toyota Innova Grand',
    date: 'Mei 2026'
  }
];
