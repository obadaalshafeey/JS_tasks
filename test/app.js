let x=document.createElement("p");
x.innerHTML="Orange Coding Academy";
document.getElementById("title").appendChild(x);


let y=document.getElementsByTagName("li");
console.log(y.length);

function change(z){
    z.style.color= "Orange";
    z.style.fontSize="50px";
}
 function normal(z) {
    z.style.color= "darkred";
    z.style.fontSize="20px";
}




function initGrid() {
    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    // TODO complete the rest
}

window.onload = function () {
    initGrid();
}