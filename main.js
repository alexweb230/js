

function sel_box() {
    let sel = document.getElementById('select').selectedIndex;
    let opt = document.getElementById('select').options;

    console.log("выбрана опция" + opt[sel].text);

}