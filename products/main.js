function changeImage(buttonNumber) {

    var mainImage = 
document.getElementById('mainImage');

    switch (buttonNumber) {
        case 1:
            mainImage.src = '/images/asparagus.png';
        break;
        case 2:
            mainImage.src = '/images/asparagus-1.png';
        break;
        case 3:
            mainImage.src = '/images/asparagus-2.png';
        break;
        case 4:
            mainImage.src = '/images/asparagus-2.png';
        break;
        default: mainImage.src = '/images/asparagus.png';
    }
}
