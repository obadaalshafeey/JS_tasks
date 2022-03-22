'use Strict'
let stars= "";

for (let i=0; i<=5; i++){
   
    for ( let j=0; j<i; j++ ) {
        stars += " * ";   
      
    }
    stars += "\n";

}
console.log(stars);
let x= (alert(stars));

//  document.write(stars+ '\n');
