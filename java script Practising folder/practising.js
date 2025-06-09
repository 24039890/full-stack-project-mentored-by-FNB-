
function redirect(){
 window.location.href="aler.html";
 window.location.reload();
    const choice=window.confirm("do your want to open a new window");
    var x= window.prompt("whoi are you");
if(x==choice){
     window.open("https://www.google.com");//opens  a new window 
  window.close();//this closes  the window

}
 else{

//less create  a dialog box
window.alert("we are opening a new window");
}
setTimeout(() => {
    document.getElementById("message").innerHTML="log===in"
}, 2000);

}

document.getElementById("message").innerHTML="log....in";

