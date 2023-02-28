const closeMenu=document.getElementById('burger-menu-close');
const burger=document.getElementById('burger');
const burgerMenu=document.getElementById('burger-menu');
const body=document.getElementById('body');
const mainimg=document.getElementById('main-img');
const avatar=document.getElementById('avatar');
let pice =document.getElementById('pice');
const right=document.getElementById('right');
let pice1=0;
const plius=document.getElementById('plius');
const minus=document.getElementById('minus');
const basket=document.getElementById('basket');
const basketButton=document.getElementById('avatar');
const chosenBakset=document.getElementById('basketActive');
const emptyBasket=document.getElementById('emptyBasket');
const chekout=document.getElementById('chekout');
let money=document.getElementById('money');
let q = 0;  
let much=document.getElementById('much');
const active = document.getElementById('activeImg');
const absolute=document.getElementById('absolute');
const leftCont=document.getElementById('left-cont')
const next=document.getElementById('next2');
const back=document.getElementById('back2');

function openactive(){
    if(screen.width<600){
        console.log('')
    }else{
    absolute.style.display='block';
    body.style.backgroundColor='rgba(0, 0, 0, 0.78)';
    right.style.opacity='0.5'
    leftCont.style.opacity='0.5';
    mainimg.style.width===100+'%';
    }
}
function closeactive(){
    absolute.style.display='none';
    body.style.backgroundColor='white';
    right.style.opacity='1'
    leftCont.style.opacity='1'
}
function basketfun(){
    q+=1;
    if(q % 2 === 0){
        basket.style.display='none'
    }else{
        basket.style.display='block'
    }
}

function openMenu(){
    burgerMenu.style.display='block';
    body.style.backgroundColor='rgba(128, 126, 127, 0.53)'
    burgerMenu.style.opacity='1';
    mainimg.style.opacity='0.5';
    avatar.style.opacity='0.5';
    right.style.opacity='0.5';
    leftCont.style.opacity='0.5';
}
function closeMenue(){
    burgerMenu.style.display='none';
    body.style.backgroundColor='white'
    mainimg.style.opacity='1';
    avatar.style.opacity='1';
    right.style.opacity='1';
    leftCont.style.opacity='1';
}


const notification=document.getElementById('notification')


function add(){
    pice1+=1;
    
    chosenBakset.style.display='flex';
    emptyBasket.style.display='none';
    chekout.style.display='block';
    if(pice1>0){
        notification.style.display='block';
        notification.innerHTML=pice1;
        much.innerHTML=pice1;
        money.innerHTML='$'+pice1*125+'.00';
        pice.innerHTML=pice1;
    }else{
        notification.style.display='none';
        notification.innerHTML=pice1;
        much.innerHTML=pice1;
        money.innerHTML='$'+pice1*125+'.00';
        pice.innerHTML=pice1;
    }
}
function minuss(){
    pice1 -=1;
    if(pice1 > 0){
        notification.innerHTML=pice1;
     much.innerHTML=pice1;
     pice.innerHTML=pice1;
     money.innerHTML='$'+pice1*125+'.00';
    }else if(pice1 >=0){
           notification.innerHTML=pice1;
        much.innerHTML=pice1;
        notification.style.display='none';
        pice.innerHTML=pice1;
        money.innerHTML='$'+pice1*125+'.00';
    }
    else if(pice1<0){
        pice1++;
    }

}
function deleteBasket(){
    chosenBakset.style.display='none';
    emptyBasket.style.display='block';
    chekout.style.display='none';
    pice1=0;
    pice.innerHTML=0;
    notification.style.display='none';
    notification.innerHTML=pice;
}
let img1=document.getElementById('img1')
let img2=document.getElementById('img2')
let img3=document.getElementById('img3')
let img4=document.getElementById('img4')
let img5=document.getElementById('img5')
let mainimg2=document.getElementById('mainimg')
let imgcount=1;
let backimgcount=1
function backimg(){
    backimgcount--;
    if(backimgcount===0){
        mainimg2.src='./images/image-product-4.jpg';
        img2.style.border='none';
        img2.style.opacity='1';
        img5.style.opacity='0.5';
        img5.style.border='solid 3px hsl(26, 100%, 50%)';
    }
    if(backimgcount===-1){
        mainimg2.src='./images/image-product-3.jpg';
        img5.style.border='none';
        img5.style.opacity='1';
        img4.style.opacity='0.5';
        img4.style.border='solid 3px hsl(26, 100%, 50%)';
    }
    else if(backimgcount===-2){
        mainimg2.src='./images/image-product-2.jpg';
        img4.style.border='none';
        img4.style.opacity='1';
        img3.style.opacity='0.5';
        img3.style.border='solid 3px hsl(26, 100%, 50%)';
    }
    if(backimgcount===-3){
        backimgcount+=4;
        mainimg2.src='./images/image-product-1.jpg';
        img3.style.border='none';
        img3.style.opacity='1';
        img2.style.opacity='0.5';
        img2.style.border='solid 3px hsl(26, 100%, 50%)';
    }

}
function nextimg(){
    imgcount++;
    if(imgcount===2){
        mainimg2.src= './images/image-product-2.jpg';
        img3.style.opacity='0.5';
        img3.style.border='solid 3px hsl(26, 100%, 50%)';
        img2.style.opacity='1';
        img2.style.border='none'
    }else if(imgcount===3){
        mainimg2.src= './images/image-product-3.jpg';
        img4.style.opacity='0.5';
        img4.style.border='solid 3px hsl(26, 100%, 50%)';
        img3.style.opacity='1';
        img3.style.border='none';
    }else if(imgcount===4){
        mainimg2.src= './images/image-product-4.jpg';
        img5.style.opacity='0.5';
        img5.style.border='solid 3px hsl(26, 100%, 50%)';
        img4.style.opacity='1';
        img4.style.border='none';
    }else if(imgcount === 5){
        imgcount-=4;
        mainimg2.src='./images/image-product-1.jpg';
        img2.style.opacity='0.5';
        img2.style.border='solid 3px hsl(26, 100%, 50%)';
        img5.style.opacity='1';
        img5.style.border='none';
    }
}



onscroll= function gk(){
    if(screen.width>600){
        next.style.display='none';
        back.style.display='none';
    }
    else{
        next.style.display='block';
        back.style.display='block';
    }
}
function nextimg2(){
    imgcount++;
if(imgcount===2){
    mainimg.src= './images/image-product-2.jpg';
  
}else if(imgcount===3){
    mainimg.src= './images/image-product-3.jpg';
  
}else if(imgcount===4){
    mainimg.src= './images/image-product-4.jpg';

}else if(imgcount === 5){
    imgcount-=4;
    mainimg.src='./images/image-product-1.jpg';
}

}
function backimg2(){
    imgcount++;
if(imgcount===2){
    mainimg.src= './images/image-product-2.jpg';
  
}else if(imgcount===3){
    mainimg.src= './images/image-product-3.jpg';
  
}else if(imgcount===4){
    mainimg.src= './images/image-product-4.jpg';

}else if(imgcount === 5){
    imgcount-=4;
    mainimg.src='./images/image-product-1.jpg';
}

}
