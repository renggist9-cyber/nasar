// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementById('sapaButton');
// 2. Tambahkan 'event listener' untuk aksi 'click'
tombolSapa.addEventListener('click', function() {
    // 3. Jalankan kode ini ketika tombol di-klik
    alert('Halo! Terima kasih sudah berkunjung!');
});
// 1. Select the button and the body
const themeToggleButton = document.getElementById('tombol-tema');
const bodyElement = document.body;
// 2. Add a 'click' event listener to the button
themeToggleButton.addEventListener('click', function() {
    // 3. Toggle the 'dark-mode' class on the body
    bodyElement.classList.toggle('dark-mode');
});
