let order = ()=>{
    alert("Order is successful");
}
let show = ()=>{
    let cont = document.querySelector("#paymentMethod");
    cont.innerHTML="";
    let in2 = document.createElement("input");
    in2.placeholder="Card Number";
    let in3 = document.createElement("input");
    in3.placeholder="MM/YY";
    let in4 = document.createElement("input");
    in4.placeholder="CVV";
    cont.append(in2,in3,in4);
}
let show1 = ()=>{
    let cont = document.querySelector("#paymentMethod");
    cont.innerHTML="";
    let in2 = document.createElement("input");
    in2.placeholder="Enter Your UPI"; 
    cont.append(in2);
}
let show2 = ()=>{
    let cont = document.querySelector("#paymentMethod");
    cont.innerHTML="";
    let in2 = document.createElement("input");
    in2.placeholder="Enter Your UPI"; 
    cont.append(in2);
}
show2();
let body = ()=>{
    let body = document.querySelector("body");
    let btn = document.createElement("button");
    btn.innerText="Pay";
    btn.addEventListener("click",()=>{
        alert("Your Payment is successful");
      //  window.location.href="";
    })
    btn.style.marginLeft="35%"
    btn.style.border="1px solid transparent"
    btn.style.padding="10px 20px"
    btn.style.color="white"
    btn.style.width="30%"
    btn.style.fontSize="28px"
    btn.style.fontWeight="bold";
    btn.style.backgroundColor="#9c3963"
    btn.style.cursor="pointer"
    body.append(btn);
}
body();