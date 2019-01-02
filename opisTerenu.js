var obiektywTerenie = [];
var kierunek;
var znacznikN = false;
var znacznikW = false;
var znacznikS = false;
var znacznikE = false;
var res2;


var zz = (dostepneObiektyTerenowe.obiekty.length);

for (var z = 0; z < zz; z++) {
    var d = new Date();
    var n = d.getTime();
    var x = document.createElement("OPTION");
    x.setAttribute("value", "v " + dostepneObiektyTerenowe.obiekty[z].val);
    var t = document.createTextNode(dostepneObiektyTerenowe.obiekty[z].desc);
    x.appendChild(t);


    console.log("x-> ", x);

    document.getElementById("obiekt").appendChild(x);
}


function listaObiektow() {
    for (var z = 0; z < 10; z++) {
        var d = new Date();
        var n = d.getTime();
        var x = document.createElement("OPTION");
        x.setAttribute("value", "volvocar " + n);
        var t = document.createTextNode("Volvo " + dostepneObiektyTerenowe.obiekty[z].desc);
        x.appendChild(t);
        document.getElementById("mySelect").appendChild(x);
    }
}


function go() {


    //  var a = trim(document.getElementById("mySelect").value);

    console.log("value: " + document.getElementById("obiekt1234").value);
    console.log("description: " + document.getElementById("obiekt1234").desc);


    var numerPozycjiDoKasowania = document.getElementById("obiekt1234").value.charAt(0)+document.getElementById("obiekt1234").value.charAt(1);
    console.log("numer pozycji: " + numerPozycjiDoKasowania);



}


function isEmpty(str) {
    str = trim(str);
    return ((str == null) || (str.length == 0));
}

function isInteger(str) {
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (!isDigit(c)) {
            return false;
        }
    }

    return true;
}


function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}


function isDigit(c) {
    return ((c >= "0") && (c <= "9"));
}


function ustalKierunek() {
    if (document.getElementById("radioN").checked === true) {
        kierunek = "n";
        return;
    }

    if (document.getElementById("radioW").checked === true) {
        kierunek = "w";
        return;
    }

    if (document.getElementById("radioE").checked === true) {
        kierunek = "e";
        return;
    }

    if (document.getElementById("radioS").checked === true) {
        kierunek = "s";
        return;
    }
}


function dodajDoListy() {

    var odleglosc = trim(document.getElementById("odleglosc1").value);
    var obiekt = trim(document.getElementById("obiekt").value);
    var info = document.getElementById("info").value;

    if (
        document.getElementById("radioN").checked === false
        &&
        document.getElementById("radioW").checked === false
        &&
        document.getElementById("radioE").checked === false
        &&
        document.getElementById("radioS").checked === false
    ) {
        alert("Wybierz kierunek!");
        return;
    }

    if (isEmpty(odleglosc) || !isInteger(odleglosc)) {
        alert("Podaj właściwą odległość!");
        return;
    }
    if (obiekt === "") {
        alert("Wybierz obiekt");
        return
    }
    else {
        var wpisDoBazy = kierunek + "- w odległości " + odleglosc + " m, " + " znajduje się " + obiekt + " " + info;
        obiektywTerenie.push(wpisDoBazy);
        var daneTymczasowe = obiektywTerenie.length;
        document.getElementById("demo").innerHTML = daneTymczasowe;


        wpiszTabliceDoOkna();
    }
}


function pokazListe() {

    console.log("ilosc obiektow: " + obiektywTerenie.length);
    obiektywTerenie = obiektywTerenie.sort();
    document.getElementById("demo123").innerHTML = "";


    for (var i = 0; i < obiektywTerenie.length; i++) {
        var res1 = obiektywTerenie[i].charAt(0);

        if (res1 === "n" && znacznikN === false) {
            znacznikN = true;
            console.log("--- PÓŁNOC");
            document.getElementById("demo123").innerHTML += "--- PÓŁNOC" + "<br>";
        }

        if (res1 === "w" && znacznikW === false) {
            znacznikW = true;
            console.log("--- ZACHÓD");
            document.getElementById("demo123").innerHTML += "--- ZACHÓD" + "<br>";
        }

        if (res1 === "e" && znacznikE === false) {
            znacznikE = true;
            console.log("--- WSCHÓD");
            document.getElementById("demo123").innerHTML += "--- WSCHÓD" + "<br>";
        }

        if (res1 === "s" && znacznikS === false) {
            znacznikS = true;
            console.log("--- POLUDNIE");
            document.getElementById("demo123").innerHTML += "--- POLUDNIE" + "<br>";
        }

        //      console.log("res1: " + res1);

        console.log("obiekt:  " + obiektywTerenie[i]);
        document.getElementById("demo123").innerHTML += obiektywTerenie[i] + "<br>";

    }
    znacznikN = false;
    znacznikW = false;
    znacznikS = false;
    znacznikE = false;
}


