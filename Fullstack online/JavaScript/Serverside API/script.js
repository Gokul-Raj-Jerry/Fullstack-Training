function loadDoc() {
    var locv = new XMLHttpRequest();
    locv.onreadystatechange = function () {
    }
    locv.open('GET', 'https://jsonplaceholder.typicode.com/users');
    locv.send();



    // const xhttp = new XMLHttpRequest(); // S1 --> Create XML http Request Object
    // xhttp.onload = function () {  // S2 --> Write a callback function
    //     document.getElementById("demo").innerHTML =
    //         this.responseText;
    // }
    // xhttp.open("GET", "ajax_info.txt");
    // xhttp.send();
};