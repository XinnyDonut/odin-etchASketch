

function createGrid(){
    const container=document.querySelector(".container");
    for(let i=0;i<16;i++){
        const row=document.createElement("row");
        for(let j=0;j<16;j++){
            const square=document.createElement("div");
            square.classList.add("square");
            //square.style.color="blue";
            row.appendChild(square); 
        }
        container.appendChild(row);   
    }
}

createGrid();