window.onscroll = function () {

    docScroll();
}

function docScroll() {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop,

        documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (windowScroll / documentHeight) * 100;

    document.getElementById('mybar').style.width = scrolled + '%';
}

