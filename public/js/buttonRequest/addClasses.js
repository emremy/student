const AddClasses = document.querySelector('.AddClasses');
const Panel = document.querySelector('#AddClassesPanel');
const Close = document.querySelector('.close');

AddClasses.addEventListener('click', (e =>{
    Panel.style.display = "flex";
}))

Close.addEventListener('click', (e=>{
    Panel.style.display = "none";
}))
