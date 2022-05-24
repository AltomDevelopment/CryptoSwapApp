function showMenu () {
    let button = document.querySelector(".dropdownmenu");
    button.classList.toggle("active");
}

var networkbutton = document.querySelector(".networkbutton");
networkbutton.addEventListener("mouseover", displayDiv(), false);

function displayDiv () {
    let selectnetworkmenu = document.querySelector(".selectnetworkmenu");
    selectnetworkmenu.setAttribute("style", "display: block;");
}

function displayWalletConnector() {
    let button = document.querySelector(".walletconnector");
    button.classList.toggle("active");
}

function closeWalletConnector() {
    let button = document.querySelector(".walletconnector");
    button.classList.remove("active")
}