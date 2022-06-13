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