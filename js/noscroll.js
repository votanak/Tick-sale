$(function () {
  $('.wrapper').on('DOMMouseScroll mousewheel', function (ev) {
    var $this = $(this),
      scrollTop = this.scrollTop,
      scrollHeight = this.scrollHeight,
      height = $this.height(),
      delta = (ev.type == 'DOMMouseScroll'
        ? ev.originalEvent.detail * -40
        : ev.originalEvent.wheelDelta),
      up = delta > 0;
 
    var prevent = function () {
      ev.stopPropagation();
      ev.preventDefault();
      ev.returnValue = false;
      return false;
    }
 
    if (!up && -delta > scrollHeight - height - scrollTop) {
      $this.scrollTop(scrollHeight);
      return prevent();
    } else if (up && delta > scrollTop) {
      $this.scrollTop(0);
      return prevent();
    }
  });
});
