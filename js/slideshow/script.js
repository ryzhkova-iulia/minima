document.addEventListener("DOMContentLoaded", function(event) {
    var currentGalleryMoved = 0;
    var listGallery = document.getElementsByClassName("gallery__img")[0];

    var arrowNext = document.getElementsByClassName("next");
    arrowNext[0].addEventListener("click", moveLeft);

    function moveLeft(event) {
        var itemWidth = listGallery.children[0].offsetWidth;
        var galleryWidth = itemWidth * listGallery.children.length;

        if (currentGalleryMoved < galleryWidth - document.getElementsByClassName("gallery")[0].offsetWidth){
            currentGalleryMoved = currentGalleryMoved + itemWidth;
            listGallery.style.marginLeft = "-" + currentGalleryMoved +"px";
        }

    }

    var arrowPrev = document.getElementsByClassName("prev");
    arrowPrev[0].addEventListener("click", moveRight);
    function moveRight(event) {
        var itemWidth = listGallery.children[0].offsetWidth;

        if (currentGalleryMoved > 0){
            currentGalleryMoved = currentGalleryMoved - itemWidth;
            listGallery.style.marginLeft = "-" + currentGalleryMoved +"px";
        }
    }

    window.moveLeft = moveLeft;
    window.moveRight = moveRight;
});


