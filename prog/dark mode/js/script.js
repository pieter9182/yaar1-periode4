const rootElement = document.querySelector(":root");
const modeSwitch = document.getElementById("mode");

modeSwitch.checked = false;

modeSwitch.onchange = function(){
  if(modeSwitch.checked === true){
    rootElement.style.setProperty("--background-color", "white");
    rootElement.style.setProperty("--font-color", "black");
    rootElement.style.setProperty("--product-border-color", "black")
    return
  }
  rootElement.style.setProperty("--background-color", "#27374D");
  rootElement.style.setProperty("--font-color", "#d4d4d4");
  rootElement.style.setProperty("--product-border-color", "rgba(212,212,212,0.4)");
}