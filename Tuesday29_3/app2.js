'use strict';
let locform = document.getElementById("mobForm");
let pargloc =  document.getElementById("cityResult")




class showDataa {
    constructor(locat) {
        this.locat = locat;

        outputlocation(locat);

    }
}

async function outputlocation(city)
{
    let respone = await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.146180d54ef1b81b7922cf956cba402d&q=${city}&format=json`)
    let data = await respone.json()
  
   let res = document.createElement("span");
   pargloc.appendChild(res)

   let imgsrc = data[0].icon
//    console.log(imgsrc);
  document.getElementById("imag").src = `${imgsrc}`

   res.innerHTML= `<h4>Location Name: ${data[0].display_name}</h4>
   <h5>lot: ${data[0].lat}</h5>
   <h5>lon: ${data[0].lon}</h5>
  <h6>icon: ${data[0].imgsrc}</h4>    <hr>`
//    let imgsrc = data[0].icon
//    console.log(imgsrc);
//   document.getElementById("imag").src = `${imgsrc}`
    
    console.log(data);


}

locform.addEventListener("submit" , getfromform ) 
function getfromform(event) 
{
    event.preventDefault();

    let locat = event.target.locName.value ; 
    console.log(locat);
    new showDataa(locat)



}
// getfromform();