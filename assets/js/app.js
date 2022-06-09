// const allnav = document.querySelectorAll(".hover.col-sm-4")
// // console.log(allnav);
// for (let i = 0; i < allnav.length; i++) {
//     allnav[i].addEventListener("mouseenter" , function (){
//         this.classList.add("test")
//         console.log(this);
//       gsap.from(".test p.bi" ,{ x:"-100%", duration:0.5})
       
//     })
//     allnav[i].addEventListener("mouseleave" , function (){
//         this.classList.remove("test")
//     })
// }   

document.querySelectorAll(".hover.col-sm-4").forEach(item=>{
    console.log(item);
    item.addEventListener("mouseenter", function(){
        this.classList.add("active")
        console.log(this);
        gsap.from(".active p.bi" ,{ x:"-100%", duration:0.5})   
       
    })
    item.addEventListener("mouseleave", function(){
        this.classList.remove("active")
    })
})


 
