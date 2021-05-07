$('.main__burger').on('click', function(){
    $('.main__burger_list').toggleClass('main__burger_list_active');
    $('.main__burger').toggleClass('main__burger_active');
    $('body').toggleClass('lock');
})