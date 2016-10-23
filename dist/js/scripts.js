function toggleElement(el) {
    $(el).slideToggle();
}

function goTo(anchor) {
    location.hash = anchor;
}

function displayArticle(id, cls) {
    $(('.' + cls)).fadeOut(200);
    $('#' + id).fadeIn(200);
}
