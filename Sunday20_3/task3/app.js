let num1=Number(prompt("Enter first number"));
let op=prompt(" Enter one operation  + / - * ");
let num2=Number(prompt("Enter second number"));


switch (op) {
    case "+":
        msg=(alert(num1 + op + num2 + " = " +  (num1+num2))); 
        console.log(num1 + op + num2 + " = " + (num1+num2));
        document.write("<h1>" +num1 + op + num2 + " = " + (num1+num2)+"</h1>");
      break;
    case "-":
      msg=(alert(num1 + op + num2 + " = " + (num1-num2))); 
      console.log(num1 + op + num2 + " = " + (num1-num2));
      document.write("<h2>" + num1 + op + num2 + " = " + (num1-num2)+"</h2>");
      break;
    case "*":
       msg=(alert(num1 + op + num2 + " = " + (num1*num2))); 
       console.log(num1 + op + num2 + " = " + (num1*num2));
       document.write("<h3>" + num1 + op + num2 + " = " + (num1*num2)+"</h3>");
      break;
    case "/":
      msg=(alert(num1 + op + num2 + " = " + (num1/num2))); 
      console.log(num1 + op + num2 + " = " + (num1/num2));
      document.write("<h4>" + num1 + op + num2 +  " = " +(num1/num2)+"</h4>");
      break;
  
    default:
      op ="not valide value "
        msg=(alert(op)) ; 
        console.log(op); 
        document.write("<h5>"+op+"</h5>");
  }
