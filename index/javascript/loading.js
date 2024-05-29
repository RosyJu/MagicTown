(function() {
    let loading = document.querySelector('body > .load');
    setTimeout (function() {
        loading.setAttribute('loading', 'false');
        loading.innerHTML = '';
    },3000
    )
}())