
 checkpassword();
function checkpassword(){
 var actual_pasword= "12345678";
 var actual_username="booxdaxman";
  checkp(actual_pasword,actual_username);

}

function checkp(actual_paswosrd,actual_username){
 var username=document.getElementById("username").value;
 var password=document.getElementById("password").value;

 if(actual_paswosrd==password && actual_username==username){
       document.getElementById("message").innerHTML("log....in");
       alert("AUTHORISATION SUCCESSFUL");
       window.location.href="me.html";
 }else{
       alert("wrong password or username");
 }
}
