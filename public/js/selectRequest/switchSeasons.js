const seasons = document.getElementById('switchSeasons');
const bigListSeason = document.querySelector('.myBigFlex');
const classes = document.querySelector('.classes');

seasons.addEventListener('change',(e=>{
    let value = e.target.value;

    if(value != "none"){
        classes.style.display = "flex";
    }else if(value == "none"){
        classes.style.display = "none";
    }
}))
