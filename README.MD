# Implementasi Sainte-Lague dalam pemrograman
Algoritma Sainte-Lague digunakan untuk menentukan jumlah kursi yang berhak didapatkan oleh partai politik di parlemen, sesuai dengan jumlah suara yang didapatkan di daerah pemilihan. Untuk detail algoritma silakan pelajari di artikel di bawah ini

[Mengenal Sainte Lague, Metode Penghitungan Kursi di Pileg 2019](https://news.detik.com/berita/d-4516891/mengenal-sainte-lague-metode-penghitungan-kursi-di-pileg-2019)

Repository ini adalah implementasi dari metode Sainte-Lague dalam beberapa bahasa pemrograman.

[Demo Aplikasi (Javascript)](https://edgarjeremy.github.io/sainte-lague-impement)

## Contoh Penggunaan
### Javascript
Signature
```javascript
saintLague(kursi: number, data: Array<{label: string, suara: number}>): Array<{label: string, kursi: number}>
```
Contoh
```javascript
const parlemen = saintLague(5, [
    { label: 'A', suara: 64000 },
    { label: 'B', suara: 18000 },
    { label: 'C', suara: 15000 },
    { label: 'D', suara: 8600 },
    { label: 'E', suara: 8000 },
    { label: 'F', suara: 7600 }
]);
```

Untuk bahasa pemrograman yang lain memiliki cara kerja, parameter input dan nilai kembalian yang strukturnya sama. Untuk syntax masing-masing silakan lihat di folder `./src/fn-{bahasa}.{ekstensi}`

Bahasa yang tersedia
- Javascript (Native, CommonJS, ES6)
- PHP
- Python
- Java