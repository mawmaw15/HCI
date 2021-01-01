$(document).ready(function(){
    $(document).scroll(function () {
        var $nav = $("nav");
        var $dropdown_item = $(".dropdown-content");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $dropdown_item.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
})