function wpisztablicedoOkna() {
    console.log("wpisz tablicę do okna");
    // console.log("obiektywTerenie: " + obiektywTerenie);
    document.getElementById("demo123").innerHTML = "";
    document.getElementById("obiekt1234").innerHTML = "";

    var odleglosc = trim(document.getElementById("odleglosc1").value);
    var obiekt = trim(document.getElementById("obiekt").value);
    var info = document.getElementById("info").value;

    var t;
    var x;

    if (
        document.getElementById("radioN").checked === false
        &&
        document.getElementById("radioW").checked === false
        &&
        document.getElementById("radioE").checked === false
        &&
        document.getElementById("radioS").checked === false
    ) {
        alert("Wybierz kierunek!");
        return;
    }

    if (isEmpty(odleglosc) || !isInteger(odleglosc)) {
        alert("Podaj właściwą odległość!");
        return;
    }
    if (obiekt === "") {
        alert("Wybierz obiekt");
        return
    }
    else {

        var wpisDoBazy = kierunek + "- w odległości " + odleglosc + " m, " + " znajduje się " + obiekt + " " + info;
        obiektywTerenie.push(wpisDoBazy);

        obiektywTerenie = obiektywTerenie.sort();
        var iloscObiektowwTablicy = obiektywTerenie.length;
        document.getElementById("demo").innerHTML = iloscObiektowwTablicy;


        wpiszTabliceDoOkna();


//         for (var i = 0; i < obiektywTerenie.length; i++) {
//             var res1 = obiektywTerenie[i].charAt(0);
//
//
//             //      var x = document.createElement("OPTION");
//
//             if (res1 === "n" && znacznikN === false) {
//                 znacznikN = true;
//                 console.log("--- PÓŁNOC");
//                 //     document.getElementById("demo123").innerHTML += "--- PÓŁNOC" + "<br>";
//
//
//                 // joko - dodaje do listy
//                 x = document.createElement("OPTION");
//                 x.setAttribute("value", "PÓŁNOC");
//                 t = document.createTextNode("--- PÓŁNOC");
//                 x.appendChild(t);
//                 document.getElementById("obiekt1234").appendChild(x);
//
//
//             }
//
//             if (res1 === "w" && znacznikW === false) {
//                 znacznikW = true;
//                 console.log("--- ZACHÓD");
//                 //         document.getElementById("demo123").innerHTML += "--- ZACHÓD" + "<br>";
//
//
//                 // joko - dodaje do listy
//                 x = document.createElement("OPTION");
//                 x.setAttribute("value", "--- ZACHÓD");
//                 t = document.createTextNode("--- ZACHÓD");
//                 x.appendChild(t);
//                 document.getElementById("obiekt1234").appendChild(x);
//
//
//             }
//
//             if (res1 === "e" && znacznikE === false) {
//                 znacznikE = true;
//                 console.log("--- WSCHÓD");
// //                document.getElementById("demo123").innerHTML += "--- WSCHÓD" + "<br>";
//
//
//                 // joko - dodaje do listy
//                 x = document.createElement("OPTION");
//                 x.setAttribute("value", "--- WSCHÓD");
//                 t = document.createTextNode("--- WSCHÓD");
//                 x.appendChild(t);
//                 document.getElementById("obiekt1234").appendChild(x);
//
//
//             }
//
//             if (res1 === "s" && znacznikS === false) {
//                 znacznikS = true;
//                 console.log("--- POLUDNIE");
//                 //          document.getElementById("demo123").innerHTML += "--- POLUDNIE" + "<br>";
//
//
//                 // joko - dodaje do listy
//                 x = document.createElement("OPTION");
//                 x.setAttribute("value", "POLUDNIE");
//                 t = document.createTextNode("--- POLUDNIE");
//                 x.appendChild(t);
//                 document.getElementById("obiekt1234").appendChild(x);
//
//
//             }
//
//             //      console.log("res1: " + res1);
//             console.log("obiekt:  " + obiektywTerenie[i]);
//             //      document.getElementById("demo123").innerHTML += obiektywTerenie[i] + "<br>";
//
//
//             // joko - dodaje do listy
//             x = document.createElement("OPTION");
//             x.setAttribute("value", i + "numer" + obiektywTerenie[i]);
//             t = document.createTextNode("* " + obiektywTerenie[i]);
//             x.appendChild(t);
//             document.getElementById("obiekt1234").appendChild(x);
//
//
//         }


    }
    ;
}


