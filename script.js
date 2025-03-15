function func_overlay(elemento,i){
    const text_over = document.getElementsByClassName("overlay");
    text_over[i].style.width = elemento.offsetWidth + "px";
    text_over[i].style.height = elemento.offsetHeight + "px";
}

window.func_overlay = func_overlay;