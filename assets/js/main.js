/**
* Template Name: MyPortfolio - v2.1.0
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function($) {
  /* var search = location.search.substring(1);
  const jsonGetParams = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
  var project = jsonGetParams.landing_country; */  

      
{/* <div class="item Webapps col-sm-6 col-md-6 col-lg-6 mb-4">
            <a href="quick-box.html" class="item-wrap fancybox">
              <div class="work-info">
                <h3>Quick box</h3>
                <p>Website</p>
              </div>
              <img class="img-fluid" src="assets/img/quickbox.png">
            </a>
          </div> */}

  "use strict";

  var burgerMenu = function() {
    $('.burger').click(function(e) {
      $(window).scrollTop(0);
      if (!$('.burger').hasClass('active'))
        $('.burger').addClass('active');
      else
        $('.burger').removeClass('active');
    });
  }
  burgerMenu();

  /* var siteIstotope = function() {
    var $container = $('#portfolio-grid').isotope({
      itemSelector: '.item',
      isFitWidth: true
    });

    $(window).resize(function() {
      $container.isotope({
        columnWidth: '.col-sm-3'
      });
    });

    $container.isotope({
      filter: '*'
    });

    $('#portfolio-flters').on('click', 'a', function(e) {
      e.preventDefault();
      var filterValue = $(this).attr('data-filter');
      $container.isotope({
        filter: filterValue
      });
      $('#portfolio-flters a').removeClass('active');
      $(this).addClass('active');
    });
  }
  $(window).on('load', function() {
    siteIstotope();
  }); */

  var siteOwlCarousel = function() {
    $('.testimonial-carousel').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      smartSpeed: 1000,
    });
  };
  siteOwlCarousel();

  $(window).on('load', function() {
    AOS.init({
      easing: 'ease',
      duration: 1000,
      once: true
    });
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });
    var project;
  

    var siteIstotope = function() {
      var $container = $('#portfolio-grid').isotope({
        itemSelector: '.item',
        isFitWidth: true
      });
  
      $(window).resize(function() {
        $container.isotope({
          columnWidth: '.col-sm-3'
        });
      });
  
      $container.isotope({
        filter: '*'
      });
  
      $('#portfolio-flters').on('click', 'a', function(e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        $container.isotope({
          filter: filterValue
        });
        $('#portfolio-flters a').removeClass('active');
        $(this).addClass('active');
      });
    }
/*     $(window).on('load', function() {
      siteIstotope();
    }); */
  fetch("https://api.jsonbin.io/b/608516b15210f622be393032", {
    method: 'GET', // or 'PUT'
    headers: {
        'Content-Type': 'application/json'
    }
  })
      .then(response => response.json())
      .then(jsonLocal => {
          project = jsonLocal;
          project.forEach(project_new => {
            $("#portfolio-grid").append(`
            <div class="item web-app col-sm-6 col-md-6 col-lg-6 mb-4">
              <a href="work-single.html?name=${project_new.name}" class="item-wrap fancybox">
                <div class="work-info">
                  <h3>${project_new.name}</h3>
                  <p>${project_new.category}</p>
                </div>
                <img class="img-fluid" src="assets/img/${project_new.image_url}">
              </a>
            </div>`)
          })

        })
        .catch(error => {
          console.log("error")
      })
})(jQuery);