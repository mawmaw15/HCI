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
    function addItems(itemlist_ref) {
        var images = ["assets/images/nimble-made-GDebkNryTd4-unsplash.jpg","assets/images/nimble-made-EJqFycSAudg-unsplash.jpg","assets/images/hassan-ouajbir-MkmcxwwCepY-unsplash.jpg"];
        images.push("assets/images/v-neck-shirt-girl.jpg","assets/images/shirt-girl.jpg","assets/images/t-shirt-girl.jpg","assets/images/white-shirt-girl.jpg");
        var names = ["White Shirt", "Formal Suit", "Jeans"];
        names.push("V Neck Shirt", "Grey Shirt", "T Shirt", "White Shirt");
        var prices = ["80.000", "150.000", "85.000"];
        prices.push("100.000", "75.000", "85.000", "90.000");

        console.log(images)
        var index = Math.floor(Math.random() * images.length);
        itemlist_ref.innerHTML +=  '<div class="item"><img style="background-image:url('+images[index]+')"><div class="description"><h1>'+names[index]+'</h1><p>Rp. '+prices[index]+'</p></div></div>'; 
    }

    setInterval(sliding, 1500);
    var itemlist_ref = document.getElementById("container-gambar-disc");
    var itemlist2_ref = document.getElementById("container-gambar-latest");
    
    for (var i = 0; i<4; i++){
        addItems(itemlist_ref);
        addItems(itemlist2_ref);
    }    
});