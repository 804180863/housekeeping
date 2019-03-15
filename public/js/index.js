$(function () {
  var $header = $('#header');
  $(window).scroll(function () {
    if($(this).scrollTop()>150){
      $header.addClass('on');
    }else {
      $header.removeClass('on');
    }
  })
})