// productAPI.js

// Fungsi untuk menampilkan produk di halaman HTML
function tampilkanProduk() {
    const produkData = getDataProduk(); // Mengambil data produk dari fungsi getDataProduk()
    const menu = document.querySelector('.menu'); // Memilih elemen dengan class "menu"

    // Loop melalui data produk dan menambahkan mereka ke halaman HTML
    produkData.forEach((produk, index) => {
        const kolom = document.createElement('div'); // Membuat elemen div baru
        kolom.className = 'kolom'; // Menambahkan class "kolom" ke elemen div

        const card = document.createElement('div'); // Membuat elemen div baru untuk card produk
        card.className = `card${index + 1}`; // Menambahkan class "card1", "card2", dst., sesuai dengan indeks

        // Membuat elemen gambar
        const img = document.createElement('img');
        img.src = `../assets/image/${produk.nama.toLowerCase()}.jpg`;
        img.style.width = '50%';

        // Membuat elemen judul produk
        const judul = document.createElement('h2');
        judul.textContent = produk.nama;

        // Membuat elemen deskripsi produk
        const deskripsi = document.createElement('p');
        deskripsi.textContent = produk.deskripsi;

        // Membuat elemen harga produk
        const harga = document.createElement('h2');
        harga.textContent = produk.harga;

        // Menambahkan elemen-elemen ke card produk
        card.appendChild(img);
        card.appendChild(judul);
        card.appendChild(deskripsi);
        card.appendChild(harga);

        // Menambahkan card produk ke kolom
        kolom.appendChild(card);

        // Menambahkan kolom ke menu
        menu.appendChild(kolom);
    });
}

// Memanggil fungsi tampilkanProduk() untuk menampilkan produk di halaman HTML
tampilkanProduk();