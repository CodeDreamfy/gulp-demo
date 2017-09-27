function configSlide3() {
  const $btn = $('.morebtn');
  const $slide3 = $('.slide3'); 
  $btn.on('click', function(){
    $slide3.find('.tab-1').addClass('hide');
    $slide3.find('.tab-2').addClass('tabmoreAni');
    $(this).hide();
  })
}

export default configSlide3