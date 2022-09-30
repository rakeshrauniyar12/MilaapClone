let cartArr=JSON.parse(localStorage.getItem("loan"))||[];
function appendData(){
    let cont= document.querySelector("#container1");
    cont.innerHTML="";
    arr.forEach((el)=>{
        let div= document.createElement("div");
        let div4= document.createElement("div");
        let div1= document.createElement("div");
        let img= document.createElement("img");
        img.src=el.image;
        img.style.marginTop="20px"
        let div3= document.createElement("div");
        div3.style.display="flex";
        let p1= document.createElement("p");
        p1.innerText=`Funded ${el.funded}`;
        p1.style.marginRight="60%";
        p1.style.marginLeft="2%";
        p1.style.color="#9c3963"
        p1.style.width="10%"
        let p2= document.createElement("p");
        p2.innerText=`Still Requires ${el.still_require}`;
        p2.style.width="25%"
         div3.append(p1,p2);
         let btn= document.createElement("button");
         btn.innerText="Complete the Loan";
         btn.addEventListener("click",()=>{
            if(hide(el,btn)===true){
                cartArr.push(el);
                localStorage.setItem("loan",JSON.stringify(cartArr));
            } 
         })
         btn.style.width="90%";
         btn.style.padding="15px"
         btn.style.border="1px solid #9c3963";
         btn.style.color="#9c3963";
         btn.style.backgroundColor="white";
         btn.style.fontSize="15px";
         btn.style.marginLeft="3%";
         btn.style.cursor="pointer";
         btn.style.fontWeight="bolder";
         btn.style.borderRadius="30px";
         div.append(img,div3,btn);
         let h1= document.createElement("h1");
         h1.innerText=el.name;
         h1.style.color="#9c3963";
         let p3= document.createElement("p");
         p3.innerText=el.location;
         let p4= document.createElement("p");
         p4.innerText=`Purpose: ${el.purpose}`;
         let p5= document.createElement("p");
         p5.innerText=el.description;
         let div5= document.createElement("div");
         div5.setAttribute("id","hidden");
         let input= document.createElement("input");
         input.placeholder=2500;
         let img1 = document.createElement("img");
         img1.src="https://tse2.mm.bing.net/th?id=OIP.zAvtDGShk_9AQZwzGqWRAwHaK5&pid=Api&P=0";
         img1.style.height="13px";
         img1.style.border="1px solid grey";
         img1.style.backgroundColor="grey";
         input.style.border="1px solid white";
         input.style.textDecoration="under-line";
         let btn2= document.createElement("button");
         btn2.innerText="Lend";
         btn2.style.width="25%";
         btn2.style.border="1px solid #9c3963";
         btn2.style.color="white";
         btn2.style.backgroundColor="#9c3963";
         btn2.style.fontSize="15px";
        btn2.style.padding="10px"
         btn2.style.cursor="pointer";
         btn2.style.fontWeight="bolder";
         btn2.style.borderRadius="20px";
         div5.append(img1,input,btn2);
         div1.append(h1,p3,p4,p5,div5);
         div4.append(div,div1);
         cont.append(div4);
    })
}
appendData(arr);

let hide=(e,btn)=>{
    btn.style.border="1px solid white";
    btn.style.color="white";
    btn.style.backgroundColor="white";
    let cont1=document.querySelector("#hidden");
    cont1.innerHTML=""
    let btn1= document.createElement("button");
    btn1.innerText="Added to Basket";
    btn1.style.width="60%";
    btn1.style.padding="15px"
    btn1.style.border="1px solid #9c3963";
    btn1.style.color="white";
    btn1.style.backgroundColor="#bf709f";
    btn1.style.fontSize="15px";
    btn1.style.marginLeft="3%";
    btn1.style.cursor="pointer";
    btn1.style.fontWeight="bolder";
    btn1.style.borderRadius="30px";
      cont1.append(btn1);
    let filtered= cartArr.filter((el)=>{
          return el===e;
    })
    if(filtered.length>0){
        return false;
    } else {
        return true;
    }
}

let popupShow=()=>{
    let cont= document.querySelector("#pp");
    cont.style.borderTop="1px solid grey";
     cont.innerHTML="";
     document.querySelector("#popup11").style.visibility="visible";
    cartArr.forEach((el,index)=>{
        let div = document.createElement("div");
        div.style.display="flex";
        div.style.margin="10px";
        div.style.justifyContent="space-evenly";
        let img= document.createElement("img");
        img.src=el.image;
        img.style.height="50px"
        img.style.marginTop="10px"
        img.style.marginBottom="20px"
        img.style.width="15%"
        let h2 = document.createElement("h2");
        h2.innerText=el.name;
        h2.style.marginLeft="30px";
        h2.style.marginRight="30px";
        let p= document.createElement("p");
        p.innerText=`Rs:- ${el.funded}`;
        p.style.marginTop="24px";
        let btn= document.createElement("button");
        btn.innerText="Remove";
        btn.style.padding="5px 10px";
        btn.style.width="15%";
        btn.style.margin="20px 5px";
        btn.style.height="30px";
        btn.addEventListener("click",()=>{
            cartArr.splice(index,1);
            localStorage.setItem("loan",JSON.stringify(cartArr));
            popupShow();
        })
        div.append(img,h2,p,btn);
        cont.append(div);
    })
}
document.querySelector("#pay22").addEventListener("click",()=>{
    payment();
})
// popupShow();
let payment=()=>{
    window.location.href="./payment/payment.html";
}

 


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
   filter11(i1.value);
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
i1.value="Shantipur, West Bengal";
i1.addEventListener("click",()=>{
    filter11(i1.value);
});
let p1= document.createElement("p");
p1.innerText="West Bengal";
div.style.display="flex";
div.append(i1,p1);
let div1 = document.createElement("div");
let i2= document.createElement("input");
i2.type="checkbox";
i2.value="Sega Road Branch, Manipur";
i2.addEventListener("click",()=>{
    filter11(i2.value)
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

let filter11=(value)=>{
    let filtered= arr.filter((el)=>{
        return  el.location===value;
    });
    appendData(filtered);
}
document.querySelector("#select").addEventListener("change",()=>{
   filter22();
})
let filter22=()=>{
    let value= document.querySelector("#select").value;
    let filtered= arr.filter((el)=>{
        if(value==="recent"){
            return el.recent===value;
        }
        if(value==="popularity"){
            return el.popularity===value;
        }
    });
    appendData(filtered);
}