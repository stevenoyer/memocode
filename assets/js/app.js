let search_bar = document.querySelector('#search-bar');
let content_val = document.querySelector('#content-bar');
let btn_dark = document.querySelector('.btn-dark-mode');

search_bar.addEventListener('keyup', function() {
    content_val.innerHTML = search_bar.value;
});

btn_dark.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark-mode');
});