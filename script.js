// Anda bisa menambahkan JavaScript di sini untuk fitur tambahan,
// contohnya:
// 1. Menyoroti baris jadwal untuk hari ini (jika ada data hari).
// 2. Filter guru berdasarkan mata pelajaran.
// 3. Animasi tambahan saat scroll.

document.addEventListener('DOMContentLoaded', () => {
    // Contoh sederhana: Menambahkan kelas saat tabel di-hover
    const tableRows = document.querySelectorAll('table tbody tr');

    tableRows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = '#e0f7fa'; // Light cyan on hover
        });
        row.addEventListener('mouseout', () => {
            // Mengembalikan warna ke default atau warna nth-child
            const index = Array.from(row.parentNode.children).indexOf(row);
            if (row.querySelector('.istirahat')) {
                 row.style.backgroundColor = '#f9f9f9'; // Gold for breaks
            } else if (index % 2 === 0) {
                row.style.backgroundColor = '#f9f9f9'; // Even row color
            } else {
                row.style.backgroundColor = '#fdfdfd'; // Odd row color
            }
        });
    });

    // Opsional: Smooth scroll untuk link anchor jika ada
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

AOS.init();