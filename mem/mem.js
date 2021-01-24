nevek = ["104059188_711403399705120_8034611919783151548_o.jpg",
    "120144661_1258359014556921_5410152006831694105_o.jpg",
    "14e33a1cebbab3c1f51310b4a4e866fb.jpg",
    "1fc45125f88dd68752187332b2372cdc.jpg",
    "21c1cd69c1f0ba439144caa58f2b632a.jpg",
    "2e271e63189f88e5d3dd232fedad23e0.jpg",
    "4330bf105ee2be824f05a32bcbc04ce4.jpg",
    "44353f3d75bae7bb4478ea0b2792699e.jpg",
    "46d4b0be85cc5186a86f9f5a1fd2bb86.jpg",
    "4706375facb7e2d77a7c4f04d165b501.jpg",
    "4c309689deabce9af6fa0246609150d3.jpg",
    "4f414680c6a1f25bb33608aef67f8193.jpg",
    "548c1f0ed17c469210bc9c9703808937.jpg",
    "60583bc8cd6625921746cc53aa181425.jpg",
    "61a2fbe28085ea2b6a038705fc92d74a.jpg",
    "61e467368bd007fb672e49f90c0949b1.jpg",
    "623085699af8035b8982972f4a854da2.jpg",
    "6d068957c98265e08b499d002e944841.jpg",
    "73bfa04b444a325b2606a4f393f81646.jpg",
    "74544de182c156355797c1f603601249.jpg",
    "7901156c9bd14df85de502995285d5f7.jpg",
    "819c976168a101626f9959b156272ccb.jpg",
    "86420b08100a29a422d93a46be2777f6.jpg",
    "9b9eda97ebdb177f06793aab09d17439.jpg",
    "a4db28aef3b3bde7272bbaf5c8ff757a.jpg",
    "acc210ad9769fe73162a643bea12fa04.jpg",
    "b03ebd3363cafd70f61d85fda948fef7.jpg",
    "b325aac22225a59905295ba5be209114.jpg",
    "b46de02a23f7f50cf7caf09a98cbb84c.jpg",
    "b6605c20ebe4f9a485d230813f80a534.jpg",
    "be56021cc9934073c1327bd4919cf41e.jpg",
    "beafd3977c65a864fe9d9a8824c39bf6.jpg",
    "bf0eafce481f476f5113e3b339b42530.jpg",
    "cb544445d45b763c265f3d6fd3011f67.jpg",
    "d6782b1c0e1895181735b7cd2d8816df.jpg",
    "e24f77e839551bc3e27127034efa1f00.jpg",
    "EWXGu3OX0AAMWeY.jpg",
    "f1bd0840561e78d0e0274b33adfd4559.jpg",
    "f7103649720b24b1b027e78a2e23e1af.jpg",
    "ffa19fbb74a94ea720498c32ca7bd257.jpg",
    "ffb1e621f9c72a5e6003e4a561caa86d.jpg",
    "IMG_20200608_155736.jpg",
    "IMG_20200608_155852.jpg",
    "IMG_20200608_155946.jpg",
    "IMG_20200608_160044.jpg",
    "IMG_20200608_160342.jpg",
    "IMG_20200608_160430.jpg",
    "IMG_20200608_160444.jpg",
    "IMG_20200608_160503.jpg",
    "IMG_20200608_160513.jpg",
    "IMG_20200702_141152.jpg",
    "IMG_20200702_141302.jpg",
    "IMG_20200702_141345.jpg",
    "IMG_20200702_141358.jpg",
    "IMG_20200702_141422.jpg",
    "IMG_20200720_142741.jpg",
    "IMG_20200727_115525.jpg",
    "IMG_20200728_193705.jpg",
    "IMG_20200823_153947.jpg",
    "IMG_20200823_154002.jpg",
    "IMG_20200823_154052.jpg",
    "IMG_20200919_192909.jpg",
    "IMG_20200919_192929.jpg",
    "IMG_20200919_192944.jpg",
    "IMG_20200919_193005.jpg",
    "IMG_20200919_193024.jpg",
    "IMG_20200922_164246.jpg",
   "Picture memes 6RkRqc947 — iFunny.jpeg",
    "received_634538557405615.jpeg",
    "teszt1.jpg",
    "teszt2.jpg",
    "teszt3.jpeg",
    "teszt.jpg"
   ]
let imageshown

let maidatum = String((new Date()).getFullYear())+ String((new Date()).getMonth()) + String((new Date()).getDate())

if (localStorage.datum) {
    if (maidatum != localStorage.datum) {
        localStorage.datum = maidatum
        localStorage.napimem  = Math.floor(Math.random() * nevek.length)
    }
    if (! localStorage.napimem) {
        localStorage.napimem = 0
    }
}
else {
    localStorage.datum =  String((new Date()).getFullYear())+ String((new Date()).getMonth()) + String((new Date()).getDate())
}

imageshown = "kepek/" + nevek[parseInt(localStorage.napimem)]

document.getElementById('kep').src= imageshown

function ujNapi() {
    localStorage.napimem  = Math.floor(Math.random() * nevek.length)
    window.location.reload()
}
