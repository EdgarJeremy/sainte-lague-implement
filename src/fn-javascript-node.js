/**
 * Menghitung hak jumlah kursi di parlemen sesuai dengan jumlah suara di daerah pemilihan
 * @param {number} kursi - jumlah kursi yang akan di distribusikan di dapil
 * @param {Array.<{label: string, suara: number}>} data - data jumlah suara per label partai
 * @returns {Array.<{label: string, kursi: number}>} data jumlah kursi per label partai
 */
function saintLague(kursi, data) {
    // Map data menjadi struktur yang memiliki jumlah kursi
    var hasil = data.map((d) => ({ label: d.label, kursi: 0 }));

    // Pengulangan sesuai jumlah kursi
    for (var i = 0; i < kursi; i++) {
        // Variable untuk menampung informasi kalkulasi pembagian suara sementara
        let kalkulasiPembagian = [];

        // Pengulangan data jumlah suara per partai
        for (var j = 0; j < data.length; j++) {
            // Jumlah suara partai (ke-i) dibagi dengan angka ganjil tergantung dengan jumlah kursi yang sudah didapatkan
            // dengan formula : jumlah kursi sementara * 2 + 1
            const nilai = data[j].suara / ((hasil[j].kursi * 2) + 1);
            // Nilai pembagian di-push di variable kalkulasiPembagian
            kalkulasiPembagian.push({ suara: nilai });
        }
        // Menemukan index partai dengan jumlah suara terbesar sementara
        const indexTerbesar = terbesar(kalkulasiPembagian);
        // Menambah kursi ke partai yang memiliki suara terbesar
        hasil[indexTerbesar].kursi += 1;
    }

    return hasil;
}

/**
 * Menemukan index item dengan suara terbesar pada data hasil kalkulasi pembagian suara sementara
 * @param {Array.<{label: string, suara: number}>} data - data kalkulasi pembagian suara sementara
 * @returns {number} index item dengan suara terbesar
 */
function terbesar(data) {
    // Set nilai terbesar menjadi jumlah suara partai pertama
    let terbesar = data[0].suara;
    // Set index menjadi index partai pertama
    let index = 0;

    // Pengulangan data kalkulasi pembagian suara per partai sementara
    for (var i = 0; i < data.length; i++) {
        // Jika nilai suara partai (ke-i) lebih besar daripada nilai variable suara terbesar terakhir
        if (data[i].suara > terbesar) {
            // Set index (ke-i)
            index = i;
            // Set nilai variable suara terbesar menjadi partai (ke-i)
            terbesar = data[i].suara;
        }
    }
    // Mengembalikan nilai index
    return index;
}

module.exports = saintLague;

// USAGE
// const saintLague = require('./src/fn-javascript-node');
// const parlemen = saintLague(5, [
//     { label: 'A', suara: 64000 },
//     { label: 'B', suara: 18000 },
//     { label: 'C', suara: 15000 },
//     { label: 'D', suara: 8600 },
//     { label: 'E', suara: 8000 },
//     { label: 'F', suara: 7600 }
// ]);
// console.log(parlement);