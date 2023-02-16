$(function(){
    $('.review_block').click(function(){
        $('.review_place').not($(this).siblings()).slideUp(1000);
        $(this).siblings('.review_place').stop().slideToggle(1000);
    });
});