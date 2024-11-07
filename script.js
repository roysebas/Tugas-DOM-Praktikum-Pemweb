// Menambahkan event listener pada form dengan id 'nilaiForm' untuk menangani submit event
document.getElementById('nilaiForm').addEventListener('submit', function(event) {
    // Mencegah form dari pengiriman default
    event.preventDefault();
    // Memanggil fungsi hitungNilai untuk melakukan perhitungan
    hitungNilai();
});

// Fungsi untuk menghitung nilai akhir dan menentukan nilai huruf
function hitungNilai() {
    // Mengambil nilai dari input dengan id 'tugas', 'uts', dan 'uas'
    const tugas = parseFloat(document.getElementById('tugas').value);
    const uts = parseFloat(document.getElementById('uts').value);
    const uas = parseFloat(document.getElementById('uas').value);

    // Validasi input, memastikan semua nilai berada di antara 0 dan 100
    if (isNaN(tugas) || isNaN(uts) || isNaN(uas) || tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        alert('Masukkan nilai yang valid antara 0 dan 100 untuk semua komponen.');
        return;
    }

    // Mendefinisikan bobot untuk masing-masing komponen nilai
    const bobotTugas = 0.3;
    const bobotUTS = 0.3;
    const bobotUAS = 0.4;

    // Menghitung nilai akhir berdasarkan bobot masing-masing komponen
    const nilaiAkhir = (tugas * bobotTugas) + (uts * bobotUTS) + (uas * bobotUAS);

    // Menentukan nilai huruf berdasarkan nilai akhir
    let nilaiHuruf;
    if (nilaiAkhir >= 90) {
        nilaiHuruf = 'A';
    } else if (nilaiAkhir >= 80) {
        nilaiHuruf = 'B';
    } else if (nilaiAkhir >= 70) {
        nilaiHuruf = 'C';
    } else if (nilaiAkhir >= 60) {
        nilaiHuruf = 'D';
    } else {
        nilaiHuruf = 'E';
    }

    // Menampilkan hasil perhitungan pada elemen dengan id 'hasil'
    document.getElementById('hasil').innerText = `Nilai Akhir: ${nilaiAkhir.toFixed(2)} (${nilaiHuruf})`;
}