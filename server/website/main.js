function loadSensors(){
    HOST = "192.168.50.25" // <===== Enter IP here
    fetch("http://"+ HOST +":5000/co2/overview")
    .then((response) =>{
      return response.json();
    }) 
    .then((data) =>{
      var myButton = document.querySelector(".dropdown-content")
      for (var i = 0; i < data.names.length; i++){
          var sensor = document.createElement('a');
          sensor.innerHTML = data.names[i];
          sensor.setAttribute("id", data.names[i])
          sensor.setAttribute("onclick", "buttonClicked(this.id)")
          myButton.appendChild(sensor);

      }
    })
  }

function buttonClicked(id){
    var HOST = "192.168.50.25" // <===== Enter IP here
    var url = "http://" + HOST + ":5000/co2/" + id;
    google.charts.load('current', {'packages':['annotationchart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function() {
        if (request.status >= 200 && request.status < 400) {

        var SensorDataJSON = JSON.parse(request.responseText);
        var SensorDataArray = convertToNumberAndDate(CSVToArray(SensorDataJSON['csv'].replace(/\n$/, "")));
        var SensorDataTable = google.visualization.arrayToDataTable(SensorDataArray);

        var options = {
            displayAnnotations: true
            
        };

        var chart = new google.visualization.AnnotationChart(document.getElementById('curve_chart'));
        chart.draw(SensorDataTable, options);

        } else {
        console.log("Fetching Data failed." + request.status);
        }
        };

        request.onerror = function() {
        // There was a connection error of some sort
        };

        request.send();

        var SensorButton = document.querySelector(".dropbtn");
        SensorButton.textContent = id

    }
}

  var CSVToArray = function CSVToArray(csvString, delimiter=",", omitFirstRow=false) {
      return csvString
          .slice(omitFirstRow ? csvString.indexOf("\n") + 1 : 0)
          .split("\n")
          .map(function(v) {
              return v.split(delimiter);
          });
  };

  function convertToNumberAndDate(array){
    for (i = 1; i < array.length; i++){
      array[i][1] = parseInt(array[i][1]);
      array[i][0] = new Date(array[i][0]);
    }
    return array;
  }
