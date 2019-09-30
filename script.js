var container = document.querySelector('.container');
var button = document.querySelector('.fullWidthButton');

container.addEventListener('touchstart', function(){
    this.classList.remove('first');
    this.classList.add('second');
    button.style.display = 'block';
})

button.addEventListener('touchstart', function(){
    container.classList.remove('second');
    container.classList.add('first');
    this.style.display = 'none';
})