function iPhone(src, price, name){
    this.src = src;
    this.price = price;
    this.name = name;
}

var iPhones = [new iPhone("iPhone 7.webp", 30000, "iPhone 7"), 
             new iPhone("iPhone 11.webp", 90000, "iPhone 11"),
             new iPhone("iPhone xr.webp", 50000, "iPhone XR"),
              new iPhone("iPhone xs.webp", 70000, "iPhone XS")];
var basketList = document.getElementById('basket');
var sum = 0;
var sumTag = document.getElementById('sum');

var iPhonesDiv = document.getElementById('iPhones');
for(var iPhone of iPhones){
    var iPhoneDiv = document.createElement('div');
    iPhoneDiv.className = 'column';
    iPhonesDiv.appendChild(iPhoneDiv);
    var img = document.createElement('img');
    img.setAttribute('src', 'images/' + iPhone.src);
    iPhoneDiv.appendChild(img);
    var nameTag = document.createElement('h3');
    nameTag.innerText = iPhone.name + ' - ' + iPhone.price;
    iPhoneDiv.appendChild(nameTag);
    var btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', 'Купить');
    btn.addEventListener('click', addToBasket(iPhone));
    iPhoneDiv.appendChild(btn);
}

function addToBasket(iPhone){
    return function() {
        var newItem = document.createElement('li');
        var info = document.createElement('p');
        info.innerHTML = iPhone.name + " - " + iPhone.price + "  ";
        newItem.appendChild(info);
        var deleteBtn = document.createElement('input');
        deleteBtn.setAttribute('type', 'button');
        deleteBtn.setAttribute('value', 'Удалить');
        deleteBtn.addEventListener('click', removeFromBasket(iPhone, newItem));
        info.appendChild(deleteBtn);
        basketList.appendChild(newItem);
        sum += iPhone.price;
        updateSum();
    }
}

function removeFromBasket(iPhone, itemToRemove){
    return function(){
        basketList.removeChild(itemToRemove);
        sum -= iPhone.price;
        updateSum();
    }
}

function updateSum(){
    sumTag.innerText = 'К оплате: ' + sum + 'р.';
}