var $win = $(window);
var $sun = $('.sun');
var $sun-section = $('.sun-section');

$win.on('scroll', function() {
    var scrollPos = $win.scrollTop();
        
    $sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
    
    4sun-section.css('background-position', 'center' + scrollPos / 2 + 'px')
});