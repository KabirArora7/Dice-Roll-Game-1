var randomNumber1 = Math.ceil(Math.random()*6);

document.querySelector("img").outerHTML= '<img class="img"' + 'src="./images/dice' + randomNumber1.toString() + '.png">';

var randomNumber2 = Math.ceil(Math.random()*6);


document.querySelector(".img2").outerHTML= '<img class="img"' + 'src="./images/dice' + randomNumber2.toString() + '.png">';

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins!!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins!!";
}

else {
    document.querySelector("h1").innerText = "Round Draw :)";
}