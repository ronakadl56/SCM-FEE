// let menuList = document.querySelector("#menu-list");
// menuList.style.maxHeight = "0rem";
// function toggleMenu() {
//   if (menuList.style.maxHeight == "0rem") {
//     menuList.style.maxHeight = "30rem";
//   } else {
//     menuList.style.maxHeight = "0rem";
//   }
// }
// let menuIcon = document.querySelector(".menu-icon");
// let one = document.querySelector(".one")
// let two = document.querySelector(".two")
// let three = document.querySelector(".three")

// let isToggled = true
// menuIcon.addEventListener("click",function(){
//     if(isToggled == true){
//     one.style.transform = "translateY(0.2rem) rotate(-45deg)"
//     two.style.transform = "translateY(0.1rem) rotate(45deg)"
//     three.style.transform = "rotate(-45deg)"
//     isToggled = false
// }else{
//         one.style.transform = "translateY(-0.25rem) rotate(0deg)"
//         two.style.transform = "translateY(0.5rem)"
//         three.style.transform = "translateY(0rem)"
//     isToggled = true
// }
// })

// // const hide = document.querySelectorAll(".hide")
// // const observer = new IntersectionObserver(
// //   (obj)=>{
// //     obj.forEach((item)=>{
// //       item.target.classList.toggle("show",item.isIntersecting)
// //     })
// //   },
// //   {
// //     threshold: 0.2
// //   }
// // )

// // observer.observe(cards)

// // hide.forEach((hide)=>{
// //   observer.observe(hide)
// // })

let all = document.querySelector(".all")
let travel = document.querySelector(".travel")
let finance = document.querySelector(".finance")
let personal = document.querySelector(".personal")
let accounting = document.querySelector(".accounting")
let educational = document.querySelector(".educational")

let description = document.querySelectorAll(".box")


description.forEach(item=>{
  console.log(item)
})


all.addEventListener("click",function(){
  description.forEach(item=>{
    item.parentElement.style.display = "inline-block"
    console.log("okk")
  })
})
travel.addEventListener("click",function(){
  description.forEach(item=>{
    if(item.id == "Travel"){
      item.parentElement.style.display = "inline-block"
    }else{
      item.parentElement.style.display = "none"
    }
  })})
finance.addEventListener("click",function(){
  description.forEach(item=>{
    if(item.id == "Finance"){
      item.parentElement.style.display = "inline-block"
    }else{
      item.parentElement.style.display = "none"
    }
    console.log(item.id)
  })})
personal.addEventListener("click",function(){
  description.forEach(item=>{
    if(item.id == "Personal"){
      item.parentElement.style.display = "inline-block"
    }else{
      item.parentElement.style.display = "none"
    }
  })})
accounting.addEventListener("click",function(){
  description.forEach(item=>{
    if(item.id == "Accounting"){
      item.parentElement.style.display = "inline-block"
    }else{
      item.parentElement.style.display = "none"
    }
  })})
educational.addEventListener("click",function(){
  description.forEach(item=>{
    if(item.id == "Education"){
      item.parentElement.style.display = "inline-block"
    }else{
      item.parentElement.style.display = "none"
    }
  })})
