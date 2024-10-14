function tampilkanSemuaMenu() {
    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        // tiap element didalam menu diberi fungsi apa
        $.each(menu, function (i, data) {
            // Format harga menggunakan toLocaleString
            var formattedHarga = parseFloat(data.harga).toLocaleString('id-ID', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            // Tambahkan elemen HTML dengan data yang sudah diformat
            $('#daftar-menu').append(`
                <div class="col-md-4">
                    <div class="card mb-3">
                        <img src="img/pizza/${data.gambar}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${data.nama}</h5>
                            <p class="card-text">${data.deskripsi}</p>
                            <h5 class="card-title">Rp. ${formattedHarga}</h5>
                            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                        </div>
                    </div>
                </div>
            `);
        });
    });
}

tampilkanSemuaMenu();

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    // carikan saya h1, lalu ganti dengan kategori
    $('h1').html(kategori);

    if (kategori == 'All Menu') {
        tampilkanSemuaMenu();
        return;
    }

    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                var formattedHarga = parseFloat(data.harga).toLocaleString('id-ID', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
                content += `
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img src="img/pizza/${data.gambar}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${data.nama}</h5>
                                <p class="card-text">${data.deskripsi}</p>
                                <h5 class="card-title">Rp. ${formattedHarga}</h5>
                                <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                            </div>
                        </div>
                    </div>`;
            }
        });
        $('#daftar-menu').html(content);
    });
});