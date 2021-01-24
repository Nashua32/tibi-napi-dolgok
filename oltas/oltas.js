oltasok = ["Te csirke!",
          "Buta vagy!",
          "Kevés vagy, mint árvaházban a szülői értekezlet!",
          "Elpakollak!",
          "Úgy felrúglak, hogy a torrent se szed le!",
          "Te diákhitelképű!",
          "Te módosult levelekből álló szaporítóhajtásképű!",
          "Rude vagy, mint egy kalaprúd!"]

let maidatum = String((new Date()).getFullYear())+ String((new Date()).getMonth()) + String((new Date()).getDate())

if (localStorage.datum) {
    if (maidatum != localStorage.datum) {
        localStorage.datum = maidatum
        localStorage.napioltas  = Math.floor(Math.random() * oltasok.length)
    }
    if (! localStorage.napioltas) {
        localStorage.napioltas = 0
    }
}
else {
    localStorage.datum =  String((new Date()).getFullYear())+ String((new Date()).getMonth()) + String((new Date()).getDate())
}

document.getElementById("szoveg").innerHTML = oltasok[parseInt(localStorage.napioltas)]

function ujNapi() {
    localStorage.napioltas  = Math.floor(Math.random() * oltasok.length)
    window.location.reload()
}
