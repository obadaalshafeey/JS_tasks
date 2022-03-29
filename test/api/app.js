'use strict';


async function getData(){
  let responce= await fetch('https://us1.locationiq.com/v1/search.php?key=pk.1c62673f07cb0215b7ff37282ecbeafe&q=aqaba&format=json')
  console.log(typeof responce);
  let data=await responce.json()
  console.log(data);

let locat=data.map(function(v,index) {
    
    return `<h3>latitude</h3> <li class="none"> ${v.lat}</li>
     <h3>Longitude</h3><li class="none"> ${v.lon}</li>
    <h3>display_name</h3><li class="none"> ${v.display_name.split(",", 2)}</li>  `
    // .slice(3)
});

  console.log(locat);
  
let g= document.getElementById("api");
let c= document.createElement("p");
g.appendChild(c).innerHTML=locat

//   document.write(Dd);
}
getData()

// console.log("get data out side the function");



// async function getData(){
//   let responce= await fetch('https://us1.locationiq.com/v1/search.php?key=pk.1c62673f07cb0215b7ff37282ecbeafe&q=amman&format=json')
//   console.log(typeof responce);
//   let data=await responce.json()
//   console.log(data);

// let array=data.map(function (v, index) {
//     return v.lat + v.lon + v.display_name;
// });
// console.log(array);
// // document.getElementById("api").innerHTML=array;

// // let list=document.getElementById("api");
// // let lst=document.createElement("li");
// // list.appendChild(lst).innerHTML=array;


// }
// getData()

// console.log("get data out side the function");