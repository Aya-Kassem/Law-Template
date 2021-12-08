// FIXED NAVBAR ON SCROLL ................
window.addEventListener('scroll', ()=> {
    let windowScroll = window.scrollY;
    let topSection = document.querySelector('.top-section').offsetHeight;
    let featureSection = document.querySelector('#top-feature').offsetHeight;
    if ( windowScroll >= topSection ){
        document.querySelector('.navbar').classList.add('fixed-top');
        document.querySelector('.navbar').classList.remove('py-lg-3');
        document.querySelector('.navbar').style.cssText = `border-bottom: 1px solid rgba(255, 255, 255, .1)`;
    }else{
      document.querySelector('.navbar').style.cssText = `border-bottom: none`;
      document.querySelector('.navbar').classList.remove('fixed-top');
      document.querySelector('.navbar').classList.add('py-lg-3');
    }

    // BACK TO TOP BUTTON .........
    if( windowScroll >= featureSection ){
      document.querySelector('.back-to-top').style.cssText = 'opacity: 1';
    }else{
      document.querySelector('.back-to-top').style.cssText = 'opacity: 0';
    }
})

// CLIENT REVIEWS CAROUSEL ............
$('.client-reviews').slick({
    dots: true,
    infinite: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 10000,
  responsive: [
    {  breakpoint: 750, settings: {slidesToShow: 1, slidesToScroll: 1}  },
    {  breakpoint: 992, settings: {slidesToShow: 2, slidesToScroll: 2}  }
  ]
});

// BLOGS CAROUSEL ................
$('.blogs').slick({
    dots: true,
    infinite: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 10000,
  responsive: [
    {  breakpoint: 750, settings: {slidesToShow: 1, slidesToScroll: 1}  },
    {  breakpoint: 992, settings: {slidesToShow: 2, slidesToScroll: 2}  }
  ]
});

// HIDING DOTS NUMBERS ...........
document.querySelectorAll('.slick-dots li button').forEach(button => {
    button.innerHTML = '';
})

$('.back-to-top').click( (e)=>{
  e.preventDefault();

  let location = $( $('.back-to-top').attr('href') ).offset().top;
  $('html, body').animate({ 
    scrollTop: location
  }, 300);

})
