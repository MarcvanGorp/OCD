document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', Event => {
        //console.log('test works');
        //item.style.color = '#17d';
        item.classList.toggle('checked');
    })
})