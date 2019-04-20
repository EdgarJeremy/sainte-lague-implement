public class SainteLague {
    /**
     * Menghitung hak jumlah kursi di parlemen sesuai dengan jumlah suara di daerah
     * pemilihan
     * 
     * @param kursi - jumlah kursi yang akan di distribusikan di dapil
     * @param data  - data jumlah suara per label partai
     * @return jumlah kursi per label partai
     */
    public static OutputItem[] disribusi(int kursi, InputItem[] data) {
        // Map data menjadi struktur yang memiliki jumlah kursi
        OutputItem[] hasil = SainteLague.mapData(data);

        // Pengulangan sesuai jumlah kursi
        for (int i = 0; i < kursi; i++) {
            // Variable untuk menampung informasi kalkulasi pembagian suara sementara
            KalkulasiItem[] kalkulasi = {};

            // Pengulangan data jumlah suara per partai
            for (int j = 0; j < data.length; j++) {
                // Jumlah suara partai (ke-i) dibagi dengan angka ganjil tergantung dengan
                // jumlah kursi yang sudah didapatkan
                // dengan formula : jumlah kursi sementara * 2 + 1
                double nilai = data[j].suara / ((hasil[j].kursi * 2) + 1);
                // Nilai pembagian di-push di variable kalkulasiPembagian
                kalkulasi[j] = new KalkulasiItem(nilai);
            }

            // Menemukan index partai dengan jumlah suara terbesar sementara
            int indexTerbesar = SainteLague.terbesar(kalkulasi);
            // Menambah kursi ke partai yang memiliki suara terbesar
            hasil[indexTerbesar].kursi += 1;
        }

        // Mengembalikan hasil
        return hasil;
    }

    /**
     * Menemukan index item dengan suara terbesar pada data hasil kalkulasi
     * pembagian suara sementara
     * 
     * @param data - data kalkulasi pembagian suara sementara
     * @return index item dengan suara terbesar
     */
    private static int terbesar(KalkulasiItem[] data) {
        // Set nilai terbesar menjadi jumlah suara partai pertama
        int terbesar = data[0].suara;
        // Set index menjadi index partai pertama
        int index = 0;

        // Pengulangan data kalkulasi pembagian suara per partai sementara
        for (int i = 0; i < data.length; i++) {
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

    // Map InputItem array menjadi OutputItem array
    private static OutputItem[] mapData(InputItem[] data) {
        // Menyiapkan hasil OutputItem array
        OutputItem[] hasil = {};
        // Pengulangan data InputItem array
        for (int i = 0; i < data.length; i++) {
            // Membuat OutputItem dengan nilai label dan kursi = 0
            OutputItem output = new OutputItem(data[i].label, 0);
            // Push ke OutputItem array
            hasil[i] = output;
        }
        return hasil;
    }
}

public class InputItem {
    public String label;
    public int suara;

    InputItem(String label, int suara) {
        this.label = label;
        this.suara = suara;
    }
}

public class OutputItem {
    public String label;
    public int kursi;

    OutputItem(String label, int kursi) {
        this.label = label;
        this.kursi = kursi;
    }
}

public class KalkulasiItem {
    public int suara;

    KalkulasiItem(int suara) {
        this.suara = suara;
    }
}