# Staj Todo Projesi

Modern web gelistirme sureclerini pekistirmek icin React + Tailwind ile gelistirilmis bir Todo uygulamasidir.  
Projede temiz klasor mimarisi, temel CRUD operasyonlari ve teslime uygun dokumantasyon hedeflenmistir.

## Proje Amaci

- Modern JavaScript kutuphanesi ile uygulama gelistirme deneyimi kazanmak
- Component tabanli mimariyi dogru klasor yapisiyla uygulamak
- CRUD (Ekle, Listele, Guncelle, Sil) operasyonlarini tek projede tamamlamak
- Projeyi GitHub ve Netlify benzeri platformlara yayinlamaya hazir hale getirmek

## Kullanilan Teknolojiler

- `React` (arayuz ve component mimarisi)
- `Vite` (hizli gelistirme ortami ve build)
- `Tailwind CSS` (utility-first stil yapisi)
- `Framer Motion` (mikro animasyonlar)
- `Lucide React` (ikon seti)
- `ESLint` (kod kalitesi ve hata yakalama)

## Ozellikler (CRUD)

- **Ekle:** Yeni gorev olusturma (baslik + tarih)
- **Listele:** Tum gorevleri listeleme ve filtreleme
- **Guncelle:** Mevcut gorevi duzenleme (baslik ve tarih)
- **Sil:** Gorevi listeden kaldirma
- **Durum Degistirme:** Tamamlandi / devam ediyor isaretleme
- **Arama + Filtre:** Metin bazli arama ve durum filtreleri
- **Bos Durum Ekrani:** Sonuc olmadiginda anlamli geri bildirim

## Klasor Yapisi

```text
src/
  Components/
    EmptyState.jsx
    TodoForm.jsx
    TodoItem.jsx
  Interfaces/
    Todo.js
  Pages/
    Home.jsx
  App.jsx
  main.jsx
```

## Kurulum ve Calistirma

1. Proje bagimliliklarini yukleyin:
   ```bash
   npm install
   ```
2. Gelistirme sunucusunu baslatin:
   ```bash
   npm run dev
   ```
3. Tarayicida acin:
   - Vite tarafindan verilen yerel adres (genelde `http://localhost:5173`)

## Kod Kalitesi Kontrolu

```bash
npm run lint
```

## Build ve Yayinlama

Uretim build'i almak icin:

```bash
npm run build
```

Onizleme:

```bash
npm run preview
```

Netlify benzeri platformlarda yayinlamak icin build cikti klasoru: `dist/`

## Teslim Kontrol Listesi

- [x] React tabanli proje
- [x] Tailwind CSS kullanimi
- [x] `Components`, `Pages`, `Interfaces` klasorleri
- [x] CRUD operasyonlari
- [x] Temiz kod ve lint kontrolu
- [ ] En az 1 adet ekran goruntusu ekleme
- [ ] GitHub public repo linki ekleme
- [ ] Netlify (veya muadili) yayin linki ekleme
