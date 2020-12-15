var itemlist_ref = document.getElementById("itemlist").firstElementChild;
var item = itemlist_ref.firstElementChild;

console.log(item);

for (var i = 0; i<10; i++){
    var card_tag = document.createElement("div").classList.add("item");
    
    var img = document.createElement("img");
    card_tag.appendChild(img);
    
    itemlist_ref.appendChild(card_tag);
}
