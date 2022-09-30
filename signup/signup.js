// let url="https://masai-api-mocker.herokuapp.com"
let data_arr=JSON.parse(localStorage.getItem("signup"))||[]

let signup=()=>{
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let password=document.getElementById("pass").value
    
    let data_obj={name,email,password}
    data_arr.push(data_obj)
    localStorage.setItem("signup",JSON.stringify(data_arr))



}