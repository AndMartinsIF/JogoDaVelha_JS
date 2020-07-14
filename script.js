const player1 = "Batman"
const player2 = "Superman"
var playTime = player2
var gameOver = false
var velha = 0

atualizaMostrador()
inicializaEspacos()

function atualizaMostrador() {
    if(gameOver) { return }

    if(playTime == player1) {
        var player = document.querySelector("header img")
        player.setAttribute("src", "imgs/batman.png")
    } else {
        var player = document.querySelector("header img")
        player.setAttribute("src", "imgs/superman.png")
    }
}

function inicializaEspacos() {

    var espacos = document.getElementsByClassName("espaco")
    for (var i = 0; i < espacos.length; i++){

        espacos[i].addEventListener("click", function() {
            if (gameOver) {return}

            if (this.getElementsByTagName("img").length == 0) {
                if (playTime == player1) {
                    this.innerHTML = "<img src='imgs/batman.png'>"
                    this.setAttribute("jogada", player1)
                    playTime = player2
                    velha++
                } else {
                    this.innerHTML = "<img src='imgs/superman.png'>"
                    this.setAttribute("jogada", player2)
                    playTime = player1
                    velha++
                }
                atualizaMostrador()
            }
            verificarVencedor()
        })
    }
}

function verificarVencedor() {
    var a1 = document.getElementById("a1").getAttribute("jogada")
    var a2 = document.getElementById("a2").getAttribute("jogada")
    var a3 = document.getElementById("a3").getAttribute("jogada")

    var b1 = document.getElementById("b1").getAttribute("jogada")
    var b2 = document.getElementById("b2").getAttribute("jogada")
    var b3 = document.getElementById("b3").getAttribute("jogada")

    var c1 = document.getElementById("c1").getAttribute("jogada")
    var c2 = document.getElementById("c2").getAttribute("jogada")
    var c3 = document.getElementById("c3").getAttribute("jogada")

    var vencedor = ""

    if(a1 == b1 && a1 == c1 && a1 != ""){
        vencedor = a1
    } else if(a2 == b2 && a2 == c2 && a2 != ""){
        vencedor = a2
    } else if(a3 == b3 && a3 == c3 && a3 != ""){
        vencedor = a3
    } else if(a1 == b2 && a1 == c3 && a1 != ""){
        vencedor = a1
    } else if(a3 == b2 && a3 == c1 && a3 != ""){
        vencedor = a3
    } else if(a1 == a2 && a1 == a3 && a1 != ""){
        vencedor = a1
    } else if(b1 == b2 && b1 == b3 && b1 != ""){
        vencedor = b1
    } else if(c1 == c2 && c1 == c3 && c1 != ""){
        vencedor = c1
    } else if(velha >= 9) {
        setTimeout(function() {
            alert("DEU EMPATE!!!")
        }, 50)
    }

    if(vencedor != "") {
        gameOver = true
        setTimeout(function() {
            alert("O ganhador foi '" + vencedor + "'")
        }, 50)
    }
}

function jogarNovamente() {
    return window.location.reload(true)
}