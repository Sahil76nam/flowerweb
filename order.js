let getdata=async()=>{
    let url='http://localhost:3000/flowerdeliver ';
    let res=await fetch(url,{method:"GET"})
    let data1=await res.json()

let show=document.querySelector("#display")

data1.map((e)=>{
    show.innerHTML+=`
    
    <div class="data">
    <h1 >${e.name}</h1>
    <h1>${e.number}</h1>
    <h1>${e.email}</h1>
    <h1>${e.payment}</h1>
    <h1>${e.city}</h1>
    <h1>${e.state}</h1>
    <h1>${e.pincode}</h1>
    <h1>${e.orderstatus}</h1>
    <h1 id="det" onclick="del('${e.id}')">DELETE</h1>
    <h1 id="det1" onclick="updatee('${e.id}')">UPDATE</h1>
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
    let dorderstatus=document.querySelector("#dorderstatus").value;


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
            orderstatus:dorderstatus
        })
    })
    location.href="deliver.html"
    return false;
}

let updatee=async(id)=>{
   
    let url=`http://localhost:3000/flowerdeliver/${id}`
    let res=await fetch(url)
    let data= await res.json()
    

    let formdata=` 
    
    
         <input type="text" id="dataname" value=${data.name}><br><br>
         <input type="number" id="datanumber"value=${data.number}><br><br>
         <input type="text"  id="dataemail"value=${data.email}><br><br>
         <input type="text"  id="datapayment"value=${data.payment}><br><br>
        <input type="text"  id="datacity" value=${data.city}><br><br>
        <input type="text"  id="datastate" value=${data.state}><br><br>
        <input type="text"  id="datapincode" value=${data.pincode}><br><br>
        <input type="text"  id="dataorderstatus" value=${data.orderstatus}><br><br>
        <button type="submit" value="Update" onclick=" return finalupdate(${data.id})">Update</button><br><br>
         
                     
`

document.querySelector("#updateform").innerHTML=formdata
}

let finalupdate=(id)=>{
    let dataname=document.querySelector("#dataname").value
    let datanumber=document.querySelector("#datanumber").value
    let dataemail=document.querySelector("#dataemail").value
    let datapayment=document.querySelector("#datapayment").value
    let datacity=document.querySelector("#datacity").value
    let datastate=document.querySelector("#datastate").value
    let datapincode=document.querySelector("#datapincode").value
    let dataorderstatus=document.querySelector("#dataorderstatus").value


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
            orderstatus:dataorderstatus

        })
    })
    return false
}

