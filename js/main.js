$(function(){
    $('.image__slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        responsive: [
          {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
    })
  })

  const btn__burger = document.querySelector('#btn-burger');
  const btn__close = document.querySelector('#btn-close');
  const menu__open = document.querySelector('.dropdown');
  const header = document.querySelector('#header');
  
  
  btn__burger.addEventListener('click', function(){
      header.classList.add('menu-open');
  
      btn__close.addEventListener('click', function(){
  
          header.classList.replace('menu-open', 'header')
      })
  })