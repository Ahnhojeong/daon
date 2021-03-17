$(function(){
    $('header').load('inc.html header article', init); 
    $('footer').load('inc.html footer div');

    function init(){
        if(localStorage.pageNum != 'main'){
            $('nav > ul > li').eq(localStorage.pageNum).find('a').css({color:'#ceb581'});
        }

        $('.head h1 a').on('click',function(e){
            e.preventDefault();
            localStorage.pageNum = 'main';
            var $this = $(this);
            setTimeout(function(){
                location.href = $this.attr('href');
            },100);
        })
        $('nav li > a').on('click',function(e){
            e.preventDefault();
            localStorage.pageNum = $(this).parents('li').index();
            var $this = $(this);
            setTimeout(function(){
                location.href = $this.attr('href');
            },100);
        })

    }
    
    switch(localStorage.pageNum){
        case '0' : about(); break;
        case '1' : room(); break;
        case '2' : special(); break;
        case '3' : reservation(); break;
        default : main();
    }

    function special(){}
    function reservation(){}
    
    // $.ajax({
    //     url:'data.json',
    //     success:function(data){
            
            

    //         function dataFun(idx){
    //             var type='', title='', detail='', imgSrc='', tagList='',bbq='';
                

    //             data.special.forEach(function(value,key){
    //                 type = value.type;
    //                 if(idx == type){
                
                        
    //                     title = value.title;
    //                     detail = value.detail;
    //                     imgSrc = value.imgSrc;
                        

    //                     value.imgSrc.forEach(function(src){
    //                         bbq += "<img src='"+src+"' alt='"+title+"'>";
    //                     })
    //                     console.log(bbq)
                        
    //                     tagList = "<p>" + title + "</p>";
    //                     tagList += "<p>" + detail +"</p>";

    //                     $('.banner_list').html(bbq);
    //                     $('.spot_txt .txt').html(tagList);
    //                 }
               
    //         }
    //         dataFun('bbq');
    //         $('.prologue_tab ul li').on('click',function(e){
    //             e.preventDefault();
    //             var tabScr = $(this).attr("data-type");
    //             //console.log(tabScr);
    //             if( tabScr == type ){
                    
    //                 dataFun(tabScr);
    //             }
    //         })


            
    //     }
    // });

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

    


function room(){
    //room detail click event
    $('.room_spot li').eq(0).on('click',function(){
        $('.only101').addClass('pop');
    });
    $('.room_spot li').eq(1).on('click',function(){
        $('.only102').addClass('pop');
    });
    $('.room_spot li').eq(2).on('click',function(){
        $('.love101').addClass('pop');
    });
    $('.room_spot li').eq(3).on('click',function(){
        $('.love102').addClass('pop');
    });

    $('.close').on('click',function(){
        $('.mainspot').removeClass('pop');
    })

    //room photo slide event
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true
      });
  
      $('.regular').on({
        'beforeChange': function (event, slick, currentSlide, nextSlide) {
          console.log('before');
        },
        'afterChange': function (slick, currentSlide) {
          console.log('after');
        }
  
      });
}


})