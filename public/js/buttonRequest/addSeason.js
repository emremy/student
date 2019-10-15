let AddSeasonButton = document.querySelector('.addSeasonPanelOpen');
let AddSeason = document.querySelector('#AddSeasonPanel');
let CloseAddSeasonPanel = document.querySelector('.closeAddSeasonPanel');



AddSeasonButton.addEventListener('click',(e=>{
    AddSeason.style.display = "flex";
}));





CloseAddSeasonPanel.addEventListener('click',(e=>{
    AddSeason.style.display = "none";
}))