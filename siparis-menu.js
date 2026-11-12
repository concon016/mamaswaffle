// Mama's Waffle QR sipariş menüsü verisi. Fiyatlar menu.html ile aynı tutulmalı.
const MENU = [
 {
  "id": "waffle",
  "ad": "Waffle'lar",
  "urunler": [
   {
    "ad": "Klasik Waffle",
    "fiyat": 160,
    "aciklama": "Sütlü çikolata sos, muz, çilek",
    "etiket": ""
   },
   {
    "ad": "Mama's Waffle",
    "fiyat": 180,
    "aciklama": "Ev yapımı karamel, fındık kreması, muz, çilek, fındık kırığı",
    "etiket": "İmza"
   },
   {
    "ad": "Dubai Waffle",
    "fiyat": 230,
    "aciklama": "Antep fıstığı kreması, çıtır kadayıf, bitter çikolata",
    "etiket": "İmza"
   },
   {
    "ad": "Oreo Waffle",
    "fiyat": 185,
    "aciklama": "Beyaz çikolata sos, Oreo kreması, Oreo kırığı",
    "etiket": ""
   },
   {
    "ad": "Lotus Waffle",
    "fiyat": 190,
    "aciklama": "Lotus kreması, Lotus bisküvi kırığı, muz",
    "etiket": ""
   },
   {
    "ad": "Bueno Waffle",
    "fiyat": 195,
    "aciklama": "Fındık kreması, beyaz çikolata, Kinder Bueno parçaları",
    "etiket": ""
   },
   {
    "ad": "Çikolata Şelalesi",
    "fiyat": 175,
    "aciklama": "Bitter, sütlü ve beyaz çikolata sos, fındık kırığı",
    "etiket": ""
   },
   {
    "ad": "Beyaz Rüya",
    "fiyat": 180,
    "aciklama": "Beyaz çikolata, çilek, frambuaz",
    "etiket": ""
   },
   {
    "ad": "Cheesecake Waffle",
    "fiyat": 195,
    "aciklama": "Cheesecake kreması, frambuaz sos, bisküvi kırığı",
    "etiket": "Yeni"
   },
   {
    "ad": "Tiramisu Waffle",
    "fiyat": 195,
    "aciklama": "Mascarpone krema, espresso sos, kakao",
    "etiket": "Yeni"
   },
   {
    "ad": "Meyve Bahçesi",
    "fiyat": 185,
    "aciklama": "Mevsim meyveleri, krema, bal",
    "etiket": ""
   },
   {
    "ad": "Affogato Waffle",
    "fiyat": 195,
    "aciklama": "Vanilyalı dondurma, üstüne masada dökülen sıcak espresso",
    "etiket": ""
   }
  ],
  "ikon": "🧇",
  "kisa": "Waffle"
 },
 {
  "id": "sicak",
  "ad": "Sıcak Kahveler",
  "urunler": [
   {
    "ad": "Espresso",
    "fiyat": 85,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Americano",
    "fiyat": 105,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Latte",
    "fiyat": 125,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Cappuccino",
    "fiyat": 125,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Mocha",
    "fiyat": 145,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "White Chocolate Mocha",
    "fiyat": 150,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Karamel Latte",
    "fiyat": 150,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Filtre Kahve",
    "fiyat": 95,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Türk Kahvesi",
    "fiyat": 85,
    "aciklama": "Lokumuyla",
    "etiket": ""
   }
  ],
  "ikon": "☕",
  "kisa": "Sıcak Kahve"
 },
 {
  "id": "soguk",
  "ad": "Soğuk Kahveler",
  "urunler": [
   {
    "ad": "Ice Americano",
    "fiyat": 115,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Ice Latte",
    "fiyat": 135,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Ice White Chocolate Mocha",
    "fiyat": 160,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Ice Karamel Latte",
    "fiyat": 160,
    "aciklama": "",
    "etiket": ""
   }
  ],
  "ikon": "🧊",
  "kisa": "Soğuk Kahve"
 },
 {
  "id": "diger",
  "ad": "Diğer İçecekler",
  "urunler": [
   {
    "ad": "Çay",
    "fiyat": 35,
    "aciklama": "İnce belli bardakta",
    "etiket": ""
   },
   {
    "ad": "Soda",
    "fiyat": 30,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Su",
    "fiyat": 30,
    "aciklama": "",
    "etiket": ""
   }
  ],
  "ikon": "🫖",
  "kisa": "Diğer"
 }
];

// Ürün seçenekleri: kategoriye göre, "secenekYok" listesindekiler hariç
const SECENEKLER = {
  ekstra: { baslik: 'Ekstralar', tip: 'coklu', liste: [{ ad: 'Bir top dondurma', fiyat: 45 }, { ad: 'Ekstra sos', fiyat: 35 }] },
  boy: { baslik: 'Boy', tip: 'tek', liste: [{ ad: 'Tall', fiyat: 0 }, { ad: 'Grande', fiyat: 20 }] },
  sut: { baslik: 'Süt', tip: 'tek', liste: [{ ad: 'Normal süt', fiyat: 0 }, { ad: 'Laktozsuz', fiyat: 20 }, { ad: 'Badem sütü', fiyat: 20 }, { ad: 'Yulaf sütü', fiyat: 20 }] }
};
const KATEGORI_SECENEK = { waffle: ['ekstra'], sicak: ['boy', 'sut'], soguk: ['boy', 'sut'] };
const SUTSUZ = ['Espresso', 'Americano', 'Filtre Kahve', 'Türk Kahvesi', 'Ice Americano', 'Ice Filtre Kahve', 'Double Espresso', 'Double Türk Kahvesi'];
const SECENEKSIZ = ['Türk Kahvesi', 'Double Türk Kahvesi'];
