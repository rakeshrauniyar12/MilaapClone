



let url="https://masai-api-mocker.herokuapp.com"

let login=async()=>{
     
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
 
    let user_data={username,password}

    let res=await fetch(`${url}/auth/login`,{
        method:"POST",
        body:JSON.stringify(user_data),
        headers:{
            "Content-Type":"application/JSON"
        }
    })
    res=await res.json()
    // let flag=fal
    if(!res.error){
        alert("successfully login")
        
    }
}

