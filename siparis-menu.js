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
  "id": "fit",
  "ad": "Protein Waffle",
  "urunler": [
   {
    "ad": "Protein Waffle",
    "fiyat": 200,
    "aciklama": "Yulaf-protein hamuru, fıstık ezmesi, muz, süzme yoğurt",
    "etiket": "Fit"
   },
   {
    "ad": "Kakaolu Protein",
    "fiyat": 200,
    "aciklama": "Kakaolu protein hamuru, orman meyveleri, şekersiz çikolata sos",
    "etiket": "Fit"
   }
  ],
  "ikon": "💪",
  "kisa": "Protein"
 },
 {
  "id": "sicak",
  "ad": "Sıcak Kahveler",
  "urunler": [
   {
    "ad": "Espresso",
    "fiyat": 85,
    "aciklama": "Tek ya da duble shot",
    "etiket": ""
   },
   {
    "ad": "Americano",
    "fiyat": 105,
    "aciklama": "Espresso ve sıcak su",
    "etiket": ""
   },
   {
    "ad": "Filtre Kahve",
    "fiyat": 95,
    "aciklama": "Günün çekirdeğinden",
    "etiket": ""
   },
   {
    "ad": "Caffè Latte",
    "fiyat": 125,
    "aciklama": "Espresso, buharla ısıtılmış süt, ince köpük",
    "etiket": ""
   },
   {
    "ad": "Cappuccino",
    "fiyat": 125,
    "aciklama": "Espresso, süt, bol süt köpüğü",
    "etiket": ""
   },
   {
    "ad": "Flat White",
    "fiyat": 135,
    "aciklama": "Duble ristretto, kadifemsi süt",
    "etiket": ""
   },
   {
    "ad": "Caffè Mocha",
    "fiyat": 145,
    "aciklama": "Espresso, çikolata sos, süt, krema",
    "etiket": ""
   },
   {
    "ad": "White Chocolate Mocha",
    "fiyat": 150,
    "aciklama": "Espresso, beyaz çikolata sos, süt, krema",
    "etiket": ""
   },
   {
    "ad": "Caramel Macchiato",
    "fiyat": 150,
    "aciklama": "Vanilya şurubu, süt, espresso, karamel sos",
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
    "ad": "Iced Americano",
    "fiyat": 115,
    "aciklama": "Espresso, soğuk su, buz",
    "etiket": ""
   },
   {
    "ad": "Iced Latte",
    "fiyat": 135,
    "aciklama": "Espresso, soğuk süt, buz",
    "etiket": ""
   },
   {
    "ad": "Iced Caramel Macchiato",
    "fiyat": 160,
    "aciklama": "Vanilya, soğuk süt, espresso, karamel sos",
    "etiket": ""
   },
   {
    "ad": "Iced White Mocha",
    "fiyat": 160,
    "aciklama": "Beyaz çikolata sos, espresso, soğuk süt",
    "etiket": ""
   },
   {
    "ad": "Cold Brew",
    "fiyat": 130,
    "aciklama": "20 saat soğuk demlenmiş kahve",
    "etiket": ""
   },
   {
    "ad": "Vanilla Sweet Cream Cold Brew",
    "fiyat": 150,
    "aciklama": "Cold brew, vanilyalı tatlı krema",
    "etiket": ""
   }
  ],
  "ikon": "🧊",
  "kisa": "Soğuk Kahve"
 },
 {
  "id": "frappe",
  "ad": "Frappe",
  "urunler": [
   {
    "ad": "Caramel Frappe",
    "fiyat": 165,
    "aciklama": "Kahve, süt, karamel, krema",
    "etiket": ""
   },
   {
    "ad": "Mocha Frappe",
    "fiyat": 165,
    "aciklama": "Kahve, çikolata sos, süt, krema",
    "etiket": ""
   },
   {
    "ad": "Java Chip Frappe",
    "fiyat": 175,
    "aciklama": "Kahve, çikolata parçacıkları, mocha sos, krema",
    "etiket": ""
   },
   {
    "ad": "Çilekli Kremalı Frappe",
    "fiyat": 165,
    "aciklama": "Kahvesiz, çilek püresi, süt, krema",
    "etiket": ""
   }
  ],
  "ikon": "🥤",
  "kisa": "Frappe"
 },
 {
  "id": "kokteyl",
  "ad": "Kokteyller",
  "urunler": [
   {
    "ad": "Cool Lime",
    "fiyat": 140,
    "aciklama": "Lime, nane, salatalık dilimleri, buz",
    "etiket": ""
   },
   {
    "ad": "Hibiscus",
    "fiyat": 140,
    "aciklama": "Hibiskus, frambuaz ve böğürtlen aroması, buz",
    "etiket": ""
   },
   {
    "ad": "Mango Dragonfruit",
    "fiyat": 145,
    "aciklama": "Mango, ejder meyvesi parçaları, buz",
    "etiket": ""
   },
   {
    "ad": "Pink Drink",
    "fiyat": 155,
    "aciklama": "Çilek ve açaí, hindistan cevizi sütü, çilek dilimleri",
    "etiket": "Yeni"
   },
   {
    "ad": "Çilekli Limonata",
    "fiyat": 120,
    "aciklama": "Taze limon, çilek püresi, nane",
    "etiket": ""
   },
   {
    "ad": "Naneli Limonata",
    "fiyat": 110,
    "aciklama": "Ev yapımı, taze nane",
    "etiket": ""
   }
  ],
  "ikon": "🍹",
  "kisa": "Kokteyl"
 },
 {
  "id": "diger",
  "ad": "Diğer İçecekler",
  "urunler": [
   {
    "ad": "Sıcak Çikolata",
    "fiyat": 125,
    "aciklama": "Bol köpüklü, üstü kremalı",
    "etiket": ""
   },
   {
    "ad": "Chai Tea Latte",
    "fiyat": 140,
    "aciklama": "Baharatlı siyah çay, süt",
    "etiket": ""
   },
   {
    "ad": "Matcha Latte",
    "fiyat": 150,
    "aciklama": "Sıcak ya da buzlu",
    "etiket": ""
   },
   {
    "ad": "Çay",
    "fiyat": 35,
    "aciklama": "İnce belli bardakta",
    "etiket": ""
   },
   {
    "ad": "Su / Soda",
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
const KATEGORI_SECENEK = { waffle: ['ekstra'], fit: ['ekstra'], sicak: ['boy', 'sut'], soguk: ['boy', 'sut'], frappe: ['sut'] };
const SUTSUZ = ['Espresso', 'Americano', 'Filtre Kahve', 'Türk Kahvesi', 'Iced Americano', 'Cold Brew'];
const SECENEKSIZ = ['Türk Kahvesi'];
