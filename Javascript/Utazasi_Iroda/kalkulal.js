function szamol() {
    var letszam = parseInt(document.getElementById("letszam").value);
    var ejszaka = parseInt(document.getElementById("ejszaka").value);
    var orszag = parseInt(document.getElementById("orszag").value);
    var ar = 5600;

    if (orszag == "g") {
        ar = 6200;
    }
    if (orszag == "h") {
        ar = 5000;
    }
    if (orszag == "t") {
        ar = 5800;
    }

    //--számolás--
    var fizetendo = letszam * ejszaka * ar;
    //------------
    document.getElementById('eredmeny').value = fizetendo + " Ft";

}