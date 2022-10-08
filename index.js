var random=Math.random()*6;    //range 0-5.9999
var randomNumber1=Math.floor(random) + 1;  //range 1-6

var imgsrc1="dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",imgsrc1);

var randomNumber2=Math.floor(Math.random()*6) + 1;
var imgsrc2="dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",imgsrc2);

// changing title
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent="💎 Player 1 Wins";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").textContent="💎 Player 2 Wins";
}
else
{
  document.querySelector("h1").textContent="Draw";
}
