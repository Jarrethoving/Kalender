function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function printTable(monthLength) {
    // for(var i = 1; i <= monthLength; i++) {

    // }
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

function submit(){
    var keuze = new Array();
    keuze[0] = document.getElementById("Jaar").value;
    keuze[1] = document.getElementById("Maand").value;

    // Check if data is entered
    if(keuze[0] == "" || keuze[1] == "" ){
      document.write("U heeft geen maand of jaar geselecteerd");
    } else {
      document.body.innerHTML +="<br>"+ keuze[1];
      document.body.innerHTML +="<br>"+ keuze[0];

      var d = new Date(keuze[0], keuze[1]);

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

      document.body.innerHTML += "<br>" + d.getFullYear();
      document.body.innerHTML += "<br>" + monthNames[d.getMonth()-1];
      document.body.innerHTML += "<br>" + daysInMonth(keuze[1], keuze[0]);
      document.body.innerHTML += "<br>" + weekday[d.getDay()];
      printTable(daysInMonth(keuze[1], keuze[0]));
    // De weekdag begint nu wel op de nieuwe maand.

    }
  }