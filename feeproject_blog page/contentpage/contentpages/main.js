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

const hide = document.querySelectorAll(".hide")
const observer = new IntersectionObserver(
  (obj)=>{
    obj.forEach((item)=>{
      item.target.classList.toggle("show",item.isIntersecting)
    })
  },
  {
    threshold: 0.2
  }
)

observer.observe(cards)

hide.forEach((hide)=>{
  observer.observe(hide)
})
