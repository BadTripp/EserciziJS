
function allunga(x,y) {
    document.getElementById("prova-"+y).style.width = x+"px";
  }
var c=1;
var back=c;
var giri=0;

function cliccato(x){
    if(giri < 3){
    console.log(giri);
    document.getElementById("prova-"+back).style.width ="50px";
    document.getElementById("prova-"+c).style.width ="100px";
    c+=1;
    back=c-1;
    if(c>5){c=1; giri+=1;}
    if(giri==3){
        document.getElementById("prova").style.backgroundColor = "red";
        
        document.getElementById("prova-5").style.width ="50px";
        }
    }
}