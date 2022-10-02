



let signup_arr=JSON.parse(localStorage.getItem("signup"))
let login=()=>{
     
    let email=document.getElementById("email").value
    let password=document.getElementById("pass").value
 
    let user_data={email,password}
    if(checkUser(user_data)===true){
    alert("You are Successfully login");
    } else {
        alert("Your given credential does not match");
    }
    document.getElementById("email").value="";
    document.getElementById("pass").value="";


}
let checkUser=(e)=>{
     let filtered=signup_arr.filter((el)=>{
        return e.email===el.email && e.password===el.password;
     })
     if(filtered.length>0){
        return true;
     }
     else {
        return false;
     }
}

