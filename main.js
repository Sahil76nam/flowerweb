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

// ocument.querySelector('#page2');
//     let innerHTML='';
//     items.forEach(item=>{
//        innerHTML+=`
        
    // <div class="addcart">
    //                <div class="cartimage">
    //                    <img src="${item.cartimage}" width="250px" height="300px" >
    //                </div>
    //                <div class="flowername">
    //                    <h4>${item.flowername}</h4>
    //                </div>
    //                <div class="rupees"><h5> ₹ ${item.rupees}</h5></div>
    //                <div class="date">Earlier Delivery: <span>${item.date}</span></div>
    //                <div class="addcartbtn"><button onclick="addtocart(${item.id})">Add to Cart</button></div>
    //            </div>`;
//     })
//     itemcontainer.innerHTML=innerHTML;
// }


// var addcart=[];

// function addtocart(itemId){
//     addcart.push(itemId);
//     localStorage.setItem('addcart',JSON.stringify(addcart));
//     displaybagitem();


// }


//  function displaybagitem(){
//    let addcarticon=document.querySelector('.addcount');
//    if(addcart.length>0){
//    addcarticon.innerText = addcart.length;
//    addcarticon.style.visibility='visible';
//    }else{
//     addcarticon.style.visibility='hidden';
//    }
//  }
//  function onLoad(){
//     let addcartstr=localStorage.getItem('addcart');
//     addcart=addcartstr ? JSON.parse(addcartstr):[];
//  displaybagitem();
//  displaydatahome();
//  }
//  onLoad();

 

//   let bagitems= addcart.map(itemId=>{
//     for(let i=0; i<addcart.length;i++)
//         if(itemId==items[i].id)
//             return items[i]
//  })
//  let innerHTML='';
//     bagitems.forEach(addcart=>{
//         innerHTML+=generateHtml(addcart)
//     })
//     let datacontainer=document.querySelector('#showcart');
      
    
//     datacontainer.innerHTML=innerHTML;
 
//      function generateHtml(item){
//          return   `<div class="showcartimage">
//               <img srfunction displaydatahome(){
    // let itemcontainer = dc="${item.cartimage}" width="170px" height="200px" >

//               </div>
//              <div class="showdata">
//             <div class="companyname"><h4>${item.flowername}</h4></div>
//             <div class="datarupees">
//                 <h5>₹ ${item.rupees}</h5>
//             </div>
//             <div class="returndata">14 day Return Available</div>
//             <div class="delivery"> Delivery Time : ${item.date}</div>
//             </div>
//            <div class="removeicon"><i class="fa-solid fa-xmark"></i></div> 
//             <div class="datasamrry">
//             <div class="showitem"><h5>Price Details (2 Items)</h5></div>
//             <div class="tmrp"><h4>Total MRP <span>₹ 999</span></h4></div>
//             <div class="confee"><h4>Convenience Fees <span>₹ 49</span></h4></div>
//             <div class="border"></div>
//             <div class="totalamount"><h4>Total Amount <span>₹ 1048</span></h4></div>
            
//             <div class="placeorder"><button>PLACE ORDER</button></div>
//           </div>
//          </div>` 
//      }


// generateHtml();


const flowershop=document.querySelector('#page2')
let cart=JSON.parse(localStorage.getItem('data'))|| [];

function generateshop(){
    flowershop.innerHTML=items.map((item)=>{
        let{id,cartimage,flowername,rupees,date}=item;
        return `<div class="addcart">
                   <div class="cartimage">
                       <img src="${cartimage}" width="250px" height="300px" >
                   </div>
                   <div class="flowername">
                       <h4>${flowername}</h4>
                   </div>
                   <div class="rupees"><h5> ₹ ${rupees}</h5></div>
                   <div class="date">Earlier Delivery: <span>${date}</span></div>
                   <div class="addcartbtn"><button onclick="addtocart('${id}',${cartimage}','${flowername}','${rupees}','${date}')">Add to Cart</button></div>
               </div>`
    })
}

let addtocart=(id,cartimage,flowername,rupees,date)=>{
    cart.push({
        id:id,
        cartimage:cartimage,
        flowername:flowername,
        repees:rupees,
        date:date

    })
    localStorage.setItem('data',JSON.stringify(cart))
    calculateitem();
}
    function calculateitem(){
    let count=document.querySelector('.addcount');
     let countitem=cart.lenght;
     count.innerHTML=countitem;
}


generateshop();
calculateitem();