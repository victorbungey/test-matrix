$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $(".service-card-details-link").click(function() {
      var $this = $(this);
      $this.tooltip('hide');

      $this.parents('.service-card').siblings().children('.service-card-details-block').hide();
      var $otherDetailLinks = $this.parents('.service-card').siblings().children().children('.service-card-details-link');
      $otherDetailLinks.removeClass('expanded');
      $otherDetailLinks.html("Details");
      $otherDetailLinks.attr('data-original-title', 'Service description');

      var $detailsContent = $this.parents().nextAll(".service-card-details-block").first();

      $detailsContent.slideToggle("fast", function() {
        $this.toggleClass("expanded");

        if ($this.hasClass("expanded")) {
          $this.html("Close");
          $this.attr('data-original-title', '');
        } else {
          $this.html("Details");
          $this.attr('data-original-title', 'Service description');

        }
      });
      return false;
    });

    var elems = $('.service-card');
    elems.on('mouseenter mouseleave', function(e) {
      elems.not(this).stop(true).fadeTo('fast', e.type == 'mouseenter' ? 0.5 : 1);
    });

  });
