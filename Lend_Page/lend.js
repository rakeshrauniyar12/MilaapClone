function empty(){
    document.querySelector("#src").src="https://tse4.mm.bing.net/th?id=OIP.Xxt-0lqG3TVFV3Vdl_zTPQHaHa&pid=Api&P=0"
    document.querySelector("#src").addEventListener("click",()=>{
        fill();
    })
let cont=  document.querySelector("#input");
let div = document.createElement("div");
let i1= document.createElement("input");
i1.type="checkbox";
i1.value="Enterprise Development";
i1.addEventListener("click",()=>{
    console.log(i1.value)
});
let p1= document.createElement("p");
p1.innerText="Enterprise Development";
div.style.display="flex";
div.append(i1,p1);
let div1 = document.createElement("div");
let i2= document.createElement("input");
i2.type="checkbox";
i2.value="Education";
i2.addEventListener("click",()=>{
    console.log(i2.value)
});
let p2= document.createElement("p");
p2.innerText="Education";
div1.style.display="flex";
div1.append(i2,p2);
cont.append(div,div1);

}
function fill(){
    let cont=  document.querySelector("#input");
    cont.innerHTML="";
    document.querySelector("#src").src="https://tse3.mm.bing.net/th?id=OIP.PLddS2AVcVsb-PDi3PDhpgHaHa&pid=Api&P=0"
}

document.querySelector("#src1").addEventListener("click",()=>{
    empty1();
})
function empty1(){
    document.querySelector("#src1").src="https://tse4.mm.bing.net/th?id=OIP.Xxt-0lqG3TVFV3Vdl_zTPQHaHa&pid=Api&P=0"
    document.querySelector("#src1").addEventListener("click",()=>{
        fill1();
    })
let cont=  document.querySelector("#input1");
let div = document.createElement("div");
let i1= document.createElement("input");
i1.type="checkbox";
i1.value="West Bengal";
i1.addEventListener("click",()=>{
    console.log(i1.value)
});
let p1= document.createElement("p");
p1.innerText="West Bengal";
div.style.display="flex";
div.append(i1,p1);
let div1 = document.createElement("div");
let i2= document.createElement("input");
i2.type="checkbox";
i2.value="Manipur";
i2.addEventListener("click",()=>{
    console.log(i2.value)
});
let p2= document.createElement("p");
p2.innerText="Manipur";
div1.style.display="flex";
div1.append(i2,p2);
cont.append(div,div1);

}
function fill1(){
    let cont=  document.querySelector("#input1");
    cont.innerHTML="";
    document.querySelector("#src1").src="https://tse3.mm.bing.net/th?id=OIP.PLddS2AVcVsb-PDi3PDhpgHaHa&pid=Api&P=0"
}
document.querySelector("#src2").addEventListener("click",()=>{
    empty2();
})
function empty2(){
    document.querySelector("#src2").src="https://tse4.mm.bing.net/th?id=OIP.Xxt-0lqG3TVFV3Vdl_zTPQHaHa&pid=Api&P=0"
    document.querySelector("#src2").addEventListener("click",()=>{
        fill2();
    })
let cont=  document.querySelector("#input2");
let div = document.createElement("div");
let i1= document.createElement("input");
i1.type="checkbox";
i1.value="12 months or less";
i1.addEventListener("click",()=>{
    console.log(i1.value)
});
let p1= document.createElement("p");
p1.innerText="12months or less";
div.style.display="flex";
div.append(i1,p1);
let div1 = document.createElement("div");
let i2= document.createElement("input");
i2.type="checkbox";
i2.value="13 to 17 months";
i2.addEventListener("click",()=>{
    console.log(i2.value)
});
let p2= document.createElement("p");
p2.innerText="13 to 17 months";
div1.style.display="flex";
div1.append(i2,p2);
let div2 = document.createElement("div");
let i3= document.createElement("input");
i3.type="checkbox";
i3.value="18 to 23 months";
i3.addEventListener("click",()=>{
    console.log(i3.value)
});
let p3= document.createElement("p");
p3.innerText="18 to 23 months";
div2.style.display="flex";
div2.append(i3,p3);
let div4 = document.createElement("div");
let i4= document.createElement("input");
i4.type="checkbox";
i4.value="24months and more";
i4.addEventListener("click",()=>{
    console.log(i4.value)
});
let p4= document.createElement("p");
p4.innerText="24months and more";
div4.style.display="flex";
div4.append(i4,p4);
cont.append(div,div1,div2,div4);

}
function fill2(){
    let cont=  document.querySelector("#input2");
    cont.innerHTML="";
    document.querySelector("#src2").src="https://tse3.mm.bing.net/th?id=OIP.PLddS2AVcVsb-PDi3PDhpgHaHa&pid=Api&P=0"
}
document.querySelector("#src3").addEventListener("click",()=>{
    empty3();
})
function empty3(){
    document.querySelector("#src3").src="https://tse4.mm.bing.net/th?id=OIP.Xxt-0lqG3TVFV3Vdl_zTPQHaHa&pid=Api&P=0"
    document.querySelector("#src3").addEventListener("click",()=>{
        fill3();
    })
let cont=  document.querySelector("#input3");
let div = document.createElement("div");
let i1= document.createElement("input");
i1.type="checkbox";
i1.value="Male";
i1.addEventListener("click",()=>{
    console.log(i1.value)
});
let p1= document.createElement("p");
p1.innerText="Male";
div.style.display="flex";
div.append(i1,p1);
let div1 = document.createElement("div");
let i2= document.createElement("input");
i2.type="checkbox";
i2.value="Female";
i2.addEventListener("click",()=>{
    console.log(i2.value)
});
let p2= document.createElement("p");
p2.innerText="Female";
div1.style.display="flex";
div1.append(i2,p2);
cont.append(div,div1);

}
function fill3(){
    let cont=  document.querySelector("#input3");
    cont.innerHTML="";
    document.querySelector("#src3").src="https://tse3.mm.bing.net/th?id=OIP.PLddS2AVcVsb-PDi3PDhpgHaHa&pid=Api&P=0"
}