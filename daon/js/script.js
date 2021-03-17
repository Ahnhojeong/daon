
window.addEventListener('load',function(){

//slide event

switch(localStorage.pageNum){
    case '0' : about(); break;
    case '1' : room(); break;
    case '2' : special(); break;
    case '3' : reservation(); break;
    default : main();
}
function special(){}
function reservation(){}


function main(){
    //slide
    var slide = document.querySelector('.slides div'); 
    var slideCount = slide.querySelectorAll('img').length; 
    var btnBack = document.querySelector('.back');
    var btnNext = document.querySelector('.next');
    var current = 0;
   
    function next(){
        current++;
        if(current == slideCount) current = 0;
        slide.style = 'transform:translateX('+ -100 * current + '%)';
    }
   
    function back(){
        current--; 
        if(current == -1) current = slideCount-1; 
        slide.style = 'transform:translateX('+ -100 * current + '%)'; 
    }
   
    btnNext.addEventListener('click',next);
    btnBack.addEventListener('click',back);
   
   
   
    //slide infinite
   
   
    setInterval(infinite,5000); 
   
    var num = 0;
    function infinite(){
        num++;  
        if(num == slideCount) num = 0; 
        slide.style = 'transform:translateX('+ -100 * num + '%)'; 
    }
}


//top event
    var btt = document.querySelector('.fixed'),
    docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;

// 문서 높이 계산
docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight);
if(docHeight != 0){
    offset = docHeight / 5;
   // console.log(offset)
}


// 스크롤 이벤트 추가
window.addEventListener('scroll', function(){
    scrollPos = docElem.scrollTop;
    console.log(scrollPos);
    if(scrollPos > offset){
        btt.classList.add('back');
    }else{
        btt.classList.remove('back');
    }
});

// top 클릭이벤트
btt.addEventListener('click',function(ev){
    ev.preventDefault();
    scrollToTop();
});
function scrollToTop(){ 
    var scrollInterval = setInterval(function(){
        if(scrollPos != 0){
            window.scrollBy(0,-55);
        }else{
            clearInterval(scrollInterval);
        }
    },15);
}

function about(){
    //kakao map
    new daum.roughmap.Lander({
        "timestamp" : "1615855105861",
        "key" : "24uif",
        "mapWidth" : "640",
        "mapHeight" : "360"
    }).render();
}


});