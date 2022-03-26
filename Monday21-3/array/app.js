'use strict'
///////////////////////////////////////////////////////////////////////////////////////////////
// console.log ('Here is : ', 'array')
document.write("<h1>Solutions in console part</h1>");
////////////////////          1   
console.log ('Q1 Here is  wrong array [ 1,7  9  45, ]') ; document.write('<h4>Here is  wrong array [ 1,7  9  55, ] </h4>');
console.log ('Here is correct array [ 1, 7, 9, 45 ]'); document.write ('<h3>Here is correct array [ 1, 7, 9, 35 ]</h3>');
console.log ('\n');
console.log ('Here is  wrong array ["Str" "alex","moh" '); document.write ('<h4>Here is  wrong array ["Str" "alex","moh" </h4>');
console.log ('Here is correct array ["Str","alex","moh"] '); document.write ('<h3>Here is correct array ["Str","alex","moh"] </h3>');
console.log ('\n'); 
console.log ("Here is  wrong array  'the', 'fox' 'over' lazy, 'dog',  ] "); document.write ("<h4>Here is  wrong array  'the', 'fox' 'over' lazy, 'dog',  ] </h4>");
console.log ("Here is correct array  ['the', 'fox' , 'over' , lazy, 'dog' ] "); document.write ("<h3>Here is correct array  ['the', 'fox' , 'over' , lazy, 'dog' ] </h3>");
console.log ('\n'); document.write('<hr class="line">');

/////////////////////          2
console.log('Q2 What is the index of "Banana", Tomato"  var fruits=["Tomato","Banana","Watermelon"]');  document.write('<h4>What is the index of  "Banana", Tomato" <br> var fruits=["Tomato","Banana","Watermelon"]</h4>' ); 
console.log('Banana is [1]  ,  Tomato is [2]');  document.write('<h3>Banana is [1]  ,  Tomato is [2] </h3>' ); 
console.log ('\n'); document.write('<hr class="line"> ');
////////////////////////       3
console.log ('Q3 Create an array represents your:' +'\n' + '1- Favorite Food (5)   2- Favorite Sport (3)  3- Favorite Movie (4)');
document.write('<h4>Create an array represents your:</h4>'+' 1- Favorite Food (5)' +'<br>' + ' 2- Favorite Sport (3)' +'<br>' + '3- Favorite Movie (4)' +'<br>');
console.log ('let myfavfood = ["Mandi", "pizza", "Waffles" , "sea food", "grape leaves"];  let myfavsport = ["Badminton", " Volleyball", " horse riding"];  let myfavmovie = ["Mr. Robot", "Passengers", "Mesh Ana", "A beautiful mind" ]' + ";");
document.write('<p class="fav">1- let myfavfood = ["Mandi", "pizza", "Waffles", "sea food", "grape leaves"]; <br> 2- let myfavsport = ["Badminton", " Volleyball", " horse riding"]; <br> 3- let myfavmovie = ["Mr. Robot", "Passengers", "Mesh Ana", "A beautiful mind" ]; </p>' );
console.log ('\n'); document.write('<hr class="line">');

////////////////////////////    4
console.log ('Q4  Create a function called firstOfArray that take an array as a parameter and return the first element in an array');
document.write('<h4>Create a function called firstOfArray that take an array as a parameter and return the first element in an array  Ex: firstOfArray([1,4,5]) => 1 Ex: firstOfArray(["t","u","g","x"]) => "t" + ";");</h4>');
let firstOfArray= ["t","u","g","x"] ;
console.log (  firstOfArray[0] );
document.write ('<h3>'+ firstOfArray[0] +'</h3>');
console.log ('\n'); document.write('<hr class="line">');

