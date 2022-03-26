"use strict";
//////////////////////////////////////////////      1 tellFortune
document.write("<h1>Solutions in console part</h1>");
let job="software engineer";
let locat="Jordan";
let fname="Alice";
let num=3;
function tellFortune(num,fname,locat,job)
{ 
 return "You will be "+ job + "in " + locat + ", and married to " + fname + " and have " + num + " kids";
} 
console.log("Q1 'software engineer', 'Jordan', 'Alice', 3");
console.log("You will be "+ job + "in " + locat + ", and married to " + fname + " and have " + num + " kids");
//////////////////////////////////////////////      2
let x=1;
function calculateDogAge (x)
{    let age = x * 7 ; 
    return age ;
}
console.log("Q2 Your doggie is " + calculateDogAge (x) + " years old in dog years!");
//////////////////////////////////////////////      3
function calculateSupply (x , y)
{
    let food_cons = 0 ; 
    do
    {
        x++; 
        food_cons = food_cons + y*365;
    }
    while (x < 100);
    return food_cons;  
}
console.log('Q3', calculateSupply(30, 3));
//////////////////////////////////////////////      4
function greet (t)
{
    return "Hello " + t ;
}
console.log('Q4', greet ("tamara"));
/////////////////////////////////////////////       5
/*
  function double(cat) {
    return 2 * x;
  }*/
  console.log('Q5',"don`t use the parameter x:cat, string not calc with number");
  /*   function double(7) {
    return 2 * 7;
  } */
console.log("   don`t use the parameter in call , Identifier expected");
  /*  function double('7') {
    return 2 * 'x';
  }   */
console.log("   don`t use the parameter x:'7',  char not calc with number");
  ////////////////////////////////////////////       6
  function double3(x) {
    return 2 * x;
  }
  console.log('Q6 add close bracket ');
///////////////////////////////////////////////        7
 function cube(x) {
    return x * x * x;
  }
  console.log('Q7 cube 4  is: ', cube(4));
  /////////////////////////////////////////////       8
  function multiply(x, y) {
    return x * y;
  }
  console.log('Q8 multiply 3*4  is: ', multiply(3,4));
  //////////////////////////////////////////         9
  function canIGetADrivingLicense(age) {
    if (age >= 20) {
      return "yes you can";
    }
    return "please come back after 3 years to get one " ;
  }
  console.log('Q9 ', canIGetADrivingLicense(17));
 //////////////////////////////////                 10
  function sameLength(str, str1) {
    if (str.length === str1.length) {
      return true;
    }
    return false;
  }
  console.log('Q10', sameLength("tamara","T.E.Sh") );
 /////////////////////////////////////              11
  function largerNubmer(num1, num2) {
    if (num1 > num2) {
      return num1;
    }
    return num2;
  }
console.log('Q11', largerNubmer(10, 100));
/////////////////////////////////////    12
  function smallerNubmer(num1, num2, num3) {
    var min = num1
    if (num2 < min) {
      min = num2;
    }
    if (num3 < min) {
      min = num3;
    }
    return min
  }
  console.log('Q12', smallerNubmer(10, 20, 30));

  
   /////////////////////////////////////    13
  function shorterString(string1, string2, string3, string4, string5) {
    var shorter = string1
    if (string2.length < shorter.length) {
      shorter = string2;
    }
    if (string3.length < shorter.length) {
      shorter = string3;
    }
    if (string4.length < shorter.length) {
      shorter = string4;
    }
    if (string5.length < shorter.length) {
      shorter = string5;
    }
    return shorter
  }
  console.log('Q13', shorterString("Tamara", "Enad", "Mahmmoud", "Tama", "T.E.Sh"));
   /////////////////////////////////////    14
  function longerString(string1, string2, string3, string4) {
    var longer = string1
    if (string2.length > longer.length) {
      longer = string2;
    }
    if (string3.length > longer.length) {
      longer = string3;
    }
    if (string4.length > longer.length) {
      longer = string4;
    }
    return longer
  }
  console.log('Q14', longerString ("Tamara", "Enad", "Mahmmoud", "tama"));

   /////////////////////////////////////    15
  function isEven(num) {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  }
  console.log('Q15', isEven (12));
/////////////////////////////////////    16
  function isOdd(num) {
    if (num % 2 !== 0) {
      return true;
    }
    return false;
  }
  console.log('Q16', isOdd (12));
   /////////////////////////////////////    17
  function positive(number) {
    if (number > 0) {
      return number;
    }
    return number * -1;
  }
  console.log('Q17', positive (-12));
   /////////////////////////////////////    18
  function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
  }
  console.log('Q18', fullName("Tamara", "Enad"));
   /////////////////////////////////////    19
  function average(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5;
  }
  console.log('Q19', average(90,95,90,94,93));
   /////////////////////////////////////    20
  function randomNumber() {
    return Math.random();
  }
  console.log('Q20', randomNumber());
   /////////////////////////////////////    21
  function randomBetweenNumbers(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1)) + num1
  }
  console.log('Q21', randomBetweenNumbers(90,95));
   /////////////////////////////////////    22
  function socreInUniversity(score) {
    if (score >= 90 && score < 100)
      return 'A';
    if (score >= 80 && score < 90)
      return 'B';
    if (score >= 70 && score < 80)
      return 'C';
    if (score >= 60 && score < 70)
      return 'D';
    if (score >= 50 && score < 60)
      return 'E';
    if (score < 50)
      return 'F';
  }
  console.log('Q22', socreInUniversity(94));
   /////////////////////////////////////    23
  
  function counter() {
    var count = 0
    return ++count;
  }
  console.log('Q23', counter());
   /////////////////////////////////////    24
  function resetCounter() {
    count = 0;
    var oldCounter = count
    return oldCounter + " and the count reset now";
  }
  console.log('Q24', resetCounter());
  ///////////////////////////////////////////////////////////