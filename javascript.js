const btn=document.querySelector("button");
const container=document.querySelector(".container");
container.style.width="500px";
containerWidth=container.offsetWidth;


btn.addEventListener('click',()=>{
    let input=prompt("how many grid you would like per side, 40 is maximum");
    let num=parseInt(input);
    if (num>40||num<0||isNaN(num)){
        alert("enter a valid number!");
    }else{
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        createNewGrid(num);
    }
})


function createNewGrid(num){   
    for(let i=0;i<num;i++){
        const col=document.createElement("col");
        for(let j=0;j<num;j++){
            const square=document.createElement("div");
            square.classList.add("square");
            square.style.width=(containerWidth/num)+"px";
            square.style.borderStyle="solid";
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
