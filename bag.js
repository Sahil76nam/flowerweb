
// function onLoad(){
//     displaybagitem();
//     loadbagitem();
// }

// let bagitemobject=[];
// function loadbagitem(){
    
// }

// function displaybagitem(){
//     let datacontainer=document.querySelector('#showcart');
//     datacontainer.innerHTML= `<div class="showcartimage">
//             <img src="graceful-dry-flower-medley_1.webp" width="170px" height="200px" >

//         </div>
//         <div class="showdata">
//             <div class="companyname"><h4>GRACEFUL DRY FLOWER</h4></div>
//             <div class="datarupees">
//                 <h5>₹ 999</h5>
//             </div>
//             <div class="returndata">14 day Return Available</div>
//             <div class="delivery"> Delivery Time : Today</div>
//         </div>
//         <div class="removeicon"><i class="fa-solid fa-xmark"></i></div> 
//         <div class="datasamrry">
//             <div class="showitem"><h5>Price Details (2 Items)</h5></div>
//             <div class="tmrp"><h4>Total MRP <span>₹ 999</span></h4></div>
//             <div class="confee"><h4>Convenience Fees <span>₹ 49</span></h4></div>
//             <div class="border"></div>
//             <div class="totalamount"><h4>Total Amount <span>₹ 1048</span></h4></div>
            
//             <div class="placeorder"><button>PLACE ORDER</button></div>
//         </div>
//      </div>`
// }
// onLoad();


let shopcart=document.querySelector('#showcart')

let cart=JSON.parse(localStorage.getItem('data'))||[];


function calculateitem(){
   let cartcount=document.querySelector('addcount')
   cartcount.innerHTML=cart.lenght;
}
calculateitem();
function generateitem(){
    if(cart.lenght!==0){
        return(shopcart.innerHTML=cart.map((item)=>{
            let{cartimage,flowername,rupees,date}=item;
            return `<div class="showcartimage">
            <img src="${cartimage}" width="170px" height="200px" >

        </div>
        <div class="showdata">
            <div class="companyname"><h4>${flowername}</h4></div>
            <div class="datarupees">
                <h5>₹ ${rupees}</h5>
            </div>
            <div class="returndata">14 day Return Available</div>
            <div class="delivery"> Delivery Time : ${date}</div>
        </div>
        <div class="removeicon"><i class="fa-solid fa-xmark"></i></div>
         <div class="datasamrry">
            <div class="showitem"><h5>Price Details (2 Items)</h5></div>
            <div class="tmrp"><h4>Total MRP <span>₹ 999</span></h4></div>
            <div class="confee"><h4>Convenience Fees <span>₹ 49</span></h4></div>
            <div class="border"></div>
            <div class="totalamount"><h4>Total Amount <span>₹ 1048</span></h4></div>
            
            <div class="placeorder"><button>PLACE ORDER</button></div>
        </div>`
        }))
    }
}
