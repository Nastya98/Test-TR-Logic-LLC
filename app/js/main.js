
                 
$(function(){
 
    $(window).scroll(function(){
              if($(this).scrollTop()>480){
                  $('.visible-block').addClass('top_nav');
              }
              else if ($(this).scrollTop()<140){
                  $('.visible-block').removeClass('top_nav');
              }
          });

    $('.slide-aside-left').click(function(){
      $('.aside-left').animate({width: 'toggle'});
});
 $('.slide-aside-right').click(function(){
      $('.aside-right').animate({width: 'toggle'});
});
});