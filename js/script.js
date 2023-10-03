var a = document.querySelector(".login-cont")
var c = document.querySelector(".signup-cont")
var b = document.querySelector(".btn-cont")

function closelogin(){
    a.style.display = "none";
    c.style.display = "none";
    b.style.marginRight = "0vw";
}

function openlogin(){
    closelogin();
    a.style.display = "flex";
    b.style.marginRight = "20vw";
}

function opensignin(){
    closelogin();
    c.style.display = "flex";
    b.style.marginRight = "20vw";
}