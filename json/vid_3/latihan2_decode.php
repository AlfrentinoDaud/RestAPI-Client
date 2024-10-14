<?php
$data = file_get_contents('coba.json');
// Array
$mahasiswa =  json_decode($data, true);
// Object
// $mahasiswa =  json_decode($data);
var_dump($mahasiswa);
echo $mahasiswa[0]["pembimbing"]["pembimbing1"];