////////////////////////////      5
function lastOfArray(array) {
  return array[array.length - 1];
}
console.log ('Q5', lastOfArray(["t","u","g","x"])); 
console.log ('\n')
////////////////////////////   6 
var array = [0,5,7,9]
console.log('Q6', array);
array.push(100);
console.log('push 100' , array);
array.shift();
console.log('shift' , array);
array.unshift(99);
console.log('unshift' , array);
array.pop();
console.log('pop' , array,);
console.log ('\n')
////////////////////////////    7
var array2 = [5,9,-7,3.5]
console.log('Q7', array2);
array2.push(-10);
console.log('push 100' , array2);
array2.shift();
console.log('shift' , array2);
array2.unshift(99);
console.log('unshift' , array2);
array2.pop();
console.log('pop' , array2,);
console.log ('\n')
//////////////////////////////  8
function middleOfArray(array) {
  var length = array.length;
  if (length % 2 !== 0) {
    return array[(length - 1) / 2]
  }
  return (array[length / 2 - 1] + " and " + array[length / 2])
}
console.log('Q8' ,middleOfArray(["t","u","g","x"]));
console.log ('\n')
////////////////////////////////  9
var animals = ['cat', 'ele', 'bird']
console.log('Q9' , animals);
animals[0] = 'zebra';
animals[1] = 'elephant';
animals.length = 2;
console.log( animals);
var nums = [1, 2, 3, 8, 9];
console.log(nums);
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44;
console.log(nums);
console.log ('\n')
/////////////////////////////////////     10
function indexOfArray(array, x) {
  return array[x];
}
var nums= [1,2,3,8,9];
console.log('Q10', indexOfArray(nums,3)); 
console.log ('\n')
/////////////////////////////////////     11
function arrayExceptLast(array) {
  return array.slice(0, array.length - 1)
}
console.log('Q11  array=[1,2,3,8,9]', arrayExceptLast([1,2,3,8,9])); 
console.log ('\n')
/////////////////////////////////////     12
function addToEnd(array, element) {
  array.push(55)
  return array
}
console.log('Q12  array=[1,2,3,8,55]', arrayExceptLast( [1,2,3,8,55])); 
console.log ('\n')
/////////////////////////////////////     13
function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log('Q13 using for loop array= [1,2,3,8,9] \n', sumArray(  [1,2,3,8,9])); 
function sumArray2(array) {
  var sum = 0;
  var i = 0;
  while (i < array.length) {
    sum = sum + array[i];
    i++;
  }
  return sum;
}
console.log('   using while loop array= [1,2,3,8,9] \n', sumArray(  [1,2,3,8,9])); 
console.log ('\n')

/////////////////////////////////////     14
function minInArray(array) {
  var min = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
console.log('Q14 using for loop array= [1,2,3,8,9] \n', minInArray(  [1,2,3,8,9])); 
function minInArray2(array) {
  var min = array[0];
  var i = 1;
  while (i < array.length) {
    if (array[i] < min) {
      min = array[i];
    }
    i++;
  }
  return min;
}
console.log('   using while loop array= [1,2,3,8,9] \n', minInArray(  [1,2,3,8,9])); 
console.log ('\n')
/////////////////////////////////////     15
function removeFromArray(array, y) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === y)
      array.splice(i, 1);
  }
  return array;
}
console.log('Q15 using for loop array= [1,2,3,8,9] \n', removeFromArray([1,2,3,8,9],8)); 
function removeFromArray2(array, element) {
  var i = 0;
  while (i < array.length) {
    if (array[i] === element) {
      array.splice(i, 1);
    }
    i++;
  }
  return array;
}
console.log('   using while loop array= [1,2,3,8,9] \n', removeFromArray(  [1,2,3,8,9],8)); 
console.log ('\n')

/////////////////////////////////////     16
function oddArray(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log('Q16 using for loop array= [1,2,3,8,9] \n', oddArray([1,2,3,8,9])); 

function oddArray2(array) {
  var result = [];
  var i = 0;
  while (i < array.length) {
    if (array[i] % 2 === 1) {
      result.push(array[i]);
    }
    i++;
  }
  return result;
}
console.log('   using while loop array= [1,2,3,8,9] \n', oddArray(  [1,2,3,8,9])); 
console.log ('\n')


/////////////////////////////////////     17
function aveArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
}
console.log('Q17 using for loop array= [1,2,3,8,9] \n', aveArray([1,2,3,8,9])); 
function aveArray2(array) {
  var sum = 0;
  var i = 0;
  while (i < array.length) {
    sum = sum + array[i];
    i++;
  }
  return sum / array.length;
}
console.log('  using while loop array= [1,2,3,8,9,77] \n', aveArray([1,2,3,8,9,77])); 
console.log ('\n')
/////////////////////////////////////     18

