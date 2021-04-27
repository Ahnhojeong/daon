$(function(){
    $('header').load('inc.html header article', init); 
    $('footer').load('inc.html footer div');

    function init(){
        if(localStorage.pageNum != 'main'){
            $('nav > ul > li').eq(localStorage.pageNum).find('.menutitle').css({color:'#ceb581'});
        }

        $('.head h1 a').on('click',function(e){
            e.preventDefault();
            localStorage.pageNum = 'main';
            var $this = $(this);
            setTimeout(function(){
                location.href = $this.attr('href');
            },100);
        })
        $('.menutitle').on('click',function(e){
            e.preventDefault();
            localStorage.pageNum = $(this).parents('li').index();
            var $this = $(this);
            setTimeout(function(){
                location.href = $this.attr('href');
            },100);
        })
        $('.submenu li a').on('click',function(){
            localStorage.pageNum = $(this).parent().parent().parent().index();
            var $this = $(this);
            setTimeout(function(){
                // location.href = $this.attr('href');
                window.open($this.attr('href'))
            },100);
        })


        switch(localStorage.pageNum){
            case '0' : main(); about(); break;
            case '1' : room(); break;
            case '2' : special(); break;
            case '3' : reservation(); break;
            default : main();
        }
    
        function special(){}
        function reservation(){}
        function room(){

        }
        
    
        //main & sub page - scroll (item up)
    function main(){
        var winHei,scrPos,imgPos,imgPos2;
        $(window).on('scroll',function(){
            winHei = $(window).height();
            scrPos = $(this).scrollTop();
    
            $('.main_txt-right, .main_txt-left').each(function(i){
                imgPos = $('.main_txt-right, .main_txt-left').eq(i).offset().top;
                if(imgPos - winHei < scrPos){
                    $('.main_txt-right, .main_txt-left').eq(i).addClass('active');
                }
            });
        });
    }
    function about(){
        var winHei,scrPos,imgPos,imgPos2;
        $(window).on('scroll',function(){
            winHei = $(window).height();
            scrPos = $(this).scrollTop();
    
            $('.about-img-one, .about-img-two, .about-img-three').each(function(i){
                imgPos2 = $('.about-img-one, .about-img-two, .about-img-three').eq(i).offset().top;
                if(imgPos2 - winHei < scrPos){
                    $('.about-img-one, .about-img-two, .about-img-three').eq(i).addClass('active');
                }
            })
    
        });
    }

    }
    // var winHei=0;
    // setTimeout(function(){
    //     winHei = $('main').outerHeight(true);
    //     $('html').height(winHei);
    // },1000);
    // console.log(winHei);





})