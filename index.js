var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}




// GSAP

TweenLite.from('.image-container', 1, {opacity: 0, y: -1000})
TweenLite.from('.text-container', 1, {opacity: 0, delay: 1 })
TweenLite.from('.font-description', 1, {opacity: 0, x: 400, delay: 1})