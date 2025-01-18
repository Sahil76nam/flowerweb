let getdata=async()=>{
    let url='http://localhost:3000/flowerdeliver ';
    let res=await fetch(url,{method:"GET"})
    let data1=await res.json()

let show=document.querySelector("#display")
console.log("sahil")
data1.map((e)=>{
    show.innerHTML+=`
    <div class="data">
    <h1>${e.name}</h1>
    <h1>${e.number}</h1>
    <h1>${e.email}</h1>
    <h1>${e.payment}</h1>
    <h1>${e.city}</h1>
    <h1>${e.state}</h1>
    <h1>${e.pincode}</h1>
    <h1>${e.orderstatus}</h1>
    <h1 onclick="del('${e.id}')">DELETE</h1>
    <h1 onclick="update('${e.id}')">UPDATE</h1>
    </div>`
})}

let del=(id)=>{
    let url=`http://localhost:3000/flowerdeliver/${id}`
    fetch(url,{method:"DELETE"})
}

let ins=()=>{
    let dname=document.querySelector("#dname").value;
    let dnumber=document.querySelector("#dnumber").value;
    let demail=document.querySelector("#demail").value;
    let dpayment=document.querySelector("#dpayment").value;
    let dcity=document.querySelector("#dcity").value;
    let dstate=document.querySelector("#dstate").value;
    let dpincode=document.querySelector("#dpincode").value;
    let dstatus=document.querySelector("#dstatus")


    let url=`http://localhost:3000/flowerdeliver`
    fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"

        },
        body:JSON.stringify({
            name:dname,
            number:dnumber,
            email:demail,
            payment:dpayment,
            city:dcity,
            state:dstate,
            pincode:dpincode,
            status:dstatus
        })
    })
    location.href="deliver.html"
    return false;
}
