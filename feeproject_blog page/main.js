let menuList = document.querySelector("#menu-list");
menuList.style.maxHeight = "0rem";
function toggleMenu() {
  if (menuList.style.maxHeight == "0rem") {
    menuList.style.maxHeight = "30rem";
  } else {
    menuList.style.maxHeight = "0rem";
  }
}
let menuIcon = document.querySelector(".menu-icon");
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")

let isToggled = true
menuIcon.addEventListener("click",function(){
    if(isToggled == true){
    one.style.transform = "translateY(0.2rem) rotate(-45deg)"
    two.style.transform = "translateY(0.1rem) rotate(45deg)"
    three.style.transform = "rotate(-45deg)"
    isToggled = false
}else{
        one.style.transform = "translateY(-0.25rem) rotate(0deg)"
        two.style.transform = "translateY(0.5rem)"
        three.style.transform = "translateY(0rem)"
    isToggled = true
}
})
let first = document.querySelector(".first")
let second = document.querySelector(".second")
let third = document.querySelector(".third")

let contentBox = document.querySelector(".content-box")

first.addEventListener("click",function(){
  contentBox.style.transform = "translateX(0)"
  first.style.width = "1.2vw"
  first.style.borderRadius = "2vw"
  second.style.width = "1vh"
  second.style.borderRadius = "50%"
  third.style.width = "1vh"
  third.style.borderRadius = "50%"
  contentBox.style.animation = "none"
})
second.addEventListener("click",function(){
  contentBox.style.transform = "translateX(-100%)"
  second.style.width = "1.2vw"
  second.style.borderRadius = "2vw"
  first.style.width = "1vh"
  first.style.borderRadius = "50%"
  third.style.width = "1vh"
  third.style.borderRadius = "50%"
  contentBox.style.animation = "none"
})
third.addEventListener("click",function(){
  contentBox.style.transform = "translateX(-200%)"
  third.style.width = "1.2vw"
  third.style.borderRadius = "2vw"
  first.style.width = "1vh"
  first.style.borderRadius = "50%"
  second.style.width = "1vh"
  second.style.borderRadius = "50%"
  contentBox.style.animation = "none"
})

const cards = document.querySelector("footer")
const hide = document.querySelectorAll(".hide")
const observer = new IntersectionObserver(
  (obj)=>{
    obj.forEach((item)=>{
      item.target.classList.toggle("show",item.isIntersecting)
    })
  },
  {
    threshold: 0.4
  }
)

observer.observe(cards)

hide.forEach((hide)=>{
  observer.observe(hide)
})
let video =document.querySelector("video")
setTimeout(function(){
  video.remove()
},3000)