let getdata=async()=>{
    let url='http://localhost:3000/flowerdeliver ';
    let res=await fetch(url,{method:"GET"})
    let data1=await res.json()

let show=document.querySelector("#display")
console.log("sahil")
data1.map((e)=>{
    show.innerHTML+=`
    
    <div class="data">
    <h1 id="det">${e.name}</h1>
    <h1>${e.number}</h1>
    <h1>${e.email}</h1>
    <h1>${e.payment}</h1>
    <h1>${e.city}</h1>
    <h1>${e.state}</h1>
    <h1>${e.pincode}</h1>
    <h1>${e.orderstatus}</h1>
    <h1 onclick="del('${e.id}')">DELETE</h1>
    <h1 onclick="updatee('${e.id}')">UPDATE</h1>
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

let updatee=async(id)=>{
   
    let url=`http://localhost:3000/flowerdeliver/${id}`
    let res=await fetch(url)
    let data= await res.json()
    

    let formdata=` enter name: <input type="text" id="dataname" value=${data.name}>
        enter NUMBER: <input type="number" id="datanumber"value=${data.number}>
        enter email: <input type="text"  id="dataemail"value=${data.email}>
        PAYMENT mode: <input type="text"  id="datapayment"value=${data.payment}>
        enter city: <input type="text"  id="datacity" value=${data.city}>
        enter state: <input type="text"  id="datastate" value=${data.state}>
        PAYMENT pincode: <input type="text"  id="datapincode" value=${data.pincode}>
        STATUS <input type="text"  id="datastatus" value=${data.status}>
        <button type="submit" value="Update" onclick=" return finalupdate(${data.id})">update</button>
`

document.querySelector("#updateform").innerHTML=formdata
}

let finalupdate=(id)=>{
    let dataname=document.querySelector("#dataform").value
    let datanumber=document.querySelector("#datanumber").value
    let dataemail=document.querySelector("#dataemail").value
    let datapayment=document.querySelector("#datapayment").value
    let datacity=document.querySelector("#datacity").value
    let datastate=document.querySelector("#datastate").value
    let datapincode=document.querySelector("#datapincode").value
    let datastatus=document.querySelector("#datastatus").value


    let url=`http://localhost:3000/flowerdeliver/${id}`

    fetch(url,{
        method:"PUT",
        headers:{
            "Content_Type":"application/json"
        },
        body:JSON.stringify({
            name:dataname,
            number:datanumber,
            email:dataemail,
            payment:datapayment,
            city:datacity,
            state:datastate,
            pincode:datapincode,
            status:datastatus

        })
    })
    return false
}

