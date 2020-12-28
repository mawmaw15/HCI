$(document).ready(function(){

    var currIdx = 1;


    
    function sliding(){
        var slider = $('.slider').width()
        if(currIdx !=3){
            $('.slider').animate({left: "-="+slider+"px"}, 500);
            currIdx++;
        }
        else{
            $('.slider').animate({left: 0}, 500);
            currIdx = 1;
        }

    }

    setInterval(sliding, 1500);

});