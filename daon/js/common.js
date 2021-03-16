$(function(){
    $('header').load('inc.html header article', init); 
    $('footer').load('inc.html footer div');

    function init(){

        $('nav li > a').on('click',function(){
            localStorage.pageNum = $(this).index();
            console.log(localStorage.pageNum);
            $(this).css({color:'#ceb581'});
        })
        $('nav li > a').eq(localStorage.pageNum).css({color:'#ceb581'});

    }

    $.ajax({
        url:'data.json',
        success:function(data){
            
            

            function dataFun(idx){
                var type='', title='', detail='', imgSrc='', tagList='',bbq='';
                

                data.special.forEach(function(value,key){
                    type = value.type;
                    if(idx == type){
                
                        
                        title = value.title;
                        detail = value.detail;
                        imgSrc = value.imgSrc;
                        

                        value.imgSrc.forEach(function(src){
                            bbq += "<img src='"+src+"' alt='"+title+"'>";
                        })
                        console.log(bbq)
                        
                        tagList = "<p>" + title + "</p>";
                        tagList += "<p>" + detail +"</p>";

                        $('.banner_list').html(bbq);
                        $('.spot_txt .txt').html(tagList);
                    }
                    

                //     "<div class='gallery'>"
                //     "<div class='banner prologue_slider'>"
                //         "<div class='banner_list cycle-slideshow'"
                //         "data-cycle-fx='scrollHorz'"
                //         "data-cycle-timeout=0"
                //         "data-cycle-prev='.banner .prev'"
                //         "data-cycle-next='.banner .next'"
                //         "data-cycle-pager='.banner .pager'"
                        
                //         ">"
                //             <img src="imgs/bbq_01.jpg" alt="slide1">
                //             <img src="imgs/bbq_02.jpg" alt="slide2">
                //             <img src="imgs/bbq_03.jpg" alt="slide3">
                //         "</div>
    
                //         <p class="controls">
                //             <a href="#" class="prev">
                //                 <i class="fas fa-chevron-left"></i>
                //             </a>
                //             <a href="#" class="next">
                //                 <i class="fas fa-chevron-right"></i>
                //             </a>
                //         </p>
                //         <p class="pager">
                //         </p>
                        
                //     </div> 
                // </div>
                });
               
            }
            dataFun('bbq');
            $('.prologue_tab ul li').on('click',function(e){
                e.preventDefault();
                var tabScr = $(this).attr("data-type");
                //console.log(tabScr);
                if( tabScr == type ){
                    
                    dataFun(tabScr);
                }
            })


            
        }
    });


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

})