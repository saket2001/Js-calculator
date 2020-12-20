// simple calculator made by functions
/* this calc does the following 
   1.can take two-four numbers as an input
   2.you can add , subtract,divide,multiply,log and etc
   3.functions list
     a.when pressed on a button , t hat button will come on display(output-box).
*/


var num1,num2,num3,num4,operand1,operand2,result,operation,status=0;
var number1, number2;
var resultHistory=[];
function isEmpty(){
  if(num1===null)return 1;
  if (num2 === null) return 2;
  if (num3 === null) return 3;
  if (num4 === null) return 4;
}
function add(){
  //numJoin();
  operation="+";
  document.querySelector("#output-history").innerHTML =num1 + "" + num2 + "" + operation;
  if(status==1){
     result = number1 + number2;
     showResult();
  }
}
function minus(){
    operation = "-";
    document.querySelector("#output-history").innerHTML =num1 + "" + num2 + "" + operation;
    if (status == 1) {
      result = number1 - number2;
      showResult();
    }
}
function divide() {
 operation = "/";
 document.querySelector("#output-history").innerHTML =
   num1 + "" + num2 + "" + operation;
 if (status == 1) {
   result = number1 / number2;
   showResult();
 }
};
function multiply() {
  operation = "*";
  document.querySelector("#output-history").innerHTML =
    num1 + "" + num2 + "" + operation;
  if (status == 1) {
    result = number1 * number2;
    showResult();
  }
};
function numJoin(){
  operand1=num1+""+num2;
  operand2=num3+""+num4;
  number1=parseInt(operand1);
  number2=parseInt(operand2);
}
function equalto(){
 numJoin();
 if(operation==="+"){
   status=1;
   add();
   status=0;
 }
 if (operation === "-") {
   status = 1;
   minus();
   status = 0;
 }
 if (operation === "/") {
   status = 1;
   divide();
   status = 0;
 }
 if (operation === "*") {
   status = 1;
   multiply();
   status = 0;
 }
}

function showPrev(){
  if(resultHistory.length>2){
    while (resultHistory.length>0) {
      resultHistory.pop();
    }
    alert("prev array overflow"+"\nSo prev array cleared");
  }
  document.querySelector("#output-history").innerHTML = " ";
  document.querySelector("#output-history").innerHTML =resultHistory;
}
function clearVar(){
  num1=null;
  num2=null;
  num3=null;
  num4=null;
  num5 = null;
  num6 = null;
  num7 = null;
  num8 = null;
  number1=null;
  number2=null;
  operand1=null;
  operand2=null;
  result=null;
  operation=null;
  document.querySelector("#output-history").innerHTML =" ";
  document.querySelector("#output").innerHTML = " ";
}
function showResult() {
  document.querySelector("#output-history").innerHTML =" ";
  document.querySelector("#output").innerHTML =result;
  resultHistory.push(result);
} 
var NumString="";
function showOnOutput(num){
  NumString.concat(num);
  document.querySelector("#output-history").innerHTML =NumString;
}

