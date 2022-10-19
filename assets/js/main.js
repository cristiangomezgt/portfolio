
(function($) {


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
  var projects = [
    {
      "name": "Healt it up",
      "category": "Website",
      "technologies": "Wordpress",
      "project_url": "https://healthitup.com.gt/",
      "description": "Healt it up allows you to an appointment with an nutritionist and buy books",
      "repositorie_url": "",
      "image_url": "health-it-up.png"
    },

    /* {
      "name": "Grupo GET",
      "category": "Website",
      "technologies": "HTML, CSS, Javascript, Bootstrap, Jquery",
      "project_url": "http://www.getlatam.com/",
      "description": "Grupo get website es una sitio web estatico con información varia, contacto, etc.",
      "repositorie_url": "",
      "image_url": "grupo-get.png"
    }, */
    {
      "name": "Quickbox USA",
      "category": "Website",
      "technologies": "HTML, CSS, Javascript, Bootstrap, Jquery",
      "project_url": "https://www.quickboxusa.com.gt/",
      "description": "Grupo get website es una sitio web estatico que proporciona información del servicio de compra de productos desde los Estados unidos hacia Guatemala.",
      "repositorie_url": "",
      "image_url": "quickbox.png"
    },
    {
      "name": "Jobster GT",
      "category": "Webapp",
      "technologies": "Reactjs, HTML, CSS, Javascript",
      "project_url": "https://jobster-gt.vercel.app/",
      "description": "Jobster GT is a job tracking app that allow you to manage and track yours jobs applications",
      "repositorie_url": "",
      "image_url": "Jobster-GT-Development.png"
    }
    ];
    projects.forEach(project => {
      console.log("project", project)
      $("#portfolio-grid").append(`
      <div class="item web-app col-sm-6 col-md-6 col-lg-6 mb-4">
        <a href="work-single.html?name=${project.name}" class="item-wrap fancybox">
          <div class="work-info">
            <h3>${project.name}</h3>
            <p>${project.category}</p>
          </div>
          <img class="img-fluid" src="assets/img/${project.image_url}">
        </a>
      </div>`)
    })


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
    } */
/*     $(window).on('load', function() {
      siteIstotope();
    }); */
/*   
    var project;

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
      }) */
})(jQuery);