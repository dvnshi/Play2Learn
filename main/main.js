const cursor = document.querySelector(".cursor");
var timeout;
//follow cursor on mouse
document.addEventListener("mousemove",(e)=>{
    let x=e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

//cursor effect onj mouse stopped 
function mouseStopped(){
    cursor.style.display ="none";
}
clearTimeout(timeout);
timeout = setTimeout(mouseStopped,1000);

});

//cursor effect on mouse
document.addEventListener("mouseout", ()=>{
    cursor.style.display = "none";
});


// scroll trigger 
var tl1= gsap.timeline({scrollTrigger:{
    trigger:".right-box",
    start:"15% 100%",
    end:"10% 10%",
    scrub:true,
    // markers:true,
}})
tl1.to("#rocket",{
    // rotate:"35deg",
    left:"50%",
    top:"450%",
})


// var tl2 = gsap.timeline({scrollTrigger:{
//     trigger:".right-box",
//     start:"15% 10%",
//     end:"10% 10%",
//     scrub:true,
//     markers:true,
// }})
// tl1.from("#rocket",{
//     // rotate:"35deg",
//     left:"50%",
//     top:"450%",
// })


// var tl = gsap.timeline({scrollTrigger:{
//     trigger:".right-box",
//     start:"0% 100%",
//     end:"10% 50%",
//     scrub:true,
//     // markers:true,
// }})
// tl.to("#rocket",{
//     // rotate:"45deg",
//     left:"50%",
//     top:"200%",
// })



// var tl = gsap.timeline({scrollTrigger:{
//     trigger:".right-box",
//     start:"15% 110%",
//     end:"10% 0%",
//     scrub:true,
//     // markers:true,
// }})
// tl.to("#rocket",{
//     rotate:"50deg",
//     left:"50%",
//     top:"200%",
// })




// var tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".right-box",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: true,
//         markers: true // Set to true for debugging, remove or set to false in production
//     }
// });

// tl.to("#rocket", { duration: 2, x: "40%", y: "20%" })
//   .to("#rocket", { duration: 2, x: "60%", y: "40%" })
//   .to("#rocket", { duration: 2, x: "40%", y: "60%" });

