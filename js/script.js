$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle')
    })
    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times')
        $('.navbar').removeClass('.nav-toggle')

        if($(window).scrollTop() > 30){
            $('.header').css({'background': "cyan", 'box-shadow': ' 0 .2rem .5rem rgba(0,0,0, .3)'});
        }
        else{
            $('.header').css({'background': "#fff", 'box-shadow': '0 .2rem .5rem rgba(0,0,0,.3)'});
        }
    });
    

    $('.count').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 5000,
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum + '+');
          }
        });
      });

      $('.project').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
          enabled:true
        }
      });
    
})
