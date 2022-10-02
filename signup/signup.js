// let url="https://masai-api-mocker.herokuapp.com"
let data_arr=JSON.parse(localStorage.getItem("signup"))||[]

let signup=()=>{
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let password=document.getElementById("pass").value
    
    let data_obj={name,email,password}
    if(checkUser(data_obj)===true){
        data_arr.push(data_obj)
    localStorage.setItem("signup",JSON.stringify(data_arr))
    alert("You are Successfully Signup");
    } else {
        alert("Already Signup");
    }
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("pass").value="";


}
let checkUser=(e)=>{
     let filtered=data_arr.filter((el)=>{
        return e.email===el.email;
     })
     if(filtered.length>0){
        return false;
     }
     else {
        return true;
     }
}