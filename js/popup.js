// Check for valid email syntax
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function closeForm() {
    document.contactform.name.value = '';
    document.contactform.email.value = '';
    document.contactform.message.value = '';
  
    $('.email').removeClass('typing');
    $('.name').removeClass('typing');
    $('.message').removeClass('typing');
  
    $('.cd-popup').removeClass('is-visible');
    $('.notification').addClass('is-visible');
    $('#notification-text').html("Thanks for contacting us!");
  }
  
  $(document).ready(function($) {
  
    /* ------------------------- */
    /* Contact Form Interactions */
    /* ------------------------- */
    $('#contact').on('click', function(event) {
      event.preventDefault();
  
      $('.contact').addClass('is-visible');
  
      if ($('#name').val().length != 0) {
        $('.name').addClass('typing');
      }
      if ($('#email').val().length != 0) {
        $('.email').addClass('typing');
      }
      if ($('#message').val().length != 0) {
        $('.message').addClass('typing');
      }
    });
  
    //close popup when clicking x or off popup
    $('.cd-popup').on('click', function(event) {
      if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
        event.preventDefault();
        $(this).removeClass('is-visible');
      }
    });
  
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event) {
      if (event.which == '27') {
        $('.cd-popup').removeClass('is-visible');
      }
    });
  
    /* ------------------- */
    /* Contact Form Labels */
    /* ------------------- */
    $('#name').keyup(function() {
      $('.name').addClass('typing');
      if ($(this).val().length == 0) {
        $('.name').removeClass('typing');
      }
    });
    $('#email').keyup(function() {
      $('.email').addClass('typing');
      if ($(this).val().length == 0) {
        $('.email').removeClass('typing');
      }
    });
    $('#message').keyup(function() {
      $('.message').addClass('typing');
      if ($(this).val().length == 0) {
        $('.message').removeClass('typing');
      }
    });
  
    /* ----------------- */
    /* submission */
    /* ----------------- */
    $('#contactform').submit(function() {
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();
  
      if (name) {
        if (validateEmail(email)) {
          if (name) {
            if (message) {
              
              closeForm();
  
            } else {
              $('#notification-text').html("<h5><p>Please indicate the product you'd like a demo for!</p></h5>");
              $('.notification').addClass('is-visible');
            }
          } else {
            $('#notification-text').html('<h5><p>Please provide a name.</p></h5>');
            $('.notification').addClass('is-visible');
          }
        } else {
          $('#notification-text').html('<h5><p>Please use a valid email address.</p></h4>');
          $('.notification').addClass('is-visible');
        }
      } else {
        $('#notification-text').html('<h5><p>Please provide a valid name.</p></h5>');
        $('.notification').addClass('is-visible');
      }
  
      return false;
    });
  });