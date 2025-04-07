let container = document.querySelector(".login")
let signUp = document.querySelector(".signupbutton")
let login = document.querySelector(".loginbutton")

let hello = true
signUp.addEventListener("click",function(){
    if(hello == true){
    container.style.transform = "translateX(-100%)"
hello = false
console.log("hi")
}})
login.addEventListener("click",function(){
        container.style.transform = "translateX(0)"
        console.log("hello")
        hello = true
})