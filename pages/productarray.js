/*const cardNode = document.getElementById('card');*/

let products = [
    {
        nama: "Bunga Matahari",
        deskripsi: "Tanaman Bunga Matahari Lokal"
    },
    {
        nama: "Bunga Mawar",
        deskripsi: "Tanaman Hias Bunga Mawar"

        nama: "Bunga Kambajo",
        deskripsi: "Tanaman Hias Bibit Kamboja Putih"

        nama: "Bunga Tulip",
        deskripsi: "Tanaman Hias Kucai Tulip Bunga Pink"
        
        nama: "Bunga Edelweiss",
        deskripsi: "Tanaman Hias Bunga Edelweiss Asli"

        nama: "Bunga Melati",
        deskripsi: "Tanaman Bunga melati jasmine Putih"

        nama: "Bunga Sepatu",
        deskripsi: "Tanaman Hias Bunga Sepatu Merah"

        nama: "Bunga telang",
        deskripsi: "Tanaman Herbal Bunga Telang Ungu"

    }
];
products.forEach((val, index) => {
    const cardNode = document.querySelector(`.card${index+1}`);
    const title = cardNode.querySelector("#judul");
    const deskripsi = cardNode.querySelector("#deskripsi");
    title.innerText = val.nama;
    deskripsi.innerText = val.deskripsi;

})

/*let html = " ";
products.forEach((val) => {
    html += `
        <h3 id="judul">$(val.nama)</h3>
        <p id="deskripsi">$(val.deskripsi)</p>
       ` ;
})
cardNode.innerHTML = html;
document.getElementById('judul').innerHTML = products[0].nama;
document.getElementById('deskripsi').innerhtml = products[0].deskripsi;*/


