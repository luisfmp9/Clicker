document.getElementById('player').addEventListener("mouseover", sumarPuntos);

puntos=0;

function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML= "Puntos: <b>" + puntos + "</b>";
    randX=Math.round(Math.random()*500);
    document.getElementById("player").style.marginTop=randX+"px";
    randY=Math.round(Math.random()*500);
    document.getElementById("player").style.marginLeft=randY+"px";
}