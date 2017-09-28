function configSlide10 () {
  const $transform = $('.tranform-wrap');
  const $aSwiperSwith = $('.slide10 .switch-container .switch-item');
  const $aSwiperTab = $('.slide10 .switch-tab a');
  const w = $aSwiperSwith.eq(0).width();
  $aSwiperTab.on('click', function() {
    const index = $(this).index()
    $(this).addClass('active').siblings().removeClass('active');
    $aSwiperSwith.eq(index).addClass('active').siblings().removeClass('active');
    $transform.css('transform','translateX('+ -w*index +'px)');
  });

  const switchItem1 = new Swiper('.switch-item1', {
    pagination : '.switch-item1-page',
    onTouchEnd: function(swiper){
      console.log("item1", swiper.touches.diff, swiper.activeIndex);
      if(swiper.activeIndex == 1 && swiper.touches.diff < 0 ) {
        $transform.css('transform','translateX('+ -w +'px)');
        $aSwiperTab.eq(1).addClass('active').siblings().removeClass('active');
      }
    }
  })
  const switchItem2 = new Swiper('.switch-item2', {
    pagination : '.switch-item2-page',
    onTouchEnd: function(swiper){
      if(swiper.activeIndex == 1 && swiper.touches.diff < 0 ) {
        $transform.css('transform','translateX('+ -w*2 +'px)');
        $aSwiperTab.eq(2).addClass('active').siblings().removeClass('active');
      }else if(swiper.activeIndex == 0 && swiper.touches.diff > 0) {
        $transform.css('transform','translateX('+ 0 +'px)');
        $aSwiperTab.eq(0).addClass('active').siblings().removeClass('active');
      }
    }
  })
  const switchItem3 = new Swiper('.switch-item3', {
    pagination : '.switch-item3-page',
    onTouchEnd: function(swiper){
      if(swiper.activeIndex == 1 && swiper.touches.diff < 0) {
        $transform.css('transform','translateX('+ -w*3 +'px)');
        $aSwiperTab.eq(3).addClass('active').siblings().removeClass('active');
      }else if(swiper.activeIndex == 0 && swiper.touches.diff > 0) {
        $transform.css('transform','translateX('+ -w +'px)');
        $aSwiperTab.eq(1).addClass('active').siblings().removeClass('active');
      }
    }
  })
  const switchItem4 = new Swiper('.switch-item4', {
    onTouchEnd: function(swiper){
      if(swiper.touches.diff < 0) {
        $transform.css('transform','translateX('+ -w*4 +'px)');
        $aSwiperTab.eq(4).addClass('active').siblings().removeClass('active');
      }else if(swiper.touches.diff > 0) {
        $transform.css('transform','translateX('+ -w*2 +'px)');
        $aSwiperTab.eq(2).addClass('active').siblings().removeClass('active');
      }
    }
  })
  const switchItem5 = new Swiper('.switch-item5', {
    onTouchEnd: function(swiper){
      if(swiper.touches.diff < 0) {
        $transform.css('transform','translateX('+ -w*5 +'px)');
        $aSwiperTab.eq(5).addClass('active').siblings().removeClass('active');
      }else if(swiper.touches.diff > 0) {
        $transform.css('transform','translateX('+ -w*3 +'px)');
        $aSwiperTab.eq(3).addClass('active').siblings().removeClass('active');
      }
    }
  })
  const switchItem6 = new Swiper('.switch-item6', {
    onTouchEnd: function(swiper){
      if(swiper.touches.diff < 0) {
        $transform.css('transform','translateX('+ 0 +'px)');
        $aSwiperTab.eq(0).addClass('active').siblings().removeClass('active');
      }else if(swiper.touches.diff > 0) {
        $transform.css('transform','translateX('+ -w*4 +'px)');
        $aSwiperTab.eq(4).addClass('active').siblings().removeClass('active');
      }
    }
  })
}

export default configSlide10;