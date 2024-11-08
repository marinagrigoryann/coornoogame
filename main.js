$(document).ready(function(){

    //TOOLTIPS
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    // ANIMATIONS
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top + 150;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        }
      });
    }
    
     //COPYRIGHT YEAR
    var date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
    
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    
});