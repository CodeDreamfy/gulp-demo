function configSlide10 () {
  const $aSwiperSwith = $('.slide10 .switch-container .switch-item');
  $('.slide10 .switch-tab a').on('click', function() {
    const index = $(this).index()
    $(this).addClass('active').siblings().removeClass('active');
    $aSwiperSwith.eq(index).addClass('active').siblings().removeClass('active');
  });

  const switchItem1 = new Swiper('.switchItem1', {})
  
}

export default configSlide10;