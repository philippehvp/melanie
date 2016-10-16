function toggleElement(el) {
    $(el).slideToggle();
    console.log(el);

}

function goTo(anchor) {
    location.hash = anchor;
}
