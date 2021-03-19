
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

});
