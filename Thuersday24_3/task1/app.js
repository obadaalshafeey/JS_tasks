'use strict'; 

var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];
/*
1Create an object represents you have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/
document.getElementById("start").innerHTML="Full Reslut in console <br> <hr id='line'>";


let  tam = {
    Fname: "Tamara",
    Lname: "Shabatat",
    age: 28,
    dob: "1993-june-12",
    favFood: ["Mandi ", " pizza ", " sea food"],
    favMovie: ["Mr. Robot ", " Passengers ", " Mesh Ana"]
  };
  console.log ('Q1 Info. about Tamara', tam , '\n') ;

  let tama= { info: { first: 'tamara', last: 'Shabatat' }, age: 28,  dob: "1993-june-12", favoriteFood: ["Mandi", "pizza", "sea food"],
  favoriteMovie: ["Mr. Robot", "Passengers", "Mesh Ana"] };

console.log(tama);
document.getElementById("p1").innerHTML="Q1<br>My name  " + tam.Fname + "  " + tam.Lname +'<br>' + '  I`m  ' + tam.age + '  my birthd  '+ tam.dob + '<br>  I love to eat  ' + tam.favFood   + '<br>' + '   I watch this movies  ' + tam.favMovie  +"<hr id='line'>";
  
  /*  2  Using the varabile persons   Create a function called firstName   that accept an object
  and return all the first name of the person insides  
  Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
  */

function fname() 
 {  var array = [];
    for (let i = 0; i < persons.length; i++) {
      array.push(persons[i].name.first);
    }
    return array;  
  }
  console.log('Q2 \n',  fname(persons));
  document.getElementById("p2").innerHTML="Q2<br>" +  fname(persons) +"<hr id='line'>";
  
    /*  3
  Using the varabile persons   Create a function called averageAge
  that accept an object   and return the average age of those persons
  Ex: averageAge(persons) => 41.2
  */

function average(x) {
    var result = 0;
    for (var i = 0; i < x.length; i++) {
      result = result + x[i].age;
    }
    var last= result / x.length;
    return last;
  }
  console.log('Q3 \n', average(persons));
  document.getElementById("p3").innerHTML="Q3<br>" +  average(persons) +"<hr id='line'>" ;

  
  /*
  4   Using the varabile persons   Create a function called olderPerson
  that accept an object   and return the full name of the older person
    Ex: olderPerson(persons) => "Soso Al-Amora"
  */
  

  function olderPerson(x) {
    var maxAge = x[0].age;
    var index = 0;
    for (var i = 1; i < x.length; i++) {
      if (maxAge < x[i].age) {
        maxAge = x[i].age;
        index = i;
      }
    }
    return x[index].name.first + " " + x[index].name.last;
  }
  console.log('\n Q4    olderPerson \n', olderPerson(persons));
  document.getElementById("p4").innerHTML="Q4  olderPerson <br>" +  olderPerson(persons) +"<hr id='line'>" ;

 
  /*  5  Using the varabile persons   Create a function called longestName   that accept an object
  and return the full name of the person have longest full name   
  Ex: longestName(persons) => "Soso Al-Amora"
  */
  
  function longestName(x) {
      var max = (x[0].name.first + x[0].name.last).length;
    var loo = 0;
    for (var i = 1; i < x.length; i++) {   // x.length-1
        
      if (max < (x[i].name.first + x[i].name.last).length) {
        max = (x[i].name.first + x[i].name.last).length;
        loo = i;
      }
    }
    return x[loo].name.first + " " + x[loo].name.last;
  }
  console.log('\n  Q5  longestName \n', longestName(persons));
  document.getElementById("p5").innerHTML="Q5    longestName  <br>" +  longestName(persons) +"<hr id='line'>" ;
  ///.length

  /*  6  Using the varabile persons  Create a function called longestName
  that accept an object   and return the full name of the person have longest full name
  
  Ex: longestName(persons) => "Soso Al-Amora"
  */  
  //////////////////////////////////////////////////////////////////
  
  /*
  7  Create a function called repeatWord  that accept a string  and return an object that represents how many times each word repeat
  ** no matter it is upper case or lower case  ** Search on MDN about something can cut the string to words??
    Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
  => {
    my:1,
    name:2,
    is:1,
    alex:1,
    mercer:1,
    class:1,
    b:1,
    baba:1,
    mama:1,
    hello:3
  }
  */
    
var str="My name is alex mercer class name B baba mama hello Hello HELLO";
var word=str.toLowerCase();
// console.log(word);
function repeatWord(word) {
    var arr = word.split(' ');
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) {
        obj[arr[i]] += 1
      } else {
        obj[arr[i]] = 1
      }
    }
    return obj;
  } 
//   let word =repeatWord(word);
  console.log('\n  Q7  repeatWord \n', repeatWord(word));
  document.getElementById("p7").innerHTML="Q7    repeatWord  <br>"+   repeatWord(word) +"<hr id='line'>" ;

  /*
  8
  Create a function called repeatChar
  that accept a string   and return an object that represents how many times each char repeat
  ** no matter it is upper case or lower case   ** Search on MDN about something can cut the string to char??

  Ex: repeatChar("mamababatetacedo")
  => { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
  */
  var char="mamababatetacedo";
  var after = '';
  
  for(var i=0; i<char.length; i++){
     after += char.charAt(i) + ' ';     
  }
