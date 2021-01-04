function addItems(itemlist_ref) {
    var images = ["assets/images/v-neck-shirt-girl.jpg","assets/images/shirt-girl.jpg","assets/images/t-shirt-girl.jpg","assets/images/white-shirt-girl.jpg"]
    var names = ["V Neck Shirt", "Grey Shirt", "T Shirt", "White Shirt"]
    var prices = ["100.000", "75.000", "85.000", "90.000"]
    var index = Math.floor(Math.random() * images.length);
    itemlist_ref.innerHTML +=  '<div class="item"><img style="background-image:url('+images[index]+')"><div class="description"><h1>'+names[index]+'</h1><p>Rp'+prices[index]+'</p></div></div>'; 
}

var itemlist_ref = document.getElementById("itemlist-container");

for (var i = 0; i<12; i++){
    addItems(itemlist_ref);
}
