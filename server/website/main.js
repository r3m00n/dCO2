function loadSensors(){
    HOST = "192.168.50.25" // <===== Enter IP here
    var url = "http://"+ HOST +":5000/co2/overview"
    fetch(url)
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
        fetch(url)
        .then((response) =>{
          return response.json();
        })
        .then((data) =>{
        var SensorDataArray = convertToNumberAndDate(CSVToArray(data['csv'].replace(/\n$/, "")));
        var SensorDataTable = google.visualization.arrayToDataTable(SensorDataArray);
        var options = {
            displayAnnotations: true
            
        };
        var chart = new google.visualization.AnnotationChart(document.getElementById('curve_chart'));
        chart.draw(SensorDataTable, options);

        var SensorButton = document.querySelector(".dropbtn");
        SensorButton.textContent = id

    });
  }
}

  function CSVToArray(csvString, delimiter=",", omitFirstRow=false) {
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
