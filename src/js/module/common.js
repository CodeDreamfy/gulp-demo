function initSwiper(){
  const $aSlide = $('.swiper-slide');
  const indexSwiper = new Swiper('#indexSwiper', {
    direction: 'vertical',
    initialSlide: 9,
    onSlideChangeStart: ({activeIndex})=>{
      if(activeIndex != 0) {
        $aSlide.eq(activeIndex).find('.slide-wrap').removeClass('animate')
      }
    },
    onSlideChangeEnd: function({activeIndex}){
      if(activeIndex != 0) {
        $aSlide.eq(activeIndex).find('.slide-wrap').addClass('animate')
      }
    }
  })
  return indexSwiper
  
}
export default initSwiper