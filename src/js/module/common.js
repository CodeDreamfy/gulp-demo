function initSwiper(){
  const $aSlide = $('.index-slide-wrap > .swiper-slide');
  const indexSwiper = new Swiper('#indexSwiper', {
    direction: 'vertical',
    //initialSlide: 9,
    onSlideChangeEnd: function({activeIndex}){
      console.log($aSlide.eq(activeIndex))
      $aSlide.eq(activeIndex).addClass('animate').siblings().removeClass('animate')
    }
  })
  return indexSwiper
  
}
export default initSwiper