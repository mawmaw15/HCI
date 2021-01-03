$(document).ready(function(){
    $(document).scroll(function () {
        var $nav = $("nav");
        var $dropdown_item = $(".dropdown-content");
        var $logo = $(".logo");
        var $rightnav = $("#right-nav");

        $logo.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $dropdown_item.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $rightnav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
})