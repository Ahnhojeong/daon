$((function(){$(window).scroll((function(){var o=$(this).scrollTop();$(".imgHolder img").css({top:o/2})})),$(".title").on("click","",(function(){var o=$("section").first().position().top;$("html, body").animate({scrollTop:o},{easing:"swing",duration:800})}))}));