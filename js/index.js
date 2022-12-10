let btn = document.querySelector(".navbar-toggler");
let icon = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");
btn.onclick= ()=>{

    if(icon.classList.contains("fa-bars")){
        icon.classList.replace("fa-bars","fa-xmark");
        navbar.style.backgroundColor ="#1E1E1E";
    }else{
        icon.classList.replace("fa-xmark","fa-bars");
        navbar.style.backgroundColor ="transparent";
    }
}