document.getElementById(9).addEventListener('click',function(){
  if (isEmpty() === 1) {
    num1 = 9;
    document.querySelector("#output-history").innerHTML = num1;
    //showOnOutput(9);
  }else if (isEmpty() === 2) {
    num2 = 9;
    document.querySelector("#output-history").innerHTML = num1 + "" + num2;
  } else if (isEmpty() === 3) {
    num3 = 9;
    document.querySelector("#output-history").innerHTML =
      num1 + "" + num2 + "" +operation+""+ num3;
  } else if (isEmpty() === 4) {
    num4 = 9;
    document.querySelector("#output-history").innerHTML =
      num1 + "" + num2 + "" +operation+""+ num3 + "" + num4;
  } 
});
document.getElementById(8).addEventListener("click", function () {
   if (isEmpty() === 1) {
     num1 = 8;
     showOnOutput(8);
     document.querySelector("#output-history").innerHTML = num1;
   } else if (isEmpty() === 2) {
     num2 = 8;
     document.querySelector("#output-history").innerHTML = num1 + "" + num2;
   } else if (isEmpty() === 3) {
     num3 = 8;
     document.querySelector("#output-history").innerHTML =
       num1 + "" + num2 + "" + operation + "" + num3;
   } else if (isEmpty() === 4) {
     num4 = 8;
     document.querySelector("#output-history").innerHTML =
       num1 + "" + num2 + "" + operation + "" + num3 + "" + num4;
   } 
});
document.getElementById(7).addEventListener("click", function () {
  if (isEmpty() === 1) {
    num1 = 7;
    document.querySelector("#output-history").innerHTML = num1;
  } else if (isEmpty() === 2) {
    num2 = 7;
    document.querySelector("#output-history").innerHTML = num1 + "" + num2;
  } else if (isEmpty() === 3) {
    num3 = 7;
    document.querySelector("#output-history").innerHTML =
      num1 + "" + num2 + "" + operation + "" + num3;
  } else if (isEmpty() === 4) {
    num4 = 7;
    document.querySelector("#output-history").innerHTML =
      num1 + "" + num2 + "" + operation + "" + num3 + "" + num4;
  }
});
document.getElementById(6).addEventListener("click", function () {
  if (isEmpty() === 1) {
    num1 = 6;
    document.querySelector("#output-history").innerHTML = num1;
  } else if (isEmpty() === 2) {
    num2 = 6;
    document.querySelector("#output-history").innerHTML = num1 + "" + num2;
  } else if (isEmpty() === 3) {
    num3 = 6;
    document.querySelector("#output-history").innerHTML =
      num1 + "" + num2 + "" + operation + "" + num3;
  } else if (isEmpty() === 4) {
    num4 = 6;
    document.querySelector("#output-history").innerHTML =
      num1 + "" + num2 + "" + operation + "" + num3 + "" + num4;
  }
});
document.getElementById(5).addEventListener("click", function () {
 if (isEmpty() === 1) {
   num1 = 5;
   document.querySelector("#output-history").innerHTML = num1;
 } else if (isEmpty() === 2) {
   num2 = 5;
   document.querySelector("#output-history").innerHTML = num1 + "" + num2;
 } else if (isEmpty() === 3) {
   num3 = 5;
   document.querySelector("#output-history").innerHTML =
     num1 + "" + num2 + "" + operation + "" + num3;
 } else if (isEmpty() === 4) {
   num4 = 5;
   document.querySelector("#output-history").innerHTML =
     num1 + "" + num2 + "" + operation + "" + num3 + "" + num4;
 }
});
document.getElementById(4).addEventListener("click", function () {
 if (isEmpty() === 1) {
   num1 = 4;
   document.querySelector("#output-history").innerHTML = num1;
 } else if (isEmpty() === 2) {
   num2 = 4;
   document.querySelector("#output-history").innerHTML = num1 + "" + num2;
 } else if (isEmpty() === 3) {
   num3 = 4;
   document.querySelector("#output-history").innerHTML =
     num1 + "" + num2 + "" + operation + "" + num3;
 } else if (isEmpty() === 4) {
   num4 = 4;
   document.querySelector("#output-history").innerHTML =
     num1 + "" + num2 + "" + operation + "" + num3 + "" + num4;
 }
});
document.getElementById(3).addEventListener("click", function () {
 if (isEmpty() === 1) {
   num1 = 3;
   document.querySelector("#output-history").innerHTML = num1;
 } else if (isEmpty() === 2) {
   num2 = 3;
   document.querySelector("#output-history").innerHTML = num1 + "" + num2;
 } else if (isEmpty() === 3) {
   num3 = 3;
   document.querySelector("#output-history").innerHTML =
     num1 + "" + num2 + "" + operation + "" + num3;
 } else if (isEmpty() === 4) {
   num4 = 3;
   document.querySelector("#output-history").innerHTML =
     num1 + "" + num2 + "" + operation + "" + num3 + "" + num4;
 }
});
document.getElementById(2).addEventListener("click", function () {
 if (isEmpty() === 1) {
   num1 = 2;
   document.querySelector("#output-history").innerHTML = num1;
 } else if (isEmpty() === 2) {
   num2 = 2;
   document.querySelector("#output-history").innerHTML = num1 + "" + num2;
 } else if (isEmpty() === 3) {
   num3 = 2;
   document.querySelector("#output-history").innerHTML =
     num1 + "" + num2 + "" + operation + "" + num3;
 } else if (isEmpty() === 4) {
   num4 = 2;
   document.querySelector("#output-history").innerHTML =
     num1 + "" + num2 + "" + operation + "" + num3 + "" + num4;
 }
});
document.getElementById(1).addEventListener("click", function () {
 if (isEmpty() === 1) {
   num1 = 1;
   document.querySelector("#output-history").innerHTML = num1;
 } else if (isEmpty() === 2) {
   num2 = 1;
   document.querySelector("#output-history").innerHTML = num1 + "" + num2;
 } else if (isEmpty() === 3) {
   num3 = 1;
   document.querySelector("#output-history").innerHTML =
     num1 + "" + num2 + "" + operation + "" + num3;
 } else if (isEmpty() === 4) {
   num4 = 1;
   document.querySelector("#output-history").innerHTML =
     num1 + "" + num2 + "" + operation + "" + num3 + "" + num4;
 }
});
document.getElementById(0).addEventListener("click", function () {
  if (isEmpty() === 1) {
    num1 = 0;
    document.querySelector("#output-history").innerHTML = num1;
  } else if (isEmpty() === 2) {
    num2 = 0;
    document.querySelector("#output-history").innerHTML = num1 + "" + num2;
  } else if (isEmpty() === 3) {
    num3 = 0;
    document.querySelector("#output-history").innerHTML =
      num1 + "" + num2 + "" + operation + "" + num3;
  } else if (isEmpty() === 4) {
    num4 = 0;
    document.querySelector("#output-history").innerHTML =
      num1 + "" + num2 + "" + operation + "" + num3 + "" + num4;
  }
});
