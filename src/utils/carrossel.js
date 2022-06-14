const chevleft = document.querySelector('.bx bx-chevron-left')
const chevright = document.querySelector(".bx bx-chevron-right")
const currentimage = document.getElementById("imagem")
/* const itens = require('./carrcontent.json') */
let counter = 0

const itens = [{
    "idItem": 1,
    "url": "https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/01/nftbieber.jpg",

},
{
    "idItem": 2,
    "url": "https://s2.glbimg.com/6fLjMPYo50gB1llNwE11EVXdf8w=/620x430/e.glbimg.com/og/ed/f/original/2022/02/21/https___hypebeast.com_image_2021_10_bored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg",
}, {
    "idItem": 3,
    "url": "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3170953:1639513060/image.jpg?h=630&q=0.6&w=1200&$p$h$q$w=f76cc5e",
},
{
    "idItem": 4,
    "url": "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3170953:1639513060/image.jpg?h=630&q=0.6&w=1200&$p$h$q$w=f76cc5e",

}
]
chevleft.addEventListener("click", Chevleft)
function Chevleft() {
    counter -= 1
    if (counter < 0) {
        counter = itens.length - 1
    }
    currentimage.setAttribute("src", itens[counter].url.toString())
}
chevleft.addEventListener("click", Chevleft)

function Chevright() {
    if (counter >= itens.length - 1) {
        counter = 0
    } else {
        counter += 1
    }
    currentimage.setAttribute("src", itens[counter].url.toString())
    carrtext.innerHTML = itens[counter].texto.toString()
}
chevright.addEventListener("click", Chevright)
setInterval(Chevright, 2000)