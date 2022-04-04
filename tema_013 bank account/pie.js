google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Male',50],
        ['Female',      50],
        ['Other',  100]
    ]);

    var options = {
        legend: {position: 'none'},
        pieHole: 0.65,
        colors: [
            '#836CDA',
            '#FFCA28',
            '#EC6F48'
        ],
        chartArea: {
            left: "3%",
            top: "3%",
            height: "94%",
            width: "94%"

        },
        backgroundColor: '#ffffff',

    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
    var chart2 = new google.visualization.PieChart(document.getElementById('donutchart2'));
    chart2.draw(data, options);
}