


function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


function slick_handle_wheel_event(e, slick_instance, slick_is_animating) {

  if (!slick_is_animating) {

    var direction =
      Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

    console.log("wheel scroll ", e.deltaX, e.deltaY, direction);

    if (direction > 0) {

      slick_instance.slick("slickNext");
    } else {

      slick_instance.slick("slickPrev");
    }
  }
}


var slick_handle_wheel_event_debounced = debounce( 
  slick_handle_wheel_event
  , 100, true
);


const slick_2 = $(".slider");
slick_2.slick({
  dots: false,
  vertical: true,
  slidesToShow:3,
  verticalSwiping: true,
  arrows: false,
   infinite: false, 
   speed:700,
});
var slick_2_is_animating = false;

slick_2.on("afterChange", function(index) {
  console.log("Slide after change " + index);
  slick_2_is_animating = false;
});

slick_2.on("beforeChange", function(index) {
  console.log("Slide before change " + index);
  slick_2_is_animating = true;
});

slick_2.on("wheel", function(e) {
  slick_handle_wheel_event_debounced(e.originalEvent, slick_2, slick_2_is_animating);  
});
