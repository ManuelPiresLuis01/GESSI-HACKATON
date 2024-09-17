 document.getElementById("in").addEventListener("click",function(){
    document.querySelector(".sign-up").classList.add("Abrir")
   document.querySelector(".sign-in").classList.add("Abrir")
 })

 document.getElementById("up").addEventListener("click",function(){
    document.querySelector(".sign-up").classList.remove("Abrir")
    document.querySelector(".sign-in").classList.remove("Abrir")
 })

 function entrar(){
window.location.href = "../Pages/pagesLogadas/index.html"
 }