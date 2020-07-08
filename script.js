const shareContainer = document.querySelector('.share-container');
const shareButton = document.querySelector('.share-button');
const buttons = document.querySelector('.buttons');

shareContainer.addEventListener('click', function () {
    if (buttons.style.visibility === 'hidden') {
        buttons.style.visibility = 'visible';
        shareButton.style.fill = "white"
        shareContainer.style.backgroundColor = 'hsl(214, 17%, 51%)'
    } else {
        buttons.style.visibility = 'hidden'
        shareContainer.style.width = '40px'
        shareButton.style.fill = "hsl(214, 17%, 51%)"
        shareContainer.style.backgroundColor = 'hsl(210, 46%, 95%)'
    }
});