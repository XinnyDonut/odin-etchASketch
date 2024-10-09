const btn=document.querySelector("button");
const container=document.querySelector(".container");
container.style.width="500px";
containerWidth=container.offsetWidth;
console.log(containerWidth)


function createNewGrid(num){
    
    console.log();
    for(let i=0;i<num;i++){
        const col=document.createElement("col");
        for(let j=0;j<num;j++){
            const square=document.createElement("div");
            square.classList.add("square");
            square.style.width=(containerWidth/num)+"px";
            square.style.borderStyle="dotted";
            square.style.height=(containerWidth/num)+"px";
            square.style.backgroundColor="white";
            square.addEventListener('mouseenter',()=>{
                square.style.backgroundColor="pink";
            })
            col.appendChild(square); 
        }
        container.appendChild(col);   
    }
}

createNewGrid(15);
