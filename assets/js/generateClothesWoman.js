var itemlist_ref = document.getElementById("itemlist").firstElementChild;
var item = itemlist_ref.firstElementChild;

console.log(item);

for (var i = 0; i<10; i++){
    itemlist_ref.append(item);
}
