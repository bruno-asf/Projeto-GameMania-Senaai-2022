let menu = document.getElementById('menu');

function mostrarMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "flex"
    }else{
        menu.style.display = "none";
    }
}