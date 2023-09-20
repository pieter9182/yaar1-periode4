/*filter 1 */
let allGames = document.getElementsByClassName("manga");
let filters = document.getElementsByClassName("filter");
window.scrollTo(0,0);

setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);
for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}

// one piece filter
let onePieceFilter = document.getElementById("checkbox-one-piece");
onePieceFilter.onchange = function(){ //als er iets verandert met de naam one piece in de filter dan voert het de comand uit
    if(onePieceFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "one piece"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "one piece"){
                allGames[i].style.display = "none";
            }
        }
    }
}

let narutoFilter = document.getElementById("checkbox-naruto");
narutoFilter.onchange = function(){ //als er iets verandert met de naam naruto in de filter dan voert het de comand uit
    if(narutoFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "naruto"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "naruto"){
                allGames[i].style.display = "none";
            }
        }
    }
}


let dragonBallFilter = document.getElementById("checkbox-dragon-ball");
dragonBallFilter.onchange = function(){ //als er iets verandert met de naam one piece in de filter dan voert het de comand uit
    if(dragonBallFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "dragon ball"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "dragon ball"){
                allGames[i].style.display = "none";
            }
        }
    }
}


let demonSlayerFilter = document.getElementById("checkbox-demon-slayer");
demonSlayerFilter.onchange = function(){ //als er iets verandert met de naam one piece in de filter dan voert het de comand uit
    if(demonSlayerFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "demon slayer"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "demon slayer"){
                allGames[i].style.display = "none";
            }
        }
    }
}