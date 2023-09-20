const addToCartButtons = document.getElementsByClassName("games__button");
let cartMessage = 0; 
const cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById ("js--shoppingModal");
let modalIsOpen = false;
let buzz = 0;
let iron = 0;
let c3po = 0;

for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].onclick = function(){
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch(addToCartButtons[i].dataset.product){
            case "buzz":
                buzz += 1;
                break;
            case "ironman":
                iron += 1;
                break;
            case "C3PO":
                c3po += 1;
                break;
                
        }
        if(modalIsOpen === false){
            shoppingModal.style.display = " flex";
            modalIsOpen = true;
            setTimeout(function(){
                shoppingModal.style.display = "none"
                modalIsOpen = false;
            },2000)
        }
    }
}

const checkoutButton = document.getElementById("js--checkoutButton");
const checkoutWindow = document.getElementById("js--checkoutWindow");
let checkoutIsOpen = false

checkoutButton.onclick = function (){
    if(checkoutIsOpen === false){
        document.querySelector("main").style.display = "none";
        checkoutWindow.style.display = "block";
        checkoutIsOpen = true;
        document.getElementById("js--amount-buzz").innerHTML = buzz + "x";
        document.getElementById("js--amount-ironman").innerHTML = iron + "x";
        document.getElementById("js--amount-c3po").innerHTML = c3po + "x";
        return;
    }
    document.querySelector("main").style.display = "block";
    checkoutWindow.style.display = "none";
    checkoutIsOpen = false;
}
   