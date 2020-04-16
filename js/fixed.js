var menu =document.getElementById("main_nav");
var altura = menu.offsetTop;

window.addEventListener("scroll", function(){
    if(window.pageXOffset > altura){
        main_nav.classList.add("fixed");
    }else{
        main_nav.classList.remove("fixed");
    }
})
