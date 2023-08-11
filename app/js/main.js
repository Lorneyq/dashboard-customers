$(function () {
    $('.nav__more-btn').click(function(){
        $(".nav__more-btn, .nav").toggleClass('open');
    })
    
    $(document).on('mouseup', function(e){
        let s = $('.nav.open');
        if(!s.is(e.target) && s.has(e.target).length === 0) {
          s.removeClass('open');
        }
      });
})


