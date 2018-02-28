var $win = $(window);
var $hold = $('.hold');
var $logoSection = $('.logo-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $shuttleSection = $('.shuttle-section');
var $shuttle = $('.shuttle');
var $designerSection = $('.designer-section');
var $designer = $('.designer');



$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$hold.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');

	$logoSection.css('background-position', 'center ' + scrollPos / 2 + 'px');

});

$designerSection.waypoint(function () {
	$designer.addClass('js-designer-fade');
}, { offset: '50%' });


//smooth scrolling///

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});