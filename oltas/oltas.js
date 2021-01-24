oltasok = ["Te csirke!",
"Buta vagy!",
"Kevés vagy, mint árvaházban a szülői értekezlet!"]

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
