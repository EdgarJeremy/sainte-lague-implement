def saintLague(kursi, data):
    '''
    Menghitung hak jumlah kursi di parlemen sesuai dengan jumlah suara di daerah pemilihan

    :param kursi: jumlah kursi yang akan di distribusikan di dapil
    :param data: data jumlah suara per label partai
    :return: jumlah kursi per label partai
    '''

    # Map data menjadi struktur yang memiliki jumlah kursi
    hasil = list(map(lambda d: {'label': d['label'], 'kursi': 0}, data))

    # Pengulangan sesuai jumlah kursi
    for _ in range(0, kursi):
        # Variable untuk menampung informasi kalkulasi pembagian suara sementara
        kalkulasiPembagian = []

        # Pengulangan data jumlah suara per partai
        for j, d in enumerate(data):
            # Jumlah suara partai (ke-i) dibagi dengan angka ganjil tergantung dengan jumlah kursi yang sudah didapatkan
            # dengan formula : jumlah kursi sementara * 2 + 1
            nilai = d['suara'] / ((hasil[j]['kursi'] * 2) + 1)
            # Nilai pembagian di-push di variable kalkulasiPembagian
            kalkulasiPembagian.append({'suara': nilai})

        # Menemukan index partai dengan jumlah suara terbesar sementara
        indexTerbesar = terbesar(kalkulasiPembagian)
        # Menambah kursi ke partai yang memiliki suara terbesar
        hasil[indexTerbesar]['kursi'] += 1

    # Mengembalikan hasil
    return hasil


def terbesar(data):
    '''
    Menemukan index item dengan suara terbesar pada data hasil kalkulasi pembagian suara sementara

    :data: data kalkulasi pembagian suara sementara
    :return: index item dengan suara terbesar
    '''

    # Set nilai terbesar menjadi jumlah suara partai pertama
    terbesar = data[0]['suara']
    # Set index menjadi index partai pertama
    index = 0

    # Pengulangan data kalkulasi pembagian suara per partai sementara
    for i, d in enumerate(data):
        # Jika nilai suara partai (ke-i) lebih besar daripada nilai variable suara terbesar terakhir
        if(d['suara'] > terbesar):
            # Set index (ke-i)
            index = i
            # Set nilai variable suara terbesar menjadi partai (ke-i)
            terbesar = d['suara']

    # Mengembalikan nilai index
    return index


# USAGE
# parlemen = saintLague(5, [
#     {'label': 'A', 'suara': 64000},
#     {'label': 'B', 'suara': 18000},
#     {'label': 'C', 'suara': 15000},
#     {'label': 'D', 'suara': 8600},
#     {'label': 'E', 'suara': 8000},
#     {'label': 'F', 'suara': 7600}
# ])
# print(parlemen)
