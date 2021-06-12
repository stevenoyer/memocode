let search_bar = document.querySelector('#search-bar');
let content_val = document.querySelector('#content-bar');

search_bar.addEventListener('keyup', function() {
    content_val.innerHTML = search_bar.value;
});