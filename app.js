$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('header').addClass('headeronmove');
        }else{
            $('header').removeClass('headeronmove');
        }
    });
});

const section = document.getElementById("presentacion");
