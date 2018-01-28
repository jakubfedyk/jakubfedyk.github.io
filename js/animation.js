$(document)
    .on('mouseenter', function () {
        $('.img-rounded').effect('bounce', {times: 2}, 'slow')
    })
    .on('mouseleave', function () {
        $('.img-rounded').show();
    });

// $(document.body).



$('.header_title').css({
    'background-image': 'url(./images/pexels-photo-316466.jpeg)'
}).addClass('img_attr');
$('.contact').css({
    'background-image': 'url(./images/pexels-photo-209634.jpeg'
}).addClass('img_attr');
$('.right__text').css({
    'background-image': 'url(./images/pexels-photo-247671.jpeg'
}).addClass('img_attr');
$('.main__text').css({
    'background-image': 'url(./images/pexels-photo-139321.jpeg'
}).addClass('img_attr');


// $('.header_title, .main__text, .text_cv').css('margin-left', '200px');
