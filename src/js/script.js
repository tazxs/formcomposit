document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav-modal').classList.toggle('show-nav-modal');
    document.querySelector('.modal-overlay').classList.toggle('show-modal-overlay');
});

document.querySelector('.modal-overlay').addEventListener('click', function() {
    document.querySelector('.nav-modal').classList.remove('show-nav-modal');
    document.querySelector('.modal-overlay').classList.remove('show-modal-overlay');
});
