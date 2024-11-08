var randomNumber=Math.floor(Math.random()*6)+1;
//console.log(randomNumber);


var randomDiceImage="dice"+randomNumber+".png";

var imageSource="images/"+randomDiceImage;


var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",imageSource);



var randomNumber2=Math.floor(Math.random()*6)+1;
//console.log(randomNumber);

var randomDiceImage2="dice"+randomNumber2+".png";

var imageSource2="images/"+randomDiceImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",imageSource2);

if(randomNumber>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 WINS !";
}

else if (randomNumber<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 WINS !";
}

else
{
    document.querySelector("h1").innerHTML="Match Drawn ";
}





