$('.nav-link').on('click', function (e) {

  var tujuan = $(this).attr('href');
  var elemenTujuan = $(tujuan);
  $('html, body').animate({
    scrollTop: elemenTujuan.offset().top - 55
  }, 1000, 'easeInOutExpo');


  e.preventDefault();


});


$('body').scrollspy({
  target: '#navbar',
  offset: 100

});
