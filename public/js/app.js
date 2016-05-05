$('#myCarousel').carousel({
    interval: 3000
})

$('.carousel .item').each(function(){
    var next = $(this).next();

    if (!next.length) {
        next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
    }
    else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
});
// $('.info').click(function(){
//          $(this).find('.card').addClass('flipped').mouseleave(function(){
//              $(this).removeClass('flipped');
//          });
//          return false;
//      });
// $('.info').flip();
