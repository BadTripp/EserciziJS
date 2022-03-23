schermoy=document.getElementById("schermo").clientHeight;
schermox=document.getElementById("schermo").clientWidth;
var step=1;
var speed=1;
setInterval(movimento,5);
quadrato=document.getElementById("quadrato");
function movimento(){
    var left=quadrato.offsetLeft;
    var top=quadrato.offsetTop;
    console.log("Display |x:"+schermox,"|y:"+schermoy+"|","|left:"+left,"|top:"+top)
    if(left <= schermox-50 && top == 0)         {move(1); console.log("move1")}
    if(left == schermox-49 && top < schermoy-50){move(2); console.log("move2")}
    if(top == schermoy-50 && left > 0)          {move(3); console.log("move3")}
    if(left == 0 && top > 0)                    {move(4); console.log("move4")}     
}
function move (direzione){
    switch (direzione){
        case 1:
            quadrato.style.left=step+"px"; 
            step+=speed;
            break;
        case 2:
            step=quadrato.offsetTop+speed; 
            quadrato.style.top=step+"px";
            break;
        case 3:
            step=quadrato.offsetLeft-speed;
            quadrato.style.left=step+"px"; 
            break;
        case 4:
            step=quadrato.offsetTop-speed;
            quadrato.style.top=step+"px"; 
            break;
        }
}
