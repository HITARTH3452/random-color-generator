let colorCont = document.getElementById("colorContainer");

for(let i=0; i<30; i++){
    let colorContainer1 = document.createElement("div");
    colorContainer1.classList.add("color-container");
    colorCont.appendChild(colorContainer1);
}

let allDivs = document.querySelectorAll(".color-container");

allDivs.forEach((div)=>{
    let newColor = randomClr();
    div.style.backgroundColor = newColor;
    div.innerText = newColor;
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    // div.innerHTML = `<p>hii ${idx}</p>`
})

function randomClr(){
    let str = "0123456789abcdef";
    let colorStr = "#";
    for(let i=0; i<6; i++){
        let randomInd = Math.floor(Math.random() * str.length);
        colorStr += str[randomInd]; 
    }
    return colorStr;
}