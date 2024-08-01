let create = document.querySelector('.notesbtn button');
let input = document.querySelector('.inputtt');
create.addEventListener("click", ()=>{
    console.log("clicked")
    let container= document.createElement("div");
    input.appendChild(container);
    let textarea = document.createElement("textarea");
    container.appendChild(textarea);
    let spany= document.createElement('img');
    spany.src ='delete-02-stroke-rounded.svg'
    container.appendChild(spany);
    spany.addEventListener("click", (event)=>{
        event.target.parentElement.remove();
        SaveData();
    })
    SaveData();
})
function SaveData(){
    localStorage.setItem('data', input.innerHTML);
}
function noteslist(){
    const savedData = localStorage.getItem('data');
    input.innerHTML = savedData || '';
}
noteslist();