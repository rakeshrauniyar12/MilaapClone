
let p = document.getElementById('pa');
    let med = document.getElementById('med');
    med.onclick = ()=>{
        p.innerText = `${med.innerText}`;
        med.style.backgroundColor = 'rgba(128, 0, 0, 0.931)'
        med.style.color = 'white';
        ad.style.backgroundColor = ''
        ad.style.color = '';
        inn.style.backgroundColor = ''
        inn.style.color = '';
    };
    let ad = document.getElementById('ed');
    ad.onclick = ()=>{
        p.innerText =  `${ad.innerText}`;
        ad.style.backgroundColor = 'rgba(128, 0, 0, 0.931)'
        ad.style.color = 'white';
        med.style.backgroundColor = ''
        med.style.color = '';
        inn.style.backgroundColor = ''
        inn.style.color = '';
    };
    let inn = document.getElementById('in');
    inn.onclick = ()=>{
        p.innerText =  `${inn.innerText}`;
        inn.style.backgroundColor = 'rgba(128, 0, 0, 0.931)'
        inn.style.color = 'white';
        ad.style.backgroundColor = ''
        ad.style.color = '';
        med.style.backgroundColor = ''
        med.style.color = '';
    };