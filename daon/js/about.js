
$(function(){
    //parallax
    var $section = $('.parallax > div'),
    $sectionInfo = [];
    
    $section.each(function(i){
        var $this = $(this);      
        $sectionInfo.push($this.offset().top);
    }); //section each문
    
    console.log($sectionInfo);
    $section.css({position:'fixed'}); 

    var loop;
    $(window).scroll(function(){
        var sct = $(this).scrollTop();
        // console.log(sct);
        //clearTimeout(loop);
        //loop = setTimeout(function(){
            $section.each(function(idx){ //idx = 0, 1, 2, 3 , ...
                var $this = $(this);
                var $newTop = $sectionInfo[idx] - sct; 
                if(sct > $sectionInfo[idx] ){
                    $newTop *= 0.5; 
                } 
                
                $this.css({top:$newTop+'px'});
            })
        //},50);
    }); // window scroll event

    var secHei01 = $('.pSection01').children('div').outerHeight(true);
    $('.special01').height(secHei01);
    
    var foot = $('footer').outerHeight(true);
    var secHei02 = $('.special_spot').outerHeight(true)+foot;
    $('.special02').height(secHei02);
    console.log(secHei02)

    var wrapHei = secHei01+secHei02;
    $('.tripwrap').height(wrapHei);


});
