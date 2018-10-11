

function sel_box() {
    let sel = document.getElementById('select').selectedIndex;
    let opt = document.getElementById('select').options;
    console.log("выбрана опция" + opt[sel].text);

}

function rang() {
    let ran = document.getElementById('rang');
    let text = document.getElementById('text');
    let test = document.getElementById('test');
    text.value = ran.value;
    test.style.width = ran.value + "px";
}