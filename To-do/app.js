const inp = document.getElementById('inp');
const but = document.getElementById('but');
const ul = document.getElementById('list');
const compList = document.getElementById('complist');
const checkBx = document.getElementById('check');


const untasks = []
const compTasks =[]

let checkVal;

let value;

function getValue(){
    if(inp.value){
        return inp.value.trim();
    }
    else{
        alert('Enter something mf')
        return;
    }  
}

console.log(untasks)



function renderToBeComp(){
    ul.innerHTML = "";
    untasks.forEach((task)=>{
        const li = document.createElement("li");
        li.innerHTML = `<div id="cont">
        <input class="check" type="checkbox">
        <span >${task}</span></div>
        <span id="del" class="material-symbols-outlined">delete</span>`;
      
       
        
        ul.appendChild(li)
        

    });
}


function renderComp(){
    compList.innerHTML = "";
    compTasks.forEach((task)=>{
        const li = document.createElement("li");
        li.innerHTML = `<div id="cont">
        <input class="check" type="checkbox" checked>
        <span class = "task-name">${task}</span></div>
        <span id="del" class="material-symbols-outlined">delete</span>`;
        const taskName = li.querySelectorAll('.task-name')
        taskName.forEach((tName)=>{
            tName.style.color = "grey";
            tName.style.textDecoration = "line-through"
           })
        compList.appendChild(li)
    });
}


but.addEventListener("click",(e)=>{
    value = getValue();
    if(value){
        untasks.push(value);
        console.log("comptask:",compTasks)
        console.log("uncomp:",untasks)
        renderToBeComp();
        inp.value=""
        console.log(untasks);     
    }
    e.preventDefault();
    
});

ul.addEventListener("change", (e)=>{
    if(e.target.classList.contains("check")){
        const li = e.target.closest("li");
        const span = li.querySelector("span")
        const text = span.innerText;
        const index = untasks.indexOf(text)
        if(index !== -1){
            untasks.splice(index,1);
            compTasks.push(text)
            console.log("comptask:",compTasks)
            console.log("uncomp:",untasks)
            renderComp();
            renderToBeComp();
            li.remove();
        }
        
    }
})

compList.addEventListener("change", (e)=>{
    
    if(e.target.classList.contains("check") && !e.target.checked){
        const li = e.target.closest("li");
        const span = li.querySelector("span");
        const text = span.innerText;
        const indexRe = compTasks.indexOf(text);
        
    
    if(indexRe !== -1){
        compTasks.splice(indexRe,1);
        untasks.push(text)
        console.log("comptask:",compTasks)
        console.log("uncomp:",untasks)
        renderToBeComp();
        renderComp();
        li.remove();
    }
}
    
})
ul.addEventListener("click", (e)=>{
    if(e.target.classList.contains("material-symbols-outlined")){
        const li = e.target.closest("li");
        const span = li.querySelector("span")
        const text = span.innerText;
        const index = untasks.indexOf(text)
        if(index !== -1){
            untasks.splice(index,1);
            li.remove();
        }
    }
});
compList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("material-symbols-outlined")){
        const li = e.target.closest("li");
        const span = li.querySelector("span")
        const text = span.innerText;
        const index = compTasks.indexOf(text)
        if(index !== -1){
            compTasks.splice(index,1)
            li.remove();
        }
    }
});


