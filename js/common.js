
function allunga(x,y) {
    document.getElementById("prova-"+y).style.width = x+"px";
  }
var c=1;
var back=c;

function cliccato(x){
    document.getElementById("prova-"+back).style.width ="50px";
    document.getElementById("prova-"+c).style.width ="100px";
    c+=1;
    back=c-1;
    if(c>5){
        c=1;
    }
}