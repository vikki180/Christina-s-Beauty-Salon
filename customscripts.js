 document.getElementById("CBSFooter").innerHTML =
      "<hr><p>&copy; Christina's Beauty Salon <br />Designed by Business Tech Solutions " 
      	+ new Date().getFullYear() + 
      "<br />573-445-5321</p>";


      $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.brand-img').fadeOut();
     }
    else
     {
      $('.brand-img').fadeIn();
     }
 });
