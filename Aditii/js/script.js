$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.menu').toggleClass('active');
      $('body').toggleClass('lock')
   });
});

$(document).ready(function () {
   let position = 0;
   const slidesToShow = 3;
   const slidesToScroll = 1;
   const container = $('.slider-container');
   const track = $('.slider-track');
   const item = $('.slider-item');
   const itemCount = item.length;
   const btnPrev = $('.btn-prev');
   const btnNext = $('.btn-next');
   const itemWidth = container.width() / slidesToShow;
   const movePosition = slidesToScroll * itemWidth;

   item.each(function (index, item) {
      $(item).css({
         minWidth: itemWidth,
      });
   });

   btnPrev.click(function () {
      console.log(position);
      const itemsLeft = itemCount / itemWidth;

      position += movePosition;

      setPosition();
      checkBtns();
   });

   btnNext.click(function () {
      console.log(position);
      const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

      setPosition();
      checkBtns();
   });

   const setPosition = () => {
      track.css({
         transform: `translateX(${position}px)`
      });
   };

   const checkBtns = () => {
      btnPrev.prop('disabled', position === 0)
      btnNext.prop('disabled', position <= -(itemCount - slidesToShow) * itemWidth);
   };

   checkBtns();
});
