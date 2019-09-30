var container = document.querySelector('.container');
var button = document.querySelector('.fullWidthButton');

container.addEventListener('click', function(){
    this.classList.remove('first');
    this.classList.add('second');
    button.style.display = 'block';
})

button.addEventListener('click', function(){
    container.classList.remove('second');
    container.classList.add('first');
    this.style.display = 'none';
})