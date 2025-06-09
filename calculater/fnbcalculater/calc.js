
var newline = true;
 var value1,currentOperator;
//handler  for the numerical part
function digitpressed(button){
  
   if(newline){
        document.getElementById("result").value=button;
         newline=false;
    }else{
       var currentDigit=document.getElementById("result").value;//this store  the current number on the input box
       document.getElementById("result").value= currentDigit+button;//ths display the typed + the current number
   }

}
digitpressed(button);

//event  for handler of AC
function ACpressed(){
    document.getElementById("result").value=0;
    newline=true;
}
 ACpressed();
//operator  ..understanding of the two things
function operatorPressed(operator){
    currentOperator=operator;
    value1=parseInt(document.getElementById("result").value);
    newline=true;
}
operatorPressed(operator);

//the  equal button
function equalBttonPressed(){
  var value2=parseInt(document.getElementById("result").value);
  var  final_TOTAL;

  switch(currentOperator){

    case 'x':
         final_TOTAL=value1*value2;
         document.getElementById("result").value=final_TOTAL;
       break;
    case '+':
        final_TOTAL=value1+value2;
        document.getElementById("result").value=final_TOTAL;
        break;
    case '/':
        final_TOTAL=value1/value2;
        document.getElementById("result").value=final_TOTAL;
      break;
    case '-':
        final_TOTAL=value1-value2;
        document.getElementById("result").value=final_TOTAL;
      case 'x²':
          final_TOTAL=value1*value1;
          break;  
  }

  document.getElementById("result").value=final_TOTAL;

  value1=0;
  newline=true;
}