'use strict'

// const input = document.querySelector( 'input' );
// const msg   = document.querySelector( '.msg' );
// const pttn = /^\d+(\d+)?(\d+(\d+)?)*$/;

// input.addEventListener( 'keyup', function ( e ) {
//   const str = pttn.test( this.value ) ? 'Match!' : 'No Match';
//   msg.textContent = str;
// } );

// valid string
var mail = "test@just.com.edu";

console.log( mail.search( /\.jo$/ ) ); // search for .jo if it alst word
console.log( mail.search( /\.com$/ ) ); // search for .jo if it alst word

if ( mail.search( /\.edu$/ ) == -1 ) {   // search for .edu if it alst word
    console.log ("Not a .edu address");
}
else {console.log ("your address correct");}

//////////////////////////////////////////////
//valid number
var phone = "559-555-6602"; 
console.log(phone);

var phonePattern = /\d{3}-\d{3}-\d{4}$/;

if ( phone.match(phonePattern) ) {
 console.log("valid phone ");
}
else{
console.log("Invalid phone number");
}
////////////////////////////////////////////////







// var email= "test@orange.com";
// var isEmail = function valid(email) {
//     if (email.length == 0) 
//     return false;
//     console.log(valid("test@orange.com"));

//     var parts = email.split("@");
//     if (parts.length != 2 ) 
//     return false;
//     console.log("false");

//     // if (parts[0].length > 64) 
//     // return false;
//     // if (parts[1].length > 255) 
//     // return false;
   
//     var address =
//     "(^[\\w!#$%&'*+/=?^`{|}~-]+(\\." +
//     "[\\w!#$%&'*+/=?^`{|}~-]+)*$)";
//     var quotedText =
//     "(^\"(([^\\\\\"])|(\\\\[\\\\\"]))+\"$)";
//     var localPart = new RegExp(
//     address + "|" + quotedText );
//     if ( !parts[0].match(localPart) ) 
//     return false;
//     console.log("false");

    
//     var hostnames = "(([a-zA-Z0-9]\\.)|" + "([a-zA-Z0-9][-a-zA-Z0-9]{0,62}[a-zA-Z0-9]\\.))+";
//     var tld = "[a-zA-Z0-9]{2,6}";
//     var domainPart = new RegExp(
//     "^" + hostnames + tld + "$");

//     if ( !parts[1].match(domainPart) ) console.log("false"); console.log("true");
    
  
    // return false;
// return true;
// }  

















/// Single character escape sequences
// console.log("Hello\nWorld");     //new line
// console.log("Hello\tWorld");    //horiz. tab
// console.log("Hello\bWorld");    //backspace
// console.log("Hello\vWorld");    //vertical tab
// console.log("Hello\fWorld");    // form feed
// console.log("Hello\rWorld");    //	carriage return
// console.log("Hello\0World");    //	null character
// console.log("H\'ello  \"World \\ are you okay \?");    

//////// Hexadecimal escape sequences
//\x is followed by the 2-digit hexadecimal character code
// console.log("ONE \x46 LINE");


////////////////////////////// 
//new RegExp(pattern[, flags]       syntax
/////////////////////////        test
// var regex = /hello/;
// var str = 'hello world';
// var result = regex.test(str);
// console.log(result);
/////////////////////////////   exec
// var regex = /hello/;
// var str = '\thello world';
// var result = regex.exec(str);
// console.log(result);
// // returns [ 'hello', index: 0, input: 'hello world', groups: undefined ]
// // 'hello' -> is the matched pattern.
// // index: -> Is where the regular expression starts.
// // input: -> Is the actual string passed.
// //////////////////////////
// var regex = /hello/;
// console.log(regex.test('hello world'));
// // true
////////////////////////////////