function pobierzPlik() {


    var obj = document.getElementById("demo123").innerHTML;
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

    var a = document.createElement('a');
    a.href = 'data:' + data;
    a.download = 'data.json';
    a.innerHTML = 'download JSON';

    var container = document.getElementById('container');
    container.appendChild(a);

}


function zaladujdane() {

    document.getElementById("demo123").innerHTML = fileText;


}


function usuwaniezTablicy() {


    var numerPozycjiDoKasowania = document.getElementById("obiekt1234").value.charAt(0)+document.getElementById("obiekt1234").value.charAt(1);
    console.log("numer wybranej pozycji: " + numerPozycjiDoKasowania);





    var usuwanyElement = obiektywTerenie[document.getElementById("obiekt1234").value.charAt(0)];
    obiektywTerenie.splice(obiektywTerenie.indexOf(usuwanyElement), 1);

    var iloscObiektowwTablicy = obiektywTerenie.length;
    document.getElementById("demo").innerHTML = iloscObiektowwTablicy;

    wpiszTabliceDoOkna();
}







function wpiszTabliceDoOkna() {
    document.getElementById("obiekt1234").innerHTML = "";
    obiektywTerenie = obiektywTerenie.sort();
    var iloscObiektowwTablicy = obiektywTerenie.length;
    document.getElementById("demo").innerHTML = iloscObiektowwTablicy;
    for (var i = 0; i < obiektywTerenie.length; i++) {
        var res1 = obiektywTerenie[i].charAt(0);

        if (res1 === "n" && znacznikN === false) {
            znacznikN = true;
            x = document.createElement("OPTION");
            x.setAttribute("value", "PÓŁNOC");
            t = document.createTextNode("--- PÓŁNOC");
            x.appendChild(t);
            document.getElementById("obiekt1234").appendChild(x);
        }

        if (res1 === "w" && znacznikW === false) {
            znacznikW = true;
            x = document.createElement("OPTION");
            x.setAttribute("value", "--- ZACHÓD");
            t = document.createTextNode("--- ZACHÓD");
            x.appendChild(t);
            document.getElementById("obiekt1234").appendChild(x);
        }

        if (res1 === "e" && znacznikE === false) {
            znacznikE = true;
            x = document.createElement("OPTION");
            x.setAttribute("value", "--- WSCHÓD");
            t = document.createTextNode("--- WSCHÓD");
            x.appendChild(t);
            document.getElementById("obiekt1234").appendChild(x);
        }

        if (res1 === "s" && znacznikS === false) {
            znacznikS = true;
            x = document.createElement("OPTION");
            x.setAttribute("value", "POLUDNIE");
            t = document.createTextNode("--- POLUDNIE");
            x.appendChild(t);
            document.getElementById("obiekt1234").appendChild(x);
        }

        x = document.createElement("OPTION");



        if (i < 10) {

            ii = "0" + i;
            console.log("i-->> ", i);
            x.setAttribute("value", ii + "Numer" + obiektywTerenie[i]);
        } else {
            console.log("i==-->> ", i);
            x.setAttribute("value", i + "numer" + obiektywTerenie[i]);

        }
        t = document.createTextNode("* " + obiektywTerenie[i]);
        x.appendChild(t);
        document.getElementById("obiekt1234").appendChild(x);
    }
    znacznikN = false;
    znacznikW = false;
    znacznikS = false;
    znacznikE = false;
}