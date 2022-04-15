import $ from './lib/lib';

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('button').html('Hello'));
// console.log($('div').eq(2).find('.some '));
// console.log($('.some').closest('.findm'));

// console.log($('.findme').siblings());

$('button').fadeIn(1800);

/* $('button').on('click', function() {
    $('.findme').fadeOut(1800);
}); */