// Array definition of choices
var keuze = new Array();

var monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

var weekday = new Array(7);
 weekday[0] = "Sunday";
 weekday[1] = "Monday";
 weekday[2] = "Tuesday";
 weekday[3] = "Wednesday";
 weekday[4] = "Thursday";
 weekday[5] = "Friday";
 weekday[6] = "Saturday";


function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// print month table
function printTable(monthLength) {
  var d = new Date(keuze[0], keuze[1]);

  document.body.innerHTML +="<br>"+ monthNames[d.getMonth()-1] + " " + d.getFullYear();
  document.body.innerHTML +="<br>";

  var body = document.getElementsByTagName("body")[0];

  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var row = document.createElement("tr");
  for (var i = 0; i < 5; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < monthLength; j++) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell in row "+i+", column "+j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}

<<<<<<< HEAD:kalender.js
<<<<<<< HEAD
function submit(){
<<<<<<< HEAD
=======
function test() {
    var keuze = new Array();
    keuze[0] = document.getElementById("Jaar").value;
    keuze[1] = document.getElementById("Maand").value;

    keuze[0] = 2018;
    keuze[1] = 1;
    submit();
}

function submit(){
>>>>>>> 2b8a0ac88f947c6276517a0d3f46d031595c728c
    var keuze = new Array();
=======
function submit() {
>>>>>>> 7c95e84d7cf1253aa23c115eefb80da3f1bb236a:js/kalender.js
    keuze[0] = document.getElementById("Jaar").value;
    keuze[1] = document.getElementById("Maand").value;

<<<<<<< HEAD
=======
>>>>>>> f2158fa593a6f708e8461e816adb2c93daadc965
=======
>> 2b8a0ac88f947c6276517a0d3f46d031595c728c
    // Check if data is entered
    if(keuze[0] == "" || keuze[1] == "" ){
      document.body.innerHTML += "<br>" + "U heeft geen maand of jaar geselecteerd";
    } else {
      printTable();

      // var d = new Date(keuze[0], keuze[1]);
      /*
      document.body.innerHTML +="<br>"+ keuze[1];
      document.body.innerHTML +="<br>"+ keuze[0];

      document.body.innerHTML += "<br>" + d.getFullYear();
      document.body.innerHTML += "<br>" + monthNames[d.getMonth()-1];
      document.body.innerHTML += "<br>" + daysInMonth(keuze[1], keuze[0]);
      document.body.innerHTML += "<br>" + weekday[d.getDay()];
      printTable(daysInMonth(keuze[1], keuze[0]));
      */

    }
  }
