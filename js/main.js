$(function () {
    navOpen();
    
});
function navOpen() {
    $('.js-information-list').click(function () {
        $('.js-information-list').removeClass('on');
        $(this).addClass('on');
        var ulr=$(this).attr('data-url');
        $('.js-iframeOut').attr('src',ulr);
});

}