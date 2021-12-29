// 其實div設 display: none 就行了...
// $(function(){
//     $("#gotop").hide()
// });

$("#gotop").click(function(){
    jQuery("html,body").animate({
        scrollTop:0
    },700);
});

$(window).scroll(function() {
    if ( $(this).scrollTop() > 400){
        $('#gotop').fadeIn("fast");
    } else {
        $('#gotop').stop().fadeOut("fast");
    }
});