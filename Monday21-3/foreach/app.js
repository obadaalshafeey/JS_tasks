'use Strict'
//////////////////////////////////////////////////////////// doubleValues
function doubleValues(arr){
    let newArr = [];
    arr.forEach((val) => {
        newArr.push(val * 2);
    });
    return newArr;
}
console.log('[1,2,3,4]');
console.log(doubleValues([1,2,3,4]));

document.write('[1,2,3,4] <br>');
document.write(doubleValues([1,2,3,4]));

///////////////////////////////////////  onlyEvenValues
function even(arr){
  let arr2 = [];
    arr.forEach((val) => {
      if(val % 2 === 0) arr2.push(val);
    });
    return arr2;
}
console.log('\n\n [5,1,2,3,10,23,34]');
console.log(even([5,1,2,3,10,23,34]));

document.write(' <br> [5,1,2,3,10,23,34] <br>');
document.write(even([5,1,2,3,10,23,34]));

//////////////////////////////////////// showFirstAndLast
function showFirstAndLast(arr) {
    let arrFL = [];
    arr.forEach(function(val) {
      arrFL.push(val[0] + val[val.length - 1]);
    });
    return arrFL;
  }
  console.log("\n ['colt','matt', 'tim', 'udemy', 'tamara']");
  console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy', 'tamara']) );

  document.write(" <br> ['colt','matt', 'tim', 'udemy', 'tamara'] <br>");
  document.write(showFirstAndLast(['colt','matt', 'tim', 'udemy', 'tamara']) );

 ////////////////////////////////////////
/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 
Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*/
function addKeyAndValue(arr,key,value){
    let arradd = [];
    arr.forEach(function(val) {
      arradd.push(val[0] + val[val.length - 1]);
    });
    return arradd;
  }
  console.log("\n [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')");
  console.log(addKeyAndValue([{title: 'instructor'}]));

///////////////////////////////////////
/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
// function vowelCount(string){
   
// }

///////////////////////////////////////////////