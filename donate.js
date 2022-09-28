let data = [
    {img:"https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1664110172/production/images/campaign/571268/medical_1553587798_1664104680.jpg",desc:"3 Year Old Kid With Multi Organ Failure On ECMO Threapy, Need Your Help",raise:"$14,37,030",create:"Obaidullah"},
    {img:"https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1663754600/production/images/campaign/569349/IMG-20220921-WA0003_a4xvoa_1663754845.jpg",desc:"Support Priyanka To Recover From Accidental Injuries",raise:"$8,74,639",create:"T Yeswanth"},
    {img:"https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1662482717/production/images/campaign/562290/medical_1553587798_1662482716.jpg",desc:"Save a Life - Help my father get a liver Transplant",raise:"$12,43,873",create:"Akansha Pandey"},
    {img:"https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1664093694/production/images/campaign/571176/WhatsApp_Image_2022-09-25_at_13.35.36_bmb5ga_1664093698.jpg",desc:"In the memory of Sanjai - Education Fund for Twin Daughters",raise:"$7,77,145",create:"Umang Mathil"},
    {img:"https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1663660274/production/images/campaign/568791/IMG-20220919-WA0022_pfkowf_1663661020.jpg",desc:"Save Gaumata from Lumpi Skin",raise:"$4,97,509",create:"Jai Sia Ram"},
    {img:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1661095595/production/images/campaign/553835/nuvjufeu6mct6jcba4ie_1661095598.jpg",desc:"Aravind(TR) Srinivasan Birthday Fundraiser For Nellai Cancer Hospital",raise:"$8,56,795",create:"Tharuvai Angel"},
];
display();
function display(){

    data.forEach((ele)=>{
        let div = document.createElement('div');
        
        div.setAttribute('class','card');
        let img = document.createElement('img');
        img.setAttribute('class','img')
        img.src = ele.img;
        let desc = document.createElement('p');
        desc.innerText = ele.desc;
        let cr = document.createElement('div');
        cr.setAttribute('id','cr');
        let r = document.createElement('div');
        let raise = document.createElement('p');
        raise.innerText = `Raised: ${ele.raise}`;
        r.append(raise);
        let c = document.createElement('div');
        let create = document.createElement('p');
        create.innerText = `Created By: ${ele.create}`;
        c.append(create);
        cr.append(r,c);
        div.append(img,desc,cr);
        document.getElementById('cards').append(div);
    })
}