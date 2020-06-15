// Diagram Batang Analisis 1

function start()
{
a();
b();
// c();
d();
}

// Diagram Batang Analisis 1
function a() {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light1", // "light1", "light2", "dark1", "dark2"
	axisY: {
		title: "Banyak Siswa"
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "grey",
		legendText: "Ukuran Sepatu",
		dataPoints: [      
			{ y: 2, label: "34" },
			{ y: 3,  label: "35" },
			{ y: 3,  label: "36" },
			{ y: 4,  label: "37" },
			{ y: 5,  label: "38" },
			{ y: 3, label: "39" },
			{ y: 6,  label: "40" },
			{ y: 2,  label: "41" },
			{ y: 1,  label: "42" }
		]
	}]
});
chart.render();
console.log;
}

// Diagram Garis Analisis 1
function b() {

var chart2 = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	theme: "light1",
	axisY:{
		includeZero: false
	},
	data: [{        
		type: "line",       
		dataPoints: [
			{ y: 2, label: "34" },
			{ y: 3,  label: "35" },
			{ y: 3,  label: "36" },
			{ y: 4,  label: "37" },
			{ y: 5,  label: "38" },
			{ y: 3, label: "39" },
			{ y: 6,  label: "40" },
			{ y: 2,  label: "41" },
			{ y: 1,  label: "42" }
		]
	}]
});
chart2.render();

}

// function c() {

			// var chart3 = new CanvasJS.Chart("chartContainer3", {
			// 	animationEnabled: true,
			// 	theme: "light1", // "light1", "light2", "dark1", "dark2"
			// 	axisY: {
			// 		title: "Jumlah (ribuan ton)"
			// 	},
			// 	data: [{        
			// 		type: "column",  
			// 		showInLegend: true, 
			// 		legendText: "Tahun",
			// 		dataPoints: [      
			// 			{ y: 3, label: "2003" },
			// 			{ y: 2,  label: "2004" },
			// 			{ y: 4,  label: "2005" },
			// 			{ y: 2.5,  label: "2006" },
			// 			{ y: 5,  label: "2007" },
			// 			{ y: 4, label: "2008" }
			// 		]
			// 	}]
			// });
			// chart3.render();
			// }

function d() {

var chart4 = new CanvasJS.Chart("piechart", {
	animationEnabled: true,
	legend:{
		cursor: "pointer",
		itemclick: explodePie
	},
	data: [{
		type: "pie",
		showInLegend: true,
		toolTipContent: "{name}: <strong>{y}%</strong>",
		indexLabel: "{name} - {y}%",
		dataPoints: [
			{ y: 2, name: "34" },
			{ y: 3,  name: "35" },
			{ y: 3,  name: "36" },
			{ y: 4,  name: "37" },
			{ y: 5,  name: "38" },
			{ y: 3, name: "39" },
			{ y: 6,  name: "40" },
			{ y: 2,  name: "41" },
			{ y: 1,  name: "42" }
		]
	}]
});
chart4.render();
}

function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();

}
window.onload = start;

// // Load google charts
// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);

// // Draw the chart and set the chart values
// function drawChart() {
//   var data = google.visualization.arrayToDataTable([
//   ['Ukuran Sepatu', 'Banyak Siswa'],
//   ['34', 2],
//   ['35', 3],
//   ['36', 3],
//   ['37', 4],
//   ['38', 5],
//   ['39', 3],
//   ['40', 6],
//   ['41', 2],
//   ['42', 1]
// ]);

//   // Optional; add a title and set the width and height of the chart
//   var options = {'title':'Data Ukuran Sepatu Siswa Kelas VIII B', 'width':650, 'height':500};

//   // Display the chart inside the <div> element with id="piechart"
//   var chart = new google.visualization.PieChart(document.getElementById('piechart'));
//   chart.draw(data, options);
// }

