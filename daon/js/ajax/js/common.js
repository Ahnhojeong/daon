$(function(){
    
    $.ajax({
        url:'data.json',
        success:function(data){
            var type, title, detail, imgSrc, tagList='';

            data.special.forEach(function(value,key){
                type = value.type;
                title = value.title;
                detail = value.detail;
                imgSrc = value.imgSrc;
                console.log(detail);
    
                tagList += "<div data-type="+ type +">";
                tagList += "<p>" + title + "</p>";
                tagList += "<p>" + detail[0] + "<small>" + detail[1] + "</small></p></div>";
            });
            $('.spot_txt').html(tagList);
            
        }
    });
})