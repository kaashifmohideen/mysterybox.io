var random=Math.floor(Math.random()*6+1);
var random2=Math.floor(Math.random()*6+1);
var random3=Math.floor(Math.random()*6+1);

document.querySelectorAll("button")[1].addEventListener("click",change);
function change()
{
  document.querySelector('img').setAttribute("src","item"+random+".jpg");
  document.querySelectorAll("h1")[4].innerText="you can win this through this box"
}
document.querySelectorAll("button")[2].addEventListener("click",change2);
function change2()
{
  document.querySelector('img').setAttribute("src","item"+random+".jpg");
  document.querySelectorAll("h1")[4].innerText="you can win this through this box"
}
document.querySelectorAll("button")[3].addEventListener("click",change3);
function change3()
{
  document.querySelector('img').setAttribute("src","item"+random+".jpg");
  document.querySelectorAll("h1")[4].innerText="you can win this through this box"
}
