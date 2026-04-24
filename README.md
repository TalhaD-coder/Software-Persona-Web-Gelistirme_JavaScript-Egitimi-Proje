# Gorev Asistani - Todo Uygulamasi

Modern frontend gelistirme surecini gostermek icin React ile hazirlanmis, temiz mimariye sahip bir gorev yonetim uygulamasi.

## Icerik

- [Proje Ozeti](#proje-ozeti)
- [Ozellikler](#ozellikler)
- [Kullanilan Teknolojiler](#kullanilan-teknolojiler)
- [Klasor Yapisi](#klasor-yapisi)
- [Kurulum](#kurulum)
- [Kullanim](#kullanim)
- [Scripts](#scripts)
- [Ekran Goruntuleri](#ekran-goruntuleri)
- [Yayinlama](#yayinlama)

## Proje Ozeti

Bu proje, staj teslimi kapsaminda istenen gereksinimleri karsilamak uzere gelistirilmistir:

- Modern JavaScript kutuphanesi kullanimi (`React`)
- CSS framework kullanimi (`Tailwind CSS`)
- Duzenli klasor mimarisi (`Components`, `Pages`, `Interfaces`)
- Tam CRUD akisinin uygulanmasi

## Ozellikler

- Gorev ekleme (baslik + tarih)
- Gorev listeleme
- Gorev guncelleme
- Gorev silme
- Tamamlandi / devam ediyor durumu degistirme
- Arama ve durum filtreleme
- Tarihe gore filtreleme
- Ayni gorevi tekrar eklemeyi engelleme
- Bos durum ekrani
- Basari/hata toast bildirimleri

## Kullanilan Teknolojiler

- `React`
- `Vite`
- `Tailwind CSS`
- `Framer Motion`
- `Lucide React`
- `ESLint`

## Klasor Yapisi

```text
.
├─ images/
│  └─ .gitkeep
├─ public/
├─ src/
│  ├─ Components/
│  │  ├─ EmptyState.jsx
│  │  ├─ Toast.jsx
│  │  ├─ TodoForm.jsx
│  │  └─ TodoItem.jsx
│  ├─ Interfaces/
│  │  └─ Todo.js
│  ├─ Pages/
│  │  └─ Home.jsx
│  ├─ constants/
│  │  └─ uiText.js
│  ├─ App.jsx
│  └─ main.jsx
├─ package.json
└─ README.md
```

## Kurulum

```bash
npm install
```

## Kullanim

```bash
npm run dev
```

Ardindan tarayicida Vite'in verdigi adresi acin (genelde `http://localhost:5173`).

## Scripts

- `npm run dev` -> gelistirme ortami
- `npm run build` -> production build
- `npm run preview` -> build onizleme
- `npm run lint` -> kod kalite kontrolu

## Ekran Goruntuleri

Ekran goruntuleri `images/` klasorunde tutulur.

Ornek kullanim:

```md
![Ana Ekran](./images/ana-ekran.png)
```

> Ekran goruntulerini gonderdigin anda bu bolumu gercek dosya adlariyla dolduracagim.

## Yayinlama

### GitHub

Repo: [Software-Persona-Web-Gelistirme_JavaScript-Egitimi-Proje](https://github.com/TalhaD-coder/Software-Persona-Web-Gelistirme_JavaScript-Egitimi-Proje)

### Netlify

1. `npm run build` calistir
2. `dist/` klasorunu [Netlify Drop](https://app.netlify.com/drop) alanina birak
3. Olusan canli linki README'ye ekle
