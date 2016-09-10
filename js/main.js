$(function() {
//loading html parts
  $("#before-header").load("./partials/before-header.html");
  $("#header").load("./templates/header.html");
  $("#about-section").load("./partials/about.html");
  $("#education-section").load("./partials/education.html");
  $("#portfolio-section").load("./partials/portfolio.html");
  $("#experience-section").load("./partials/experience.html");
  $("#contact-section").load("./partials/contact.html");
  $("#timeline").load("./partials/timeline.html");
  $("#footer").load("./templates/footer.html");

  $(window).scroll(function () {
    if ($('.experience-section__wrapper').position().top !== 'undefined' && $(window).scrollTop() > $('.experience-section__wrapper').position().top) {
      $('.icon-row').css({
        'opacity': 1,
        'animation': 'type 5s steps(90,end)'
      });
    }
  })
  
})

$(window).load( function(){
  $("#portfolio-section__gallery").ready(function() {
    $("#portfolio-section .item").hover(
        function () {
          $(this).find('.fancy-hover').removeClass("fadeOut").addClass("fadeIn");
        }, function () {
          $(this).find('.fancy-hover').removeClass("fadeIn").addClass("fadeOut");
        }
    );
  });

  $('[id^=myModal]').on('show.bs.modal', function(e){
    console.log(2);
    var dataTarget = $(e.relatedTarget);
    var content = '<div class="row">' + dataTarget.find("div").attr('id', 'thisContent').html() + '</div>';
    var modal = $(this);
    modal.find('.modal-body').html(content);
  });
})



