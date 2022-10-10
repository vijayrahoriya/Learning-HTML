$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times')
        $('.navbar').toggleClass('nav-toggle')
    })
    $(window).on('load scroll', function(){
        // $('.fa-bars').toggleClass('fa-times')
        // $('.navbar').toggleClass('nav-toggle')

        if($(window).scrollTop() > 30){
            $('.header').css({'background': "#6C5CE7", 'box-shadow': ' 0 .2rem .5rem rgba(0,0,0, .4)'});
        }
        else{
            $('.header').css({'background': "none", 'box-shadow': 'none'});
        }
    });

    $('.accordion-header').click(function(){
        $('.accordion .accordion-body').hide(1000);
        $(this).next('.accordion-body').show(1000);
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
    })

    $('#form').submit(function(){
        alert("your form has been submited")
    })

    
})