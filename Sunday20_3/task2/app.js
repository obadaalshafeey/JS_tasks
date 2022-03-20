let day=Number(prompt("Enter a number from 1 to 7"));

switch (day) {
    case 1:
        day = "Sunday" ;
        msg=(alert("The Today is a  " + day)); 
        console.log("The Today is a  " + day);
        document.write("<h1>" + day +"</h1>");
      break;
    case 2:
      day = " Monday";
      msg=(alert("The Today is a  " + day)); 
      console.log("The Today is a  " + day);
      document.write("<h2>" + day +"</h2>");
      break;
    case 3:
       day = "Tuesday";
       msg=(alert("The Today is a  " + day)); 
       console.log("The Today is a  " + day);
       document.write("<h3>" + day +"</h3>");
      break;
    case 4:
      day = "Wednesday";
      msg=(alert("The Today is a  " + day)); 
      console.log("The Today is a  " + day);
      document.write("<h4>" + day +"</h4>");
      break;
    case 5:
      day = "Thursday";
      msg=(alert("The Today is a  " + day)); 
      console.log("The Today is a  " + day);
      document.write("<h4>" + day +"</h4>");
      break;
    case 6:
      day = "Friday";
      msg=(alert("The Today is a  " + day)); 
      console.log("The Today is a  " + day);
      document.write("<h3>" + day +"</h3>");
      break;
    case 7:
      day = "Saturday";
      msg=(alert("The Today is a  " + day)); 
      console.log("The Today is a  " + day);
      document.write("<h1>" + day +"</h1>");
      break;
    default:
        day ="try agin enter number 1-7"
        msg=(alert(day)); 
        console.log(day);
        document.write("<h5>" + day +"</h5>");
  }