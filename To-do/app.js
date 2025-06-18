const inp = document.getElementById('inp');
const but = document.getElementById('but');
const ul = document.getElementById('list');

let value;

function getValue(){
    let todotext;
    if(inp.value){
        todotext = inp.value
        return todotext;
    }
    else{
        alert('Enter something mf')
        return;
    }  
}

function AddToList(){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(value))
    ul.appendChild(li)
    inp.value='';
}


but.addEventListener("click",(e)=>{
    value = getValue();
   
    if(value){
        AddToList();
        console.log("User input:", value);
    }
    e.preventDefault();
    
});