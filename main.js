'use strict';

const oneDev = document.querySelector('.oneDev');
const twoDev = document.querySelectorAll('.twoDev');
const until = document.querySelector('.until');
const searchIcon = document.querySelector('.searchBtn');
const searchBar = document.querySelector('.input__search');
const searchForm = document.querySelector('.search__form');

const lang = document.querySelector('.lang');
const kor = document.querySelector('.kor');
const eng = document.querySelector('.eng');

lang.addEventListener('click', (event)=> {
  const target = event.target
  if(target.className === 'eng'){
    eng.classList.add('on');
    kor.classList.remove('on');
  }else if(target.className === 'kor'){
    kor.classList.add('on');
    eng.classList.remove('on');
  }
});

let clickBoolean = false;

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


