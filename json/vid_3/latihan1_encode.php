<?php

// $mahasiswa = [
//     [
//         "nama" => "Daud Begili",
//         "nim" => "2253141777"
//     ],
//     [
//         "nama" => "Alf",
//         "nim" => "2253141777"
//     ]
// ];
// var_dump($mahasiswa);
try {
    $dsn = 'mysql:host=mysql-280602-alfdavid760-3fcc.l.aivencloud.com;port=14955;dbname=mahasiswa;sslmode=require';
    $username = 'avnadmin';
    $password = 'AVNS_Q1V3TYJR2VVFIyOGVBG'; // Ganti dengan password yang benar

    // Opsi PDO, termasuk timeout dan mode error
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // Untuk mendapatkan exception saat terjadi kesalahan
        PDO::ATTR_TIMEOUT => 10, // Timeout koneksi (opsional)
    ];

    // Buat koneksi PDO
    $dbh = new PDO($dsn, $username, $password, $options);

    // Persiapkan dan eksekusi query
    $db = $dbh->prepare('SELECT * FROM mahasiswa1');
    $db->execute();
    $mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

    // Encode hasil ke JSON
    $data = json_encode($mahasiswa);
    echo $data;
} catch (PDOException $e) {
    echo 'Koneksi gagal: ' . $e->getMessage();
}
