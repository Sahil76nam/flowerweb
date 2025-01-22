const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});



function movingamination(){
    var elem=document.querySelectorAll(".elem")
    var page1=document.querySelector("#page1")
    elem.forEach(function(e){
        e.addEventListener("mouseenter",function(){
           var bgimg= e.getAttribute("data-image")
           page1.style.backgroundImage=`url(${bgimg})`
        })
    })
}
movingamination();

function displaydatahome(){
    let itemcontainer = document.querySelector('#page2');
    let innerHTML='';
    items.forEach(item=>{
       innerHTML+=`
        
    <div class="addcart">
                   <div class="cartimage">
                       <img src="${item.cartimage}" width="250px" height="300px" >
                   </div>
                   <div class="flowername">
                       <h4>${item.flowername}</h4>
                   </div>
                   <div class="rupees"><h5> ₹ ${item.rupees}</h5></div>
                   <div class="date">Earlier Delivery: <span>${item.date}</span></div>
                   <div class="addcartbtn"><button onclick="addtocart(${item.id})">Add to Cart</button></div>
               </div>`;
    })
    itemcontainer.innerHTML=innerHTML;
}


let addcart=[];

function addtocart(itemId){
    addcart.push(itemId);
    localStorage.setItem('addcart',JSON.stringify(addcart));
    displaybagitem();


}
addtocart();
 function displaybagitem(){
   let addcarticon=document.querySelector('.addcount');
   if(addcart.length>0){
   addcarticon.innerText = addcart.length;
   addcarticon.style.visibility='visible';
   }else{
    addcarticon.style.visibility='hidden';
   }
 }
 function onLoad(){
    let addcartstr=localStorage.getItem('addcart');
    addcart=addcartstr ? JSON.parse(addcartstr):[];
 displaybagitem();
 displaydatahome();
 }
 onLoad();