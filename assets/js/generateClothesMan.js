function addItems(itemlist_ref) {
    var images = ["assets/images/nimble-made-GDebkNryTd4-unsplash.jpg","assets/images/nimble-made-EJqFycSAudg-unsplash.jpg","assets/images/hassan-ouajbir-MkmcxwwCepY-unsplash.jpg"]
    var names = ["White Shirt", "Formal Suit", "Jeans"]
    var prices = ["80.000", "150.000", "85.000"]
    var index = Math.floor(Math.random() * images.length);
    itemlist_ref.innerHTML +=  '<div class="item"><img style="background-image:url('+images[index]+')"><div class="description"><h1>'+names[index]+'</h1><p>Rp. '+prices[index]+'</p></div></div>'; 
}

var itemlist_ref = document.getElementById("itemlist-container");

for (var i = 0; i<12; i++){
    addItems(itemlist_ref);
}
