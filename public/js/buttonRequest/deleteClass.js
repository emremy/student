const DeleteClassPanel = document.querySelector('.DeleteClassPanel');
const closeDeleteClassPanel = document.querySelector('.closeDeleteClassPanel');
const DeleteClassPanelOpen = document.querySelector('.DeleteClassPanelOpen');

DeleteClassPanelOpen.addEventListener('click',(e=>{
    DeleteClassPanel.style.display = "flex";
}));

closeDeleteClassPanel.addEventListener('click',(e=>{
    DeleteClassPanel.style.display = "none";
}))