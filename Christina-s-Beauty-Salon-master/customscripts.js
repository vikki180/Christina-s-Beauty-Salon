 document.getElementById("CBSFooter").innerHTML =
      "<hr><p>Copyright &copy; " + new Date().getFullYear() + " Christina's Beauty Salon | Designed by Business Tech  Solutions | Phone: (573) 445 - 5321</p>";

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
