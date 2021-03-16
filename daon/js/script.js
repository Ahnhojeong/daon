window.addEventListener('load',function(){

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

//kakao map

	new daum.roughmap.Lander({
		"timestamp" : "1615855105861",
		"key" : "24uif",
		"mapWidth" : "640",
		"mapHeight" : "360"
	}).render();





})