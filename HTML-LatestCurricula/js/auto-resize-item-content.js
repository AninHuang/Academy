var autoResizeItemContent = (function(){
  if(navigator.userAgent.indexOf("Trident") > -1) {
    Ellipsis({
      class: '.collection__item-heading',
      lines: 4
    });
  } else {
    Ellipsis({
      class: '.collection__item-heading',
      lines: 3
    });
  }
  Ellipsis({
    class: '.collection__item-paragraph',
    lines: 7
  });

  var maxHeight = -1;
  $('.collection__item-content').each(function() {
    maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
  });

  $('.collection__item-content').each(function() {
    $(this).height(maxHeight);
  });
})();  
setInterval(autoResizeItemContent, 500);
