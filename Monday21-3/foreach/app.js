'use Strict'
//////////////////////////////////////////////////////////// doubleValues 1
document.write("<h1>Solutions in console part</h1><br>");
function doubleValues(arr){
    let newArr = [];
    arr.forEach((val) => {
        newArr.push(val * 2);
    });
    return newArr;
 
}  console.log("Q1  doubleValues array =[5,1,2,3,10]", doubleValues([5,1,2,3,10]));
// document.write('[1,2,3,4] <br>');
// document.getElementById("p1").innerHTML="Q1  doubleValues <br>" + doubleValues([5,1,2,3,10]) +"<hr id='line'>";

///////////////////////////////////////  onlyEvenValues  2
function even(arr){
  let arr2 = [];
    arr.forEach((val) => {
      if(val % 2 === 0) arr2.push(val);
    });
    return arr2;
}
 console.log('\n Q2 even array=[5,1,2,3,10,23]');
 console.log(even([5,1,2,3,10,23]));

// document.write(' <br> [5,1,2,3,10,23,34] <br>');
// document.write(even([5,1,2,3,10,23,34]));

//////////////////////////////////////// showFirstAndLast  3
function showFirstAndLast(arr) {
    let arrFL = [];
    arr.forEach(function(val) {
      arrFL.push(val[0] + val[val.length - 1]);
    });
    return arrFL;
  }
  console.log("\n Q3 array=['colt','matt', 'tim', 'udemy', 'tamara']");
  console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy', 'tamara']) );

  // document.write(" <br> ['colt','matt', 'tim', 'udemy', 'tamara'] <br>");
  // document.write(showFirstAndLast(['colt','matt', 'tim', 'udemy', 'tamara']) );

 ////////////////////////////////////////    4
/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 
Examples:     addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*/
function addKeyAndValue(arr, key, value) {
  arr.forEach(function(val) {
    val[key] = value;
  });
  return arr;
}
  console.log("\n Q4 addKeyAndValue [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') \n");
  console.log("\n",addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}, {title: 'instructor'}]));
  // console.log(addKeyAndValue [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}, {title: 'instructor'}]);


///////////////////////////////////////   5
/*Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
 function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }
  console.log("\n Q5" , vowelCount('I Am awesome and so are you'));
////////////////////////////////////////////////

