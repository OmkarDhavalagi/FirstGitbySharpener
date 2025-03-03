let fruit = document.getElementsByClassName("fruit");
if (fruit.length > 2) {
    fruit[2].style.backgroundColor = "yellow";
}
for (let i = 0; i < fruit.length; i++) {
    fruit[i].style.fontWeight = "bold";
}