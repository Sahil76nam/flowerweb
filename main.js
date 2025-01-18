const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});



// let getdata=async()=>{
//     let url='http://localhost:3000/flowerdeliver ';
//     let res=await fetch(url,{method:"GET"})
//     let data1=await res.json()

// let show=document.querySelector("#display")
// console.log("sahil")
// data1.map((e)=>{
//     show.innerHTML+=`
//     <div class="data">
//     <h1>${e.name}</h1>
//     <h1>${e.number}</h1>
//     <h1>${e.email}</h1>
//     <h1>${e.payment}</h1>
//     <h1>${e.city}</h1>
//     <h1>${e.state}</h1>
//     <h1>${e.pincode}</h1>
//     </div>`
// })}

var elem=document.querySelectorAll(".elem")
var page1=document.querySelector("#page1")
elem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
       var bgimg= e.getAttribute("data-image")
       page1.style.backgroundImage=`url(${bgimg})`
    })
})