function shorterInArray(array) {
  var shortest = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length < shortest.length) {
      shortest = array[i];
    }  }
  return shortest;
}
console.log('Q18 using for loop array= ["alex","mercer","madrasa","rashed2"] \n', shorterInArray(["alex","mercer","madrasa","rashed2"])); 
function shorterInArray2(array) {
  var shortest = array[0];
  var i = 0;
  while (i < array.length) {
    if (array[i].length < shortest.length) {
      shortest = array[i];
    }
    i++;
  }
  return shortest;
}
console.log('   using while loop array=["alex","mercer","madrasa","rashed2"] \n', shorterInArray(["alex","mercer","madrasa","rashed2"])); 
console.log ('\n')

/////////////////////////////////////     19
var srt="tamara";
var char ='t';
function repeatChar(str, chr) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === chr) {
      count++;
    }
  }
  return count;
}
console.log("Q19 using for loop 'Tamara', 't' \n", repeatChar("tamara", 't')); 

function repeatChar2(str, chr) {
  var count = 0;
  var i = 0;
  while (i < str.length) {
    if (str[i].toLowerCase() === chr.toLowerCase()) {
      count++;
    }
    i++;
  }
  return count;
}

console.log("  using while loop 'Tamara', 't' \n", repeatChar(repeatChar("tamara", 't'))); 
console.log ('\n')
/////////////////////////////////////     20
function evenIndexOddLength(array) {
  var result = [];
  for (var i = 0; i < array.length; i = i + 2) {
    if (array[i].length % 2 === 1) {
      result.push(array[i])
    }
  }
  return array;
}
console.log('Q20 using for loop array=["alex","mercer","madrasa","rashed2","emad","hala"] \n', evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"])); 

function evenIndexOddLength2(array) {
  var result = [];
  var i = 0;
  while (i < array.length) {
    if (array[i].length % 2 === 1) {
      result.push(array[i])
    }
    i = i + 2;
  }
  return result;
}
console.log('  using while loop array=["alex","mercer","madrasa","rashed2","emad","hala"] \n', evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"])); 
console.log ('\n')
/////////////////////////////////////     21
function powerElementIndex(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result[i] = array[i] ** i;
  }
  return result;
}
console.log('Q21 using for loop array=[44, 5, 4, 3, 2, 10] \n', powerElementIndex([44, 5, 4, 3, 2, 10])); 
function powerElementIndex2(array) {
  var result = [];
  var i = 0;
  while (i < array.length) {
    result[i] = array[i] ** i;
    i++;
  }
  return result;
}
console.log('   using while loop array=[44, 5, 4, 3, 2, 10] \n', powerElementIndex([44, 5, 4, 3, 2, 10],8)); 
console.log ('\n')
/////////////////////////////////////     22
function evenNumberEvenIndex(array) {
  var result = [];
  for (var i = 0; i < array.length; i = i + 2) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log('Q22 using for loop array=[5,2,2,1,8,66,55,77,34,9,55,1] \n',evenNumberEvenIndex([5,2,2,1,8,66,55,77,34,9,55,1])); 

function evenNumberEvenIndex2(array) {
  var result = [];
  var i = 0;
  while (i < array.length) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
    }
    i = i + 2;
  }
  return result;
}
console.log('   using while loop array=[5,2,2,1,8,66,55,77,34,9,55,1] \n',evenNumberEvenIndex(  [5,2,2,1,8,66,55,77,34,9,55,1])); 
console.log ('\n')
