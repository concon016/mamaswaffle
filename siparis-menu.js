// Mama's Waffle QR sipariş menüsü verisi. Fiyatlar menu.html ile aynı tutulmalı.
const MENU = [
 {
  "id": "waffle",
  "ad": "Waffle'lar",
  "urunler": [
   {
    "ad": "Dubai Night",
    "fiyat": 0,
    "aciklama": "",
    "etiket": ""
   },
   {
    "ad": "Crispy Dream",
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
    "ad": "White Velvet",
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
    "ad": "Kendin Tasarla",
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
  "ad": "Sıcak Kahveler",
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
    "aciklama": "Lokumuyla",
    "etiket": ""
   },
   {
    "ad": "Double Türk Kahvesi",
    "fiyat": 120,
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
    "fiyat": 50,
    "aciklama": "İnce belli bardakta",
    "etiket": ""
   },
   {
    "ad": "Cool Lime",
    "fiyat": 180,
    "aciklama": "Buzlu, soğuk",
    "etiket": ""
   },
   {
    "ad": "Berry Hibiscus",
    "fiyat": 180,
    "aciklama": "Buzlu, soğuk",
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
const KATEGORI_SECENEK = { waffle: ['ekstra'], sicak: ['sut'], soguk: ['sut'] };
const SUTSUZ = ['Espresso', 'Americano', 'Filtre Kahve', 'Türk Kahvesi', 'Ice Americano', 'Ice Filtre Kahve', 'Double Espresso', 'Double Türk Kahvesi'];
const SECENEKSIZ = ['Türk Kahvesi', 'Double Türk Kahvesi'];
