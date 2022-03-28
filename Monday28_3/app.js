'use strict'

document.getElementById("t").innerHTML="In Console part you can also find result"+"<hr id='line'>" ;

/*
Instructions: 
 - You should solve all these questions using .map() function 
*/
/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/

let arr=[2, 5, 100];
console.log('Q1   doubleNumbers', arr);
let doubleArray=arr.map(function doubleNumbers(arr){
    return arr*2
  })
  console.log(doubleArray);
  document.getElementById("Q1").innerHTML="Q1 <br>" +  doubleArray +"<hr id='line'>" ;



  
  /*
   * Exercise 2 : 
   * 
   * Take an array of numbers and make them strings
   *
   * Test Case: 
   *
   * console.log(stringItUp([2, 5, 100]));
   * 
   * Result:
   * ["2", "5", "100"]
  */

 let arr1=[2, 5, 100];
console.log('\n Q2   stringItUp', arr1);
let conArray=arr1.map(function stringItUp(arr1){
  return arr1.toString();
  })
  console.log(conArray);
  document.getElementById("Q2").innerHTML="Q2 <br>" +  conArray +"<hr id='line'>" ;
 
  /*
   * Exercise 3:  
   * 
   * Capitalize each of an array of names
   *
   * Test Case: 
   *
   * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
   * 
   * Result:
   *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
  */


  let caparr= ["tamara", "enad", "shabatat", "orange"];
  console.log('\n Q3   stringItUp', caparr);
  let capital= caparr.map(function capitalizeNames(capital){

    return capital[0].toUpperCase() + capital.slice(1)
  })
  console.log(capital);
  document.getElementById("Q3").innerHTML="Q3 <br>" +  capital +"<hr id='line'>" ;


  /*
   * Exercise 4:  
   * 
   * Make an array of strings of the names
   *
   * Test Case: 
   *
   * console.log(namesOnly([
   *   {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   *   ])); 
   * 
   * Result:
   *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  */
  console.log('\n Q4   namesOnly');

  function namesOnly(arr) {
    return arr.map(element => { return element.name; });
  }
  var v=namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
    ]);
  console.log(v); 
    document.getElementById("Q4").innerHTML="Q4 <br>" +  v +"<hr id='line'>" ;



  /*
 * Exercise 5:  
 * 
 * Make an array of strings of the names saying whether or not they can go to The Matrix
 *
 * Test Case: 
 *
 * console.log(makeStrings([
 *    {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ]));  
 * 
 * Result:
 * 
 * ["Angelina Jolie can go to The Matrix", 
 * "Eric Jones is under age!!", 
 * "Paris Hilton is under age!!", 
 * "Kayne West is under age!!", 
 * "Bob Ziroll can go to The Matrix"]
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */
  console.log('\n Q5   MakeStrings');

function makeStrings(srtArray){
  srtArray.map(element=>{
    if(element.age > 20){
     let result= element.name += " can go to The Matrix ";
     console.log("[", result, "]");
    }
    else{
      let result= element.name += " is under age!!"
      console.log("[", result, "]");
    }
  });
  return srtArray.map(element=>element.name);
}
let vv=makeStrings([
  {
     name: "Angelina Jolie",
     age: 80   },
 {
     name: "Eric Jones",
     age: 2   },
 {
     name: "Paris Hilton",
     age: 5   },
 {
     name: "Kayne West",
     age: 16   },
 {
     name: "Bob Ziroll",
     age: 100
 }
 ]);
console.log(vv);
   document.getElementById("Q5").innerHTML="Q5 <br> [" +  vv + "]"+"<hr id='line'>" ;

/*
 * Exercise 6:  
 * 
 * Make an array of the names in h1s, and the ages in h2s
 *
 * Test Case: 
 *
 * console.log(readyToPutInTheDOM([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ])); 
 * 
 * Result:
 * 
 * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
 * "<h1>Eric Jones</h1><h2>2</h2>", 
 * "<h1>Paris Hilton</h1><h2>5</h2>", 
 * "<h1>Kayne West</h1><h2>16</h2>", 
 * "<h1>Bob Ziroll</h1><h2>100</h2>"]
 */
console.log('\n Q6   readyToPutInTheDOM');

function readyToPutInTheDOM(domarr){
  return domarr.map(element=>"<h1 class=h1def> "+element.name+" </h1><h2 class=h1def>"+element.age+"</h2>");
}
let vvv=readyToPutInTheDOM([
  {
      name: "Angelina Jolie",
      age: 80    },
  {
      name: "Eric Jones",
      age: 2    },
  {
      name: "Paris Hilton",
      age: 5    },
  {
      name: "Kayne West",
      age: 16    },
  {
      name: "Bob Ziroll",
      age: 100    }
]); 
console.log(vvv);
  document.getElementById("Q6").innerHTML="Q6 <br>" +  vvv + "<hr id='line'>" ;


/*
* Exercise 7:
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Cases:
*   Test Case 1:  doubleValues([1,2,3]) 
*   Test Case 2:  doubleValues([1,-2,-3])  
*
* Result:
* Test Case 1: [2,4,6] 
* Test Case 2: [2,-4,-6]
*/
let dbarr=[2, 5, 100];
console.log('\n Q7   doubleValues', dbarr);
let doubleval=dbarr.map(function doubleNumbers(dbarr){
    return dbarr*2
  })
  console.log(doubleval);
  document.getElementById("Q7").innerHTML="Q7 <br>" +  doubleval + "<hr id='line'>" ;

  /*
  * Exercise 8:
  * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
  *
  *
  * Test Cases :
  *   Test Case 1:  valTimesIndex([1,2,3])  
  *   Test Case 2:  valTimesIndex([1,-2,-3]) 
  * 
  * Result
  * Test Case 1: [0,2,6]
  * Test Case 2: [0,-2,-6]
  */
  console.log('\n Q8   valTimesIndex');

  let array =[1,-2,-3];
let item= array.map(function(v,index)
{  return v*index;
 }  )

console.log(item) ;

document.getElementById("Q8").innerHTML="Q8 <br>" +  item + "<hr id='line'>" ;


  /*
  * Exercise 9:
  * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
  * of that key in each object.
  * 
  * Test Case:
  * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
  * 
  * Result:
  * ['Elie', 'Tim', 'Matt', 'Colt']
  */
  console.log('\n Q9   extractKey');

  function extractKey(arr, key){
    var vvi=arr.map(element=>element[key]);
     
     return vvi
  }
  console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') );
    document.getElementById("Q9").innerHTML="Q9 <br>" +  extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')  + "<hr id='line'>" ;


  /*
  * Exercise 10:
  * Write a function called extractFullName which accepts an array of objects and returns a new array
  *  with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
  * 
  * Examples:
  * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
  */
  console.log('\n Q10   extractFullName');
let lastarr=[{first: 'Elie', last:"Schoppik"},
{first: 'Tim', last:"Garcia"}, 
{first: 'Matt', last:"Lane"},
{first: 'Colt', last:"Steele"}];

 function extractFullName(lastarr){
      return lastarr.map(element=>element.first+" "+element.last) 
 }
 console.log(lastarr.map(element=>element.first+" "+element.last) ); // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']);

      document.getElementById("Q10").innerHTML="Q10 <br>" +  lastarr.map(element=>element.first+" "+element.last) + "<hr id='line'>" ;
