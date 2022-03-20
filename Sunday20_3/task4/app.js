let num1=parseInt(prompt("Enter first number"));
let num2=parseInt(prompt("Enter second number"));
let num3=parseInt(prompt("Enter third number"));


//             First number
if((num1%3==0) && (num1%5==0)) 
{   console.log( num1 + " is fizzBuzz divide by 3 and 5");
    msg=(alert(num1 + " is fizzBuzz divide by 3 and 5" )); 
    document.write("<h2>"+ num1 + " is fizzBuzz divide by 3 and 5"+"</h2>");  
   }

else if (num1 % 3 == 0) 
{   console.log( num1 + " is Fizz divide by 3");
    msg=(alert(num1 + " is Fizz divide by 3" )); 
    document.write("<h2>"+ num1 + " is Fizz divide by 3"+"</h2>");  
   }

else if (num1 % 5 == 0) 
{   console.log( num1 + " is Buzz divide by 5");
    msg=(alert(num1 + " is Buzz divide by 5" )); 
    document.write("<h2>"+ num1 + " is Buzz divide by 5"+"</h2>");  
   }

else console.log(num1 + " out value");



//             Secund number

if((num2%3==0) && (num2%5==0)) 
{   console.log( num2 + " is fizzBuzz divide by 3 and 5");
    msg=(alert(num2 + " is fizzBuzz divide by 3 and 5" )); 
    document.write("<h3>"+ num2 + " is fizzBuzz divide by 3 and 5"+"</h3>");  
   }

else if (num2 % 3 == 0) 
{   console.log( num2 + " is Fizz divide by 3");
    msg=(alert(num2 + " is Fizz divide by 3" )); 
    document.write("<h3>"+ num2 + " is Fizz divide by 3"+"</h3>");  
   }

else if (num2 % 5 == 0) 
{   console.log( num2 + " is Buzz divide by 5");
    msg=(alert(num2 + " is Buzz divide by 5" )); 
    document.write("<h3>"+ num2 + " is Buzz divide by 5"+"</h3>");  
   }

else console.log(num2 + " out value");





//             Third number

if((num3%3==0) && (num3%5==0)) 
{   console.log( num3 + " is fizzBuzz divide by 3 and 5");
    msg=(alert(num3 + " is fizzBuzz divide by 3 and 5" )); 
    document.write("<h4>"+ num3 + " is fizzBuzz divide by 3 and 5"+"</h4>");  
   }

else if (num3 % 3 == 0) 
{   console.log( num3 + " is Fizz divide by 3");
    msg=(alert(num3 + " is Fizz divide by 3" )); 
    document.write("<h4>"+ num3 + " is Fizz divide by 3"+"</h4>");  
   }

else if (num3 % 5 == 0) 
{   console.log( num3 + " is Buzz divide by 5");
    msg=(alert(num3 + " is Buzz divide by 5" )); 
    document.write("<h4>"+ num3 + " is Buzz divide by 5"+"</h4>");  
   }

else console.log(num3 + " out value");
