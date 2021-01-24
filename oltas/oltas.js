oltasok = ["Te csirke!",
"Buta vagy!",
"Kevés vagy, mint árvaházban a szülői értekezlet!"]

let maidatum = String((new Date()).getFullYear())+ String((new Date()).getMonth()) + String((new Date()).getDate())

if (localStorage.datum) {
    if (maidatum != localStorage.datum) {
        localStorage.datum = maidatum
        localStorage.napiszam  = Math.floor(Math.random() * oltasok.length)
    }
    if (! localStorage.napiszam) {
        localStorage.napiszam = 0
    }
}
else {
    localStorage.datum =  String((new Date()).getFullYear())+ String((new Date()).getMonth()) + String((new Date()).getDate())
}

document.getElementById("szoveg").innerHTML = oltasok[parseInt(localStorage.napiszam)]

function ujNapi() {
    localStorage.napiszam  = Math.floor(Math.random() * oltasok.length)
    window.location.reload()
}
