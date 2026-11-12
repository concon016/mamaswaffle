// Mama's Waffle QR sipariş menüsü verisi. Fiyatlar menu.html ile aynı tutulmalı.
const MENU = [
 {
  "id": "waffle",
  "ad": "Waffle'lar",
  "urunler": [
   {
    "ad": "Kendin Tasarla",
    "fiyat": 0,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Classic",
    "fiyat": 0,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Dubai Night",
    "fiyat": 0,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Oreo Dream",
    "fiyat": 0,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Choco Caramel",
    "fiyat": 0,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Bonbonella",
    "fiyat": 0,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Dark Velvet",
    "fiyat": 0,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "White Milky",
    "fiyat": 0,
    "aciklama": "",
    "etiket": ""
   }
  ],
  "ikon": "🧇",
  "kisa": "Waffle"
 },
 {
  "id": "sicak",
  "ad": "Sıcak İçecekler",
  "urunler": [
   {
    "ad": "Espresso",
    "fiyat": 90,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Double Espresso",
    "fiyat": 150,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Americano",
    "fiyat": 160,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Latte",
    "fiyat": 180,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Cappuccino",
    "fiyat": 180,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Mocha",
    "fiyat": 190,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "White Chocolate Mocha",
    "fiyat": 190,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Karamel Latte",
    "fiyat": 190,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Filtre Kahve",
    "fiyat": 150,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Türk Kahvesi",
    "fiyat": 100,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Double Türk Kahvesi",
    "fiyat": 120,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Çay",
    "fiyat": 50,
    "aciklama": "",
    "etiket": ""
   }
  ],
  "ikon": "☕",
  "kisa": "Sıcak"
 },
 {
  "id": "soguk",
  "ad": "Soğuk İçecekler",
  "urunler": [
   {
    "ad": "Ice Americano",
    "fiyat": 160,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Ice Latte",
    "fiyat": 180,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Ice Mocha",
    "fiyat": 190,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Ice White Chocolate Mocha",
    "fiyat": 190,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Ice Karamel Latte",
    "fiyat": 190,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Ice Filtre Kahve",
    "fiyat": 150,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Cool Lime",
    "fiyat": 180,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Berry Hibiscus",
    "fiyat": 180,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Soda",
    "fiyat": 50,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Su",
    "fiyat": 40,
    "aciklama": "",
    "etiket": ""
   }
  ],
  "ikon": "🧊",
  "kisa": "Soğuk"
 }
];

// Ürün seçenekleri: kategoriye göre, "secenekYok" listesindekiler hariç
const SECENEKLER = {
  ekstra: { baslik: 'Ekstralar', tip: 'coklu', liste: [{ ad: 'Bir top dondurma', fiyat: 45 }, { ad: 'Ekstra sos', fiyat: 35 }] },
  boy: { baslik: 'Boy', tip: 'tek', liste: [{ ad: 'Tall', fiyat: 0 }, { ad: 'Grande', fiyat: 20 }] },
  sut: { baslik: 'Süt', tip: 'tek', liste: [{ ad: 'Normal süt', fiyat: 0 }, { ad: 'Laktozsuz', fiyat: 0 }] }
};
const KATEGORI_SECENEK = { sicak: ['sut'], soguk: ['sut'] };
const SUTSUZ = ['Espresso', 'Americano', 'Filtre Kahve', 'Türk Kahvesi', 'Ice Americano', 'Ice Filtre Kahve', 'Double Espresso', 'Double Türk Kahvesi', 'Çay', 'Cool Lime', 'Berry Hibiscus', 'Soda', 'Su'];
const SECENEKSIZ = ['Türk Kahvesi', 'Double Türk Kahvesi', 'Çay', 'Cool Lime', 'Berry Hibiscus', 'Soda', 'Su'];
