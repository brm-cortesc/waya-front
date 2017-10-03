jQuery(document).ready(function($) {

   //device 
   var isMobile = {
       Android: function() {
           return navigator.userAgent.match(/Android/i);
       },
       BlackBerry: function() {
           return navigator.userAgent.match(/BlackBerry/i);
       },
       iOS: function() {
           return navigator.userAgent.match(/iPhone|iPad|iPod/i);
       },
       Opera: function() {
           return navigator.userAgent.match(/Opera Mini/i);
       },
       Windows: function() {
           return navigator.userAgent.match(/IEMobile/i);
       },
       any: function() {
           return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
       }
   }; 
  $(window).scroll(function(){
              if($(window).scrollTop() > 250) {
                  $('.caja-reserva-internas').css('top', '0px');
                  $('.caja-reserva-internas').css('position', 'fixed');
              }
              else {
                  $('.caja-reserva-internas').css('position', 'absolute');
                  $('.caja-reserva-internas').css('top', '10%');
              }
          });

  $(function() {
          $( '#dl-menu' ).dlmenu();
        });
  //Carrusel
  // $('.carouselplanes').carouselplanes({
  //         interval: 9000 //changes the speed
  //     })

  //Tooltip
  // $(function() { 
  //           $('[rel="clickover"]').clickover(); 

  //           $('#auto-close-co').clickover({
  //             auto_close: 15 * 1000            
  //           });

  //           $('#no-global-co').clickover({ global_close: false });

  //           $('#shown-co').clickover({
  //             onShown: function () { alert("Hello from clickover"); }
  //           });

  //           $('#set-tall-skinny').clickover({ width: 50, height: 300 });

  //           $('#no-esc').clickover({ placement: 'top', esc_close: 0 }); 
  //       })



  //Scroll fixed header
  if (isMobile.any() || $(window).width() < 768 ){
    $('header.container-fluid').affix({
      offset: {
        top: 50,
        
      }
    })
  }



});