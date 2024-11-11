
# Bangka Script

Bangka Script Di Rancang Karena Adanya Ketertarikan Bagaimana Di Buatnya Jaksel Language, Dari Ketertarikan Tersebut Saya Mengembangkan Bahasa Language Dengan 
 Nama Yaitu Bangka Language Bisa Di Bilang Sih Script

Saya Harap kalian dapat memberikan start dan bantu mengshare Bangka Script

## Fitur Utama

- **Sintaks Sederhana**: Menggunakan kata kunci dalam bahasa Bangka yang mudah dipahami.
- **Translasi ke JavaScript**: Kode Bangka Anda akan diterjemahkan ke dalam JavaScript untuk dieksekusi.
- **Kompatibel dengan Node.js**: Dapat dijalankan di lingkungan Node.js.

## Persyaratan

Sebelum menginstal Bangka Language, pastikan Anda memiliki:

- [Node.js](https://nodejs.org/) versi 12 atau lebih baru.
- NPM (Node Package Manager), biasanya sudah terpasang bersama Node.js.


## Install Dan Cara Menjalankannya
### OPSI 1
```bash 
git clone https://github.com/ferdinandderosaputra/bangka-script.git
cd bangka-script
node bangka.js yourpath/example.bangka
```
### OPSI 2
```bash
git clone https://github.com/ferdinandderosaputra/bangka-script.git
cd bangka-script
npm install
npm install -g .
chmod +x bangka.js
bangka example.bangka
```

## Contoh Script
### Penjumlahan 2 Angka
```
fungsi jumlah(a, b) {
    kembalikan a + b
}

var hasil = jumlah(5, 10)
cetak "Hasil penjumlahan 5 dan 10 adalah: " + hasil
```
### Memeriksa Bilangan Genap Atau Ganjil
```
fungsi cekGenapGanjil(angka) {
    jika angka % 2 == 0 {
        cetak angka + " adalah bilangan genap."
    } lain {
        cetak angka + " adalah bilangan ganjil."
    }
}

cekGenapGanjil(4)
cekGenapGanjil(7)
```

### List-List Command Bangka Script

Untuk Anda Yang Penasaran Dengan List List Command Bangka-Script Dan Ingin Lebih Tau Tentang Bangka Script Anda Bisa Mengeceknya Di Bawah
- [List Command](command.md)

### Disclaimer

Project Ini Adalah Project Pembelajaran Saya Di Mana Saya Berusaha Belajar Membuat Languange Seperti Jaksel Dan Project Ini Juga Project HaveFun Dan Untuk Mengisi Waktu Luang Saya Anda Juga Di Perbolehkan Untuk Mengedit Karena Ini Juga Open Source

##ini juga belum sepenuhnya menggunakan bahasa bangka di sini masih banyak menggunakan bahasa Indonesia 
