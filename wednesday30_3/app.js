'use strict';
// 1- check if the name have just a letters.
// 2- determine the birth date input and check for it in the right way
// 3-check to the email structure by regular expression and if the structure have an error use  the Error handling 
// 4- check if the two emails are the same or not.
// 5- password :
// a- start with capital letter
// b- having at least two numbers
// c- at least one special character or symbol
// d- check if the pass confirmation is right
// e-password length should be between 8 and 32

let regform = document.getElementById("regform");
// let notifi = document.getElementsByClassName("notifi");  // 
let fname; 
let lname;
let bData; 
let email; 
let conEmail; 
let pass;
let conPass;

let userInfo=[];


function  startReg(){
    let fname = document.getElementById("fname").value; 
    let lname = document.getElementById("lname").value; 
    let bData = document.getElementById("birth").value; 
    let email = document.getElementById("email").value; 
    let conEmail = document.getElementById("cemail").value; 
    let pass    = document.getElementById("psw").value; 
    let conPass = document.getElementById("cpsw").value;

    var nptrn = /[A-Za-z]+$/;
    var pwptrn = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var emptrn = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var capital=/[A_Z]/;



        if(!nptrn.test(fname))
    {        alert('only alphabet characters');    }

    else if(!nptrn.test(lname))
    {        alert('only alphabet characters');    }

    else if (!emptrn.test(email))
    {        alert('Invalid email');    }

    else if (email != conEmail)
    {       alert('Email does not match');    }
    
    else if(!pwptrn.test(pass) && !capital.test(pass[0]))
    {
        alert (' 1-start with capital letter\n 2- at least two numbers\n 3-at least one special symbol \n 4-check if the pass confirmation is right \n 5-password length should be between 8 and 32');
    }
    else if(pass != conPass)
    {
        alert ('Password not Matched');
    }
    else if(document.getElementById("conPass").value.length < 7)
    {
        alert ('Password minimum length is 7');
    }
    else if(document.getElementById("conPass").value.length > 33)
    {
        alert ('Password max length is 32');
    }
    else
    {                                           
           alert('Thank You for Registration ');
           window.location = ""; 
    }


    userInfo.push(fname,lname,email,bData);
    storeInLocalStorage();
    
}


function storeInLocalStorage(){
    let stringArray=JSON.stringify(regform);
    // console.log(regform);
    localStorage.setItem("data1",stringArray);
}

function callFromLocalStorage(){
    let dataObj=localStorage.getItem("data");
    // console.log(data);

    let arrayString=JSON.parse(dataObj);
    // console.log(arrayString,"arrayString");
    if(arrayString != null){
        regform=arrayString;
      
    }
}

/************************************************************************* */



