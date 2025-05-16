// Mengisi dropdown tahun dari 2000 - 2025
let yearList = "";
for (let i = 1990; i <= 2025; i++) {
    yearList += `<option value="${i}">${i}</option>`;
}
document.getElementById("year").innerHTML = yearList;

// Fungsi untuk mengisi tanggal sesuai bulan dan tahun
function populateDays() {
    const daySelect = document.getElementById("day");
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const daysInMonth = new Date(year, month, 0).getDate();

    daySelect.innerHTML = ""; // kosongkan dulu

    for (let i = 1; i <= daysInMonth; i++) {
        daySelect.innerHTML += `<option value="${i}">${i}</option>`;
    }
}

// Set default tanggal saat halaman dibuka
window.onload = function () {
    populateDays();
};

// Update tanggal saat bulan atau tahun berubah
document.getElementById("month").addEventListener("change", populateDays);
document.getElementById("year").addEventListener("change", populateDays);
