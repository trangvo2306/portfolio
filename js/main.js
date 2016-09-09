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
  });

  $(document).ready(function(){
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
      var dataTarget = $(e.relatedTarget);
      var content = '<div class="row">' + dataTarget.find("div").attr('id', 'thisContent').html() + '</div>';
      var modal = $(this);
      modal.find('.modal-body').html(content);
    });
  });
  // $.fn.goValidate = function () {
  //   var $form = this,
  //       $inputs = $form.find('input:text'),
  //       $textAreas = $form.find('textarea');
  //
  //   var validators = {
  //     name: {
  //       regex: /^.{3,}$/
  //     },
  //     email: {
  //       regex: /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
  //     },
  //     user_message: {
  //       regex: /^.{3,}$/
  //     }
  //   };
  //
  // var validate = function (klass, value) {
  //   var isValid = true,
  //       error = '';
  //
  //   if (!value && /required/.test(klass)) {
  //     error = 'This field is required';
  //     isValid = false;
  //   } else {
  //     klass = klass.split(/\s/);
  //     $.each(klass, function (i, k) {
  //       if (validators[k]) {
  //         if (value && !validators[k].regex.test(value)) {
  //           isValid = false;
  //           error = validators[k].error;
  //         }
  //       }
  //     });
  //   }
  //   return {
  //     isValid: isValid,
  //     error: error
  //   }
  // };
  // var showError = function ($e) {
  //   var klass = $e.attr('class'),
  //       value = $e.val(),
  //       test = validate(klass, value);
  //
  //   $e.removeClass('invalid');
  //   $('#form-error').addClass('hide');
  //
  //   if (!test.isValid) {
  //     $e.addClass('isvalid');
  //
  //     if (typeof $e.data("shown") == "undefined" || $e.data("shown") == false) {
  //       $e.popover('show');
  //     }
  //   }
  //   else {
  //     $e.popover('hide');
  //   }
  // };
  // $inputs.keyup(function () {
  //   showError($(this));
  // });
  // $textArea.keyup(function () {
  //   showError($(this));
  // });
  //
  // $inputs.on('shown.bs.popover', function () {
  //   $(this).data("shown", true);
  // });
  //
  // $inputs.on('hidden.bs.popover', function () {
  //   $(this).data("shown", false);
  // });
  //
  // $form.submit(function (e) {
  //
  //   $inputs.each(function () { /* test each input */
  //    if ($(this).is('.required') || $(this).hasClass('invalid')) {
  //       showError($(this));
  //     }
  //   });
  //
  //   $textAreas.each(function () { /* test each input */
  //     /*if ($(this).is('.required') || $(this).hasClass('invalid')) {
  //       showError($(this));
  //     }
  //   });
  //   if ($form.find('input.invalid').length) { /* form is not valid */
  //     e.preventDefault();
  //     $('#form-error').toggleClass('hide');
  //   }
  //   });
  //   return this;
  // };
  //
  // $('form').goValidate();
})




