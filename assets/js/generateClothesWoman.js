function addItems(itemlist_ref) {
    var images = ["assets/images/v-neck-shirt-girl.jpg","assets/images/shirt-girl.jpg","assets/images/t-shirt-girl.jpg","assets/images/white-shirt-girl.jpg"]
    var index = Math.floor(Math.random() * images.length);
    itemlist_ref.innerHTML +=  '<div class="item"><img style="background-image:url('+images[index]+')"><div class="description"><h1>Just normal image</h1><p>The price is in discount</p></div></div>'; 
}

var itemlist_ref = document.getElementById("itemlist-container");

for (var i = 0; i<12; i++){
    addItems(itemlist_ref);
}
