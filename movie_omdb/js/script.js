function searchMovie() {
    // untuk menghilangkan search sebelumnya yang tampil
    $('#movie-list').html('');
    // $.getJSON('http://omdbapi.com?apikey=69d0a3f3')
    $.ajax({
        // posisi tidak absolute
        url: 'http://omdbapi.com',
        type: 'GET',
        dataType: 'json',
        // mau kirim data apa ke url
        data: {
            'apikey': '69d0a3f3',
            // parameter carrin elemen dengan nama search-input lalu ambil value inputnya
            's': $('#search-input').val()
        },
        success: function (result) {
            if (result.Response == "True") {
                let movies = result.Search;

                $.each(movies, function (i, data) {
                    // console.log("Adding data-id:", data.imdbID);

                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card mb-3" style="width: 18rem;">
                                <img src="`+ data.Poster + `" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">`+ data.Title + `</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">`+ data.Year + `</h6>
                                    <a href="#" class="card-link see-detail" 
                                    data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.imdbID + `">See Detail</a>
                                </div>
                            </div>
                        </div>`);
                });
                $('#search-input').val('');
            } else {
                $('#movie-list').html(`
                    <div class="col">
                    <h1 class="text-center">` + result.Error + `</h1></div>`);
            }
        }
    });
}

$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function (event) {
    if (event.keyCode === 13) {//bisa menggunakan which
        searchMovie();
    }
});
// event deligation
// elemen yang namanya movie list, lalu saat di klik sebuah elemen yang id see detail
$('#movie-list').on('click', '.see-detail', function () {
    var imdbID = $(this).attr('data-id'); // Gunakan attr untuk mengambil data-id
    // console.log("ID yang diambil:", imdbID); // Log untuk mengecek hasilnya
    $.ajax({
        type: 'GET',
        url: 'http://omdbapi.com',
        dataType: 'json',
        // mau kirim data apa ke url
        data: {
            'apikey': '69d0a3f3',
            // parameter carrin elemen dengan nama search-input lalu ambil value inputnya
            // $(this).data('imdbID')
            'i': imdbID//var
        },
        success: function (movie) {
            if (movie.Response === "True") {
                $('.modal-body').html(`
                    <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="`+ movie.Poster + `" class="img-fluid">
                        </div>

                        <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item"><h3>`+ movie.Title + `</h3></li>
                                <li class="list-group-item">Released : `+ movie.Released + `</li>
                                <li class="list-group-item">Genre : `+ movie.Genre + `</li>
                                <li class="list-group-item">Director : `+ movie.Dorector + `</li>
                                <li class="list-group-item">Actors : `+ movie.Actors + `</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    `)
            }
        }
    })
});

