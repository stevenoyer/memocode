const search_bar = document.querySelector('#search-bar');
const content_val = document.querySelector('#content-bar');
const btn_dark = document.querySelector('.btn-dark-mode');
const btn_add_article = document.querySelector('.btn-add');
const add_article = document.querySelector('.add-article');
const btn_close_article = document.querySelector('.add-article--close');

search_bar.addEventListener('keyup', function() {
    content_val.innerHTML = search_bar.value;
});

btn_dark.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark-mode');
});

btn_add_article.addEventListener('click', function() {

    if (add_article.style.display === 'none') {
        add_article.style.display = 'flex';
    }else {
        add_article.style.display = 'none';
    }

});

btn_close_article.addEventListener('click', function() {

    add_article.style.display = 'none';

});