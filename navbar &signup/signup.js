let url="https://masai-api-mocker.herokuapp.com"

let signup=async()=>{
    let username=document.getElementById("name").value
    let useremail=document.getElementById("email").value
    let userpass=document.getElementById("pass").value
    
    let data_obj={username,useremail,userpass}

    let res=await fetch(`${url}/auth/register`,{
        method:"POST",
        body:JSON.stringify(data_obj),
        headers:{
            "Content-Type":"application.json"
        }
        
    })
    res=await res.json()
    console.log(res);


}