funfacts = ["Albert Einstein szemei ma is valahol egy New York-i széfben vannak. Bár Einstein azt kérte, hogy hamvasszák el, a patológus tartósította az agyát, a szemeit pedig odaadta a tudós szemészének.",
"Egy 2008-as felmérés szerint a brit tinédzserek 58 százaléka meg van róla győződve, hogy Sherlock Holmes élt.",
"Abraham Lincoln fia, Robert 1864-ben leesett egy vonatperonról, Edwin Booth színész mentette meg. Alig egy évvel később az ő bátyja, John Wilkes Booth ölte meg Lincoln elnököt a Ford Színházban.",
"A gyapjas mamutok még nem haltak ki, amikor az egyiptomi piramisokat építették. Sőt, a szibériai Vrangel-szigeten élt egy törpe fajtájuk, ami csak az i.e. 1700-1500-as években halhatott ki.",
"A varjú hihetetlenül okos állat, körülbelül egy 7 éves gyerek szintjén áll. Megoldanak egészen összetett kirakós feladatokat, eszközöket használnak, és nagyon jó a memóriájuk.",
"A brit tinédzserek 20 százaléka úgy gondolja, hogy Winston Churchill kitalált személyiség."]

let maidatum = String((new Date()).getFullYear())+ String((new Date()).getMonth()) + String((new Date()).getDate())

if (localStorage.datum) {
    if (maidatum != localStorage.datum) {
        localStorage.datum = maidatum
        localStorage.napiff  = Math.floor(Math.random() * funfacts.length)
    }
    if (! localStorage.napiff) {
        localStorage.napiff = 0
    }
}
else {
    localStorage.datum =  String((new Date()).getFullYear())+ String((new Date()).getMonth()) + String((new Date()).getDate())
}

document.getElementById("szoveg").innerHTML = funfacts[parseInt(localStorage.napiff)]

function ujNapi() {
    localStorage.napiff  = Math.floor(Math.random() * funfacts.length)
    window.location.reload()
}
