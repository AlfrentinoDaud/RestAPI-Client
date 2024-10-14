// Vanila JS
// // ubah object jadi json
// let mahasiswa = {
//     nama: "Daud",
//     nim: "225314177",
//     email: "daudbegili53@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));

// // json ke object
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         // // string
//         // let mahasiswa = this.responseText;
//         // object
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

// JQUERY
$.getJSON('coba.json', function (data) {
    console.log(data);
})