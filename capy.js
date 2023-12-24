let currCapyTile;
let currRacoonTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame () {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    while (score > 200) {
        setInterval(setCapy, 150); 
        setInterval(setRacoon, 200); 
    }

    while (score > 150) {
        setInterval(setCapy, 400); 
        setInterval(setRacoon, 600); 
    }

    while (score > 100) {
        setInterval(setCapy, 500); 
        setInterval(setRacoon, 1000); 
    }

    setInterval(setCapy, 1000); 
    setInterval(setRacoon, 2000); 
}

function getRandom () {
    let num = Math.floor(Math.random() * 9); 
    return num.toString();
}

function setCapy () {
    if (gameOver) {
        return;
    }

    if (currCapyTile) {
        currCapyTile.innerHTML = "";
    }

    let capy = document.createElement("img"); 
    capy.src = "./CAPY/capybara.png";

    let number = getRandom();
    if (currRacoonTile && currRacoonTile.id == number) {
        return;
    }
    currCapyTile = document.getElementById(number);
    currCapyTile.appendChild(capy);
}

function setRacoon () {
    if (gameOver) {
        return;
    }
    if (currRacoonTile) {
        currRacoonTile.innerHTML = "";
    }

    let racoon = document.createElement("img"); 
    racoon.src = "./CAPY/racoon.png";
    
    let num = getRandom();
    if (currCapyTile && currCapyTile.id == num) {
        return;
    }

    currRacoonTile = document.getElementById(num);
    currRacoonTile.appendChild(racoon);
}

function selectTile () {
    if (gameOver) {
        return;
    }
    
    if (this == currCapyTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    } else if (this == currRacoonTile) {
        document.getElementById("score").innerText = "OOPS, YOU LOST: " + score.toString();
        gameOver = true;
    }
}
