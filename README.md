# Görev Asistanı

Modern frontend geliştirme sürecini göstermek için React ile hazırlanmış, temiz mimariye sahip bir görev yönetim uygulaması.

## İçerik

- [Proje Özeti](#proje-özeti)
- [Özellikler](#özellikler)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Klasör Yapısı](#klasör-yapısı)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Scripts](#scripts)
- [Ekran Görüntüleri](#ekran-görüntüleri)
- [Yayınlama](#yayınlama)

---

## Proje Özeti

Bu proje, staj teslimi kapsamında istenen gereksinimleri karşılamak üzere geliştirilmiştir:

- Modern JavaScript kütüphanesi kullanımı (`React`)
- CSS framework kullanımı (`Tailwind CSS`)
- Düzenli klasör mimarisi (`Components`, `Pages`, `Interfaces`)
- Tam CRUD akışının uygulanması

---

## Özellikler

- ✅ Görev ekleme (başlık + hedef tarih)
- ✅ Görev listeleme
- ✅ Görev güncelleme
- ✅ Görev silme
- ✅ Tamamlandı / devam ediyor durumu değiştirme
- ✅ Arama ve durum filtreleme (Hepsi / Yap / Bitti)
- ✅ Tarihe göre filtreleme
- ✅ Aynı görevi tekrar eklemeyi engelleme
- ✅ İlerleme yüzdesi göstergesi
- ✅ Ses efektleri (açılıp kapatılabilir)
- ✅ Başarı / hata toast bildirimleri
- ✅ Boş durum ekranı

---

## Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|-----------|----------|
| [React 19](https://react.dev/) | UI kütüphanesi |
| [Vite](https://vite.dev/) | Geliştirme ve build aracı |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS framework |
| [Framer Motion](https://www.framer.com/motion/) | Animasyon kütüphanesi |
| [Lucide React](https://lucide.dev/) | İkon kütüphanesi |
| [ESLint](https://eslint.org/) | Kod kalite kontrolü |

---

## Klasör Yapısı

```text
staj-projem/
├─ images/                        # Ekran görüntüleri
├─ public/                        # Statik dosyalar (ses, favicon)
└─ src/
   ├─ Components/
   │  ├─ EmptyState.jsx            # Boş liste ekranı
   │  ├─ Toast.jsx                 # Bildirim bileşeni
   │  ├─ TodoForm.jsx              # Ekle / Güncelle formu
   │  └─ TodoItem.jsx              # Tek görev satırı
   ├─ Interfaces/
   │  └─ Todo.js                   # createTodo fabrika fonksiyonu
   ├─ Pages/
   │  └─ Home.jsx                  # Ana sayfa, tüm state burada
   ├─ constants/
   │  └─ uiText.js                 # UI metinleri sabit dosyası
   ├─ App.jsx
   └─ main.jsx
```

---

## Kurulum

```bash
npm install
```

## Kullanım

```bash
npm run dev
```

Ardından tarayıcıda `http://localhost:5173` adresini açın.

## Scripts

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme ortamını başlatır |
| `npm run build` | Production build alır |
| `npm run preview` | Build önizlemesi yapar |
| `npm run lint` | Kod kalite kontrolü çalıştırır |

---

## Ekran Görüntüleri

### Ana Ekran
![Ana Ekran](./images/ana%20ekran.png)

### Yap Filtresi
![Yap Filtresi](./images/yap%20filtresi.png)

### Bitti Filtresi
![Bitti Filtresi](./images/bitti%20filtresi.png)

### Tarih Filtresi ve Güncelleme
![Tarih Filtresi ve Güncelleme](./images/tarih%20filtresi%20ve%20g%C3%BCncelleme.png)

---

## Yayınlama

### GitHub

Repo: [Software-Persona-Web-Gelistirme_JavaScript-Egitimi-Proje](https://github.com/TalhaD-coder/Software-Persona-Web-Gelistirme_JavaScript-Egitimi-Proje)

### Netlify

Canlı Link: [https://candid-pavlova-fba2ac.netlify.app](https://candid-pavlova-fba2ac.netlify.app)

Deploy adımları:
1. `npm run build` çalıştır
2. Oluşan `dist/` klasörünü [Netlify Drop](https://app.netlify.com/drop) alanına sürükle
3. Oluşan canlı linki buraya ekle
