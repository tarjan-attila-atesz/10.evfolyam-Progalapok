//Függvénydefiníciók
function $(id) {
    return document.getElementById(id);
}

function nevbolUdvozles(nev) {
    return 'Hello ' + nev + '!';
}

function hello() {
    var nev = $('nev').value;
    var udvozles = nevbolUdvozles(nev);
    $('kimenet').innerHTML = udvozles;
}

function init() {
    //Eseménykezelők regisztrálása
    $('gomb').addEventListener('click', hello, false);
}
window.addEventListener('load', init, false);