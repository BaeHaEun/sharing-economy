//visual animation
const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});

new Swiper('.notice .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 36,
  centeredSlides: true,
  loop: true,
  pagination: {
      el: '.notice .swiper-pagination',
      clickable: true
  },
  navigation: {
      prevEl: '.notice .swiper-prev',
      nextEl: '.notice .swiper-next'
  }
})

new Swiper('.ent-list .swiper-container', {
  autoplay: true, 
  //slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  navigation: {
      prevEl: '.ent-list .swiper-prev',
      nextEl: '.ent-list .swiper-next'
  }
})


