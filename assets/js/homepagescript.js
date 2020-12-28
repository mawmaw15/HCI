$(document).ready(function(){

    var currIdx = 1;


    
    function sliding(){

        if(currIdx !=2){
            $('.slider').animate({left: "-=1000px"}, 500);
            currIdx++;
        }
        else{
            $('.slider').animate({left: 0}, 500);
            currIdx = 1;
        }

    }

    setInterval(sliding, 1500);

});