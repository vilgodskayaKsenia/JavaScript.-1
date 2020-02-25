function Image(miniSrc, maxSrc){
    this.miniSrc = miniSrc;
    this.maxSrc = maxSrc;
}

var images = [new Image("mini/1.jpg", "max/1.jpg"), 
             new Image("mini/2.jpg", "max/2.jpg"),
             new Image("mini/3.jpg", null)];

var imagesDiv = document.getElementById('images');
for(var image of images){
    var img = document.createElement('img');
    img.setAttribute('src', 'images/' + image.miniSrc);
    img.addEventListener('click', updateMaxImage(image.maxSrc));
    imagesDiv.appendChild(img);
}
function updateMaxImage(src){
    return function(){
        if(src != null){
            var maxImage = document.getElementById('maxImg');
            maxImage.setAttribute('src', 'images/' + src);
        }else{
            alert("Картинка отсутствует в галерее");
        }
    }
}