var images = ["images/1.jpg",
             "images/2.jpg",
             "images/3.jpg",
             "images/4.jpg",
             "images/5.jpg",
             "images/6.jpg",
             "images/7.jpg",
             "images/8.jpg",
             "images/9.jpg",
             "images/10.jpg",
             "images/11.jpg",
             "images/12.jpg",
             "images/13.jpg",
             "images/14.jpg",
             "images/15.jpg",]

var image = document.getElementById('image');
var currentImageIndex = 0;
image.setAttribute('src', images[currentImageIndex]);

function getPreviousImage(){
    currentImageIndex--;
    if(currentImageIndex<0){
        currentImageIndex = images.length - 1;
    }
    image.setAttribute('src', images[currentImageIndex]);
}

function getNextImage(){
    currentImageIndex++;
    if(currentImageIndex>=images.length){
        currentImageIndex = 0;
    }
    image.setAttribute('src', images[currentImageIndex]);
}