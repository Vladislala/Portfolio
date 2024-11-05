document.querySelectorAll('.burger').forEach(burger => {
    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        const nav = document.querySelector('.header__nav');
        nav.classList.toggle('active');
    });
});