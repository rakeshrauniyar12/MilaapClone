



let signup_arr=JSON.parse(localStorage.getItem("signup"))
let login=()=>{
     
    let email=document.getElementById("email").value
    let password=document.getElementById("pass").value
 
    let user_data={email,password}
    let flag=false
    signup_arr.forEach(ele => {
        if(ele.email==user_data.email && ele.password===user_data.password){
           flag=true
            localStorage.setItem("signin",flag)
            
        }
    });
    
}

