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
        showAlert('Masukkan nilai yang valid antara 0 dan 100 untuk semua komponen.');
        return;
    }

    // Mendefinisikan bobot untuk masing-masing komponen nilai
    const bobotTugas = 0.3;
    const bobotUTS = 0.3;
    const bobotUAS = 0.4;

    // Menghitung kontribusi masing-masing komponen nilai
    const kontribusiTugas = tugas * bobotTugas;
    const kontribusiUTS = uts * bobotUTS;
    const kontribusiUAS = uas * bobotUAS;

    // Menghitung nilai akhir berdasarkan bobot masing-masing komponen
    const nilaiAkhir = kontribusiTugas + kontribusiUTS + kontribusiUAS;

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

    // Menentukan status kelulusan
    const lulus = nilaiAkhir >= 60;
    const statusKelulusan = lulus ? 'Lulus' : 'Gagal';
    const warnaStatus = lulus ? 'green' : 'red';

    // Menampilkan hasil perhitungan pada elemen dengan id 'hasil'
    document.getElementById('kontribusiTugas').innerText = `${kontribusiTugas.toFixed(2)}`;
    document.getElementById('kontribusiUTS').innerText = `${kontribusiUTS.toFixed(2)}`;
    document.getElementById('kontribusiUAS').innerText = `${kontribusiUAS.toFixed(2)}`;
    document.getElementById('rataRataTertimbang').innerText = `${nilaiAkhir.toFixed(2)} (${nilaiHuruf})`;
    document.getElementById('statusKelulusan').innerText = `${statusKelulusan}`;
    document.getElementById('statusKelulusan').style.color = warnaStatus;
}

// Fungsi untuk menampilkan modal alert
function showAlert(message) {
    const modal = document.getElementById('alertModal');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.innerText = message;
    modal.style.display = 'block';
}

// Fungsi untuk menutup modal alert
function closeModal() {
    const modal = document.getElementById('alertModal');
    modal.style.display = 'none';
}

// Menutup modal jika pengguna mengklik di luar modal
window.onclick = function(event) {
    const modal = document.getElementById('alertModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}