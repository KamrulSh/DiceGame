var score1 = 0, score2 = 0, draw = 0;
var initSum1 = 0, initSum2 = 0;
for(var i=1; i<=1000; i++) {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImg1 = "dice" + randomNumber1 + ".png";
    var randomIngSorc1 = "img/" + randomDiceImg1;
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomIngSorc1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImg2 = "dice" + randomNumber2 + ".png";
    var randomIngSorc2 = "img/" + randomDiceImg2;
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomIngSorc2);

    if(randomNumber1 > randomNumber2) {
        score1++;
        initSum1 = initSum1 + randomNumber1;
        initSum2 = initSum2 + randomNumber2;
    } else if(randomNumber1 < randomNumber2) {
        score2++;
        initSum1 = initSum1 + randomNumber1;
        initSum2 = initSum2 + randomNumber2;
    } else {
        draw++;
        initSum1 = initSum1 + randomNumber1;
        initSum2 = initSum2 + randomNumber2;
    }
    document.querySelectorAll("h3")[0].innerHTML = "Score1: " + score1;
    document.querySelectorAll("h3")[1].innerHTML = "Total1: " + initSum1;
    document.querySelectorAll("h3")[2].innerHTML = "Score2: " + score2;
    document.querySelectorAll("h3")[3].innerHTML = "Total2: " + initSum2;
}

if(score1 > score2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (score1 < score2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
    document.querySelector("h1").innerHTML = "Drawn " + draw + " times";
}
