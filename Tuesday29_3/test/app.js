'use strict';
let mobail = document.getElementById("mobForm");
let theadItem = document.getElementById("headTa");
let tbodyItem = document.getElementById("boadTa");
let pargloc =  document.getElementById("cityResult")

let userInfo = [];      // First Step

 function storeInLocalStorage() {
     let stringArray = JSON.stringify(userInfo);
     localStorage.setItem("data", stringArray);
 }
 renderOrder();
//  function callFromLocalStorage() {
//      let dataObj = localStorage.getItem("data");
//      let mobArray = JSON.parse(dataObj);
//     //  console.log(mobArray, "test");
//      if (mobArray != null) {
//          userInfo = mobArray;
//         // renderOrder(); 
//     }
//      renderOrder();
//  }
//  callFromLocalStorage();
/************************************************************* */
function userData(useName, typeNameD, loccation) {
    this.useName = useName;
    this.typeNameD = typeNameD;
    // this.price = price(50, 600);
    this.price = Math.floor(Math.random() * (600 - 50 ) + 50);
        let state;
         if(this.price <= 100){
                     state= "used";
                    } 
                    else {
                    state= "New Device";
                    };
     this.state =state;
     this.loccation = loccation;
    


    userInfo.push(this);
    renderOrder();
    storeInLocalStorage();
    console.log(userInfo);
}
/*************************************************************** */
function price(min,max){
    return Math.floor(Math.random() * (max - min) + min);
   }

/************************************************************* */ 
async function outputlocation(x)
{
    var respone = await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.146180d54ef1b81b7922cf956cba402d&q=${x}&format=json`)
    var data = await respone.json()
   
//    var createname = document.createElement("span");
   pargloc.appendChild(createname)
//    createname.innerHTML= `Location Name: ${data[0].display_name} <br>   lot: ${data[0].lat}   lon: ${data[0].lon}   <br>`;
   var imgsrc = data[0].icon
   console.log(imgsrc);
//    document.getElementById("imgg").src = `${imgsrc}`
    
    console.log(data);

}
/************************************************************ */
mobail.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    // event.preventDefault();
    let useName = event.target.useName.value;
    console.log(useName);

    let typeNameD = event.target.typeNameD.value;
    console.log(typeNameD);

    let loccation = event.target.locName.value ; 
    console.log(loccation);


new userData(useName, typeNameD, loccation);
console.log(userData);
}  
handleSubmit();        // Second Step
/*********************************************************** */


function renderOrder() {      
    tbodyItem.textContent= " ";
    
    for (let i = 0; i < userInfo.length; i++) {
    let trRow = document.createElement("tr");
    let tdData1 = document.createElement("td");
    let tdData2 = document.createElement("td");
    let tdData3 = document.createElement("td");
    let tdData4 = document.createElement("td");

    let tdData11 = document.createElement("td");
    let tdData12 = document.createElement("td");
    let tdData13 = document.createElement("td");
    let tdData14 = document.createElement("td");

        tbodyItem.appendChild(trRow);
        trRow.appendChild(tdData1);
        trRow.appendChild(tdData2);
        trRow.appendChild(tdData3);
        trRow.appendChild(tdData4);

        trRow.appendChild(tdData11);
        trRow.appendChild(tdData12);
        trRow.appendChild(tdData13);
        trRow.appendChild(tdData14);

        tdData1.textContent = userInfo[i].useName;
        tdData2.textContent = userInfo[i].typeNameD;
        tdData3.textContent = userInfo[i].price;
        tdData4.textContent = userInfo[i].state;

        tdData11.textContent = userInfo[i].data[0].lon;
        tdData12.textContent = userInfo[i].data[0].lat;
        tdData13.textContent = userInfo[i].data[0].display_name;
        tdData14.textContent = userInfo[i].imgsrc; }

document.getElementById("headTa").style.color = "blue";
    }
// function addTable() {
//     var c, r, t;
//     t = document.createElement('table');
//     r = t.insertRow(0); 
//     c = r.insertCell(0);
//     c.innerHTML = 123;
//     c = r.insertCell(1);
//     c.innerHTML = 456;
//     document.getElementById("addtable").appendChild(t);
// }


// function conditon() {
//     
//     if (price <= 100) {
//         return "used Mobile";
//     }
//     else {
//         return "new Mobile";
//     }
// }
