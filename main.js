'use strict';
const body = document.querySelector('body');

const oneDev = document.querySelector('.oneDev');
const twoDev = document.querySelectorAll('.twoDev');
const until = document.querySelector('.until');
const searchIcon = document.querySelector('.searchBtn');
const searchBar = document.querySelector('.input__search');
const searchForm = document.querySelector('.search__form');

const lang = document.querySelector('.lang');
const kor = document.querySelector('.kor');
const eng = document.querySelector('.eng');

const toggleBtn = document.querySelector('.toggle-btn');
const menuArea = document.querySelector('#menuArea');
const xBtn = document.querySelector('.x-btn');

const menuList = document.querySelector('.menu__list');

const infoContainer = document.querySelector('.info__container');

const businessBox = document.querySelectorAll('.business__box');
const businessDes = document.querySelectorAll('.business__des');
const businessImg = document.querySelectorAll('.business__img');
const businessSpan = document.querySelectorAll('.business__des span')
const winHeight = window.innerHeight;
const winHalfHeight = window.innerHeight - 250;

let clickBoolean = false;

window.addEventListener('scroll', ()=>{
  showBusiness();
  showInfo();
});

function showBusiness(){
  for(let i=0; i <businessImg.length; i++){
    const clientTop = businessImg[i].getBoundingClientRect().top;
    if(winHalfHeight > clientTop){
      businessAddFade(i);
    }else if(winHeight < clientTop){
      businessRemoveFade(i);
    }
  }
}

function businessAddFade(i){
  businessImg[i].classList.add("fade-in");
  businessDes[i].classList.add("fade-in");
  businessSpan[i].classList.add("fade-down");
};

function businessRemoveFade(i){
  businessImg[i].classList.remove("fade-in");  
  businessDes[i].classList.remove("fade-in");
  businessSpan[i].classList.remove("fade-down");
}

function showInfo(){
  const clientTop = infoContainer.getBoundingClientRect().top;
  if(winHalfHeight > clientTop){
    infoAddFade();
  }else if(winHeight < clientTop){
    infoRemoveFade();
  }
}

function infoAddFade(){
  infoContainer.classList.add('fade-down');
};

function infoRemoveFade(){
  infoContainer.classList.remove('fade-down');
}




toggleBtn.addEventListener('click', ()=>{
  toggleMenu();
});

xBtn.addEventListener('click', ()=>{
  toggleMenu();
});


lang.addEventListener('click', (event)=> {
  stylingLang(event);
});

searchIcon.addEventListener('click', ()=>{
  if(clickBoolean === true){
    hideSearchBar();
  }else {
    showSearchBar();
  }
});


function showSearchBar(){
  searchForm.style.display='block';
  lang.style.display='none';
  searchIcon.innerHTML = `<i class="fas fa-times"></i>`;
  clickBoolean = true;
}

function hideSearchBar(){
  searchForm.style.display='none';
  lang.style.display='flex';
  searchIcon.innerHTML = `<i class="fas fa-search"></i>`;
  clickBoolean = false;
};


oneDev.addEventListener('mouseover', (event)=>{
  const index = event.target.dataset.index;
  leaveNav(index);
  switch(index){
    case 'one': hideTwoDev(0);
      break;
    case 'two' : hideTwoDev(1);
      break;
    case 'three' : hideTwoDev(2);
      break;
    case 'four' : hideTwoDev(3);
      break;
  }
});

until.addEventListener('mouseover', ()=>{
  twoDev.forEach(dev=>{
    dev.style.display = 'none';
  })
});


function leaveNav(){
  twoDev.forEach(dev=>{
    dev.addEventListener('mouseleave', (event)=>{
      dev.style.display='none';
    });
  });
};


function hideTwoDev(number) {
  for(let i=0; i<=3; i++){
    twoDev[i].style.display='none';
    if(i === number){
      twoDev[number].style.display = 'block';
    }
  }
};


function stylingLang(){
  const target = event.target
  if(target.className === 'eng'){
    eng.classList.add('on');
    kor.classList.remove('on');
  }else if(target.className === 'kor'){
    kor.classList.add('on');
    eng.classList.remove('on');
  }
}

function toggleMenu(){
  const open = menuArea.classList.contains('open');
  if(open){
    body.style.overflow = 'visible'
  }else{
  body.style.overflow = 'hidden'
  }
  menuArea.classList.toggle('open');
  menuList.classList.toggle('open');
}

