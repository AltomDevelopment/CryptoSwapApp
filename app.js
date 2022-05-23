function showMenu () {
    let button = document.querySelector(".dropdownmenu");
    button.classList.toggle("active");
}
//function displays div when moused over the button 
// add functionality to hide the div when mouse is not over the now visible div 
var networkbutton = document.querySelector(".networkbutton");
networkbutton.addEventListener("mouseover", displayDiv(), false);

function displayDiv () {
    let selectnetworkmenu = document.querySelector(".selectnetworkmenu");
    selectnetworkmenu.setAttribute("style", "display: block;");
}