var space =after.toLowerCase();
  function repeatChar(space) {
    var arr = space.split(' ');
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) {
        obj[arr[i]] += 1
      } else {
        obj[arr[i]] = 1
      }
    }
    // var strobj=json.stringify(obj)
    return obj;
  }
  console.log('\n  Q8  repeatChar \n', repeatChar(space));
  document.getElementById("p8").innerHTML="Q8    repeatChar  <br>" +  repeatChar(space) +"<hr id='line'>" ;
//   document.getElementById("p7").innerHTML= repeatChar(char)


/*
  9
  Create a function called selectFromObject   that accept an object and an array   and return an object have the key that inside the array
  Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
  =>  {a: 1, cat: 3}
  */
  var obj= {a: 1, cat: 3};
  var arr= ['a', 'cat', 'd'];
  function selectFromObject(obj, arr) {
    var result = {}
    for (var i = 0; i < arr.length; i++) {
      if (obj[arr[i].toLowerCase()]) {
        result[arr[i].toLowerCase()] = obj[arr[i].toLowerCase()]
      }
    }
    return result;
  }

  console.log('\n  Q9  selectFromObject \n', selectFromObject(obj, arr));
  document.getElementById("p9").innerHTML="Q9    select  <br>" + selectFromObject(obj.a, arr[0]) +"<hr id='line'>" ;
  
  
  /*
  10
  Create a function called objectToArray
  that accept an object
  and return an array of the keys and values in this object
  
  Ex: objectToArray({firstName:"Moh",age:24})
  => ["firstName","Moh","age",24]
  */
  
  var obj={
      firstName:"Moh",
      age:24
    }

  function objectToArray(obj) {
    var result = [];
    for (var key in obj) {
      result.push(key)
      result.push(obj[key])
    }
    return result;
  }

console.log('\n  Q10 objectToArray \n', objectToArray(obj));
  document.getElementById("p10").innerHTML="Q10    objectToArray  <br>" + objectToArray(obj) +"<hr id='line'>" ;



  
  /*
  11
  Create a function called arrayToObject
  that accept an array
  and return an object of the keys and values in this object
  
  Ex: arrayToObject(["firstName","Moh","age",24])
  => {firstName:"Moh",age:24}
  */
  var arr=["firstName","Moh","age",24];

  function arrayToObject(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i += 2) {
      obj[arr[i]] = arr[i + 1];
    }
    return obj;
  }

  console.log('\n  Q11  arrayToObject \n', arrayToObject(arr));
  document.getElementById("p11").innerHTML="Q11    select  <br>" + arrayToObject(arr) +"<hr id='line'>" ;
  
  /*
  12
  Create a function called onlyNumber   that accept an object
  and return a new object that have only the values that is a number
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {age:24}
  */
  var obj={firstName:"Moh",
            age:24,
            movies:[1,5,"string"]}

  function onlyNumber(obj) {
    var show = {}
    for (var x in obj) {
      if (typeof obj[x] === "number") {
        show[x] = obj[x];
      }
    }
    return show;
  }
//   var comment=onlyNumber(obj);
  console.log('\n  Q12 onlyNumber \n', onlyNumber(obj));
  document.getElementById("p12").innerHTML="Q12    onlyNumber  <br>" + onlyNumber(obj) +"<hr id='line'>" ;
//   document.getElementById("p12").value = comment;
  
  /*/////////////////////////////////
  13
  Create a function called onlyString   that accept an object
  and return a new object that have only the values that is a string
  **hint: search in MDN how to know the type of variable
  Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {firstName:"Moh"}
  */
  var obj = {
      firstName:"Moh",
      age:24,
      movies:[1,5,"string"]};

  function onlyString(obj) {
    var show = {}
    for (var i in obj) {
      if (typeof obj[i] === "string") {
        show[i] = obj[i];
      }
    }
    return show;
  }
  
  console.log('\n  Q13 onlyString \n', onlyString(obj));
  document.getElementById("p13").innerHTML="Q13    onlyString  <br>" + onlyString(obj) +"<hr id='line'>" ;

  /*////////////////////////////////
  14
  Create a function called onlyArray   that accept an object
  and return a new object that have only the values that is a array
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {movies:[1,5,"string"]}
  */
  var obj={
      firstName:"Moh",
      age:24,
      movies:[1,5,"string"]}

  function onlyArray(obj) {
    var show = {}
    for (var i in obj) {
      if (Array.isArray(obj[i])) {
        show[i] = obj[i];
      }
    }
    return show;
  }
  console.log('\n  Q14 onlyArray \n', onlyArray(obj));
  document.getElementById("p14").innerHTML="Q14    onlyArray  <br>" + onlyArray(obj) +"<hr id='line'>" ;

  /*
  15   Create a function called keysArray   that accept an object
  and return an array have the key inside this object
  Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => ['firstName', 'age', 'movies']
  */
  
  var obj={firstName:"Moh",
           age:24,
           movies:[1,5,"string"]}

  function keysArray(obj) {
    var show = [];
    for (var i in obj) {
      show.push(i);    }
    return show;
  }
  console.log('\n  Q15  keysArray \n', keysArray(obj));
  document.getElementById("p15").innerHTML="Q15    keysArray  <br>" + keysArray(obj.movies) +"<hr id='line'>" ;




  