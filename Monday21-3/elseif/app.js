'use strict'
////////////////////////////////////////////////////////////////////////////////////////////
let stu_s = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

let avg = 0;
for (let x=0; x < stu_s.length; x++) {
     avg = avg + stu_s[x][1];
     avg = (avg / stu_s.length);
}
console.log("Your average Grade :");
// document.write((avg)/stu_s.length);

        if (avg <= 100) { console.log(" A 💯"); document.write(" Grade : A  💯");}       
   else if (avg <= 90)  { console.log(" B   "); document.write(" Grade : B  ");} 
   else if (avg <= 80)  { console.log(" C   "); document.write(" Grade : C  ");} 
   else if (avg <= 70)  { console.log(" D   "); document.write(" Grade : D  ");} 
   else if (avg <= 60)  { console.log(" F   "); document.write(" Grade : F  ");}

/////////////////////////////////////////////////////////////////////////////////////////////