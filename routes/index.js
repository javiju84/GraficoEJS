var express = require('express');
var router = express.Router();
var request = require ('request');
/* GET home page. */
var jsonString = null;

var urlSantander = "https://www.quandl.com/api/v3/datasets/YAHOO/MC_SAN.json?api_key=HGoTu3E3A_Lsv6biw1kc";

	request({
		url: urlSantander,
		json: true	
	}, 
	function (error, response, body){

		if (!error && response.statusCode == 200){
		var parseo = body.dataset.data;
		console.log(parseo)
		var jsonString=[];
		for(var i = 0 ; i < parseo.length; i++){
			var jsonDato={};
			
				jsonDato.fecha = String(parseo[i][0]);
				jsonDato.abierto = parseFloat(parseo[i][1]);
				jsonDato.alto = parseFloat(parseo[i][2]);
				jsonDato.bajo = parseFloat(parseo[i][3]);
				jsonDato.cierre = parseFloat(parseo[i][4]);
				jsonDato.volumen = parseFloat(parseo[i][5]);
				jsonString.push(jsonDato);
			}

		
			var jsonArrayValor = JSON.parse(JSON.stringify(jsonString));
			//
			var aDocs =  jsonArrayValor;
			//console.log(jsonArrayValor);
			
			
		}
	

//console.log(aDocs);
/*Grafico*/
/*
	window.onload=function(){
	var valores = [];
	for(var n=0; n< jsonArrayValor; n++){
		valores.push([
			jsonArrayValor[n]['fecha'],
			jsonArrayValor[n]['cierre']
			]);
		console.log(jsonArrayValor[n])
	}


	 anychart.onDocumentReady(function() {
      // create data set on our data
      var dataSet = anychart.data.set([ valores[n=20],valores[n=19],valores[n=18],valores[n=17],valores[n=16],valores[n=15],valores[n=14],valores[n=13],valores[n=12],valores[n=11],valores[n=10],valores[n=9],valores[n=8],valores[n=7],valores[n=6],valores[n=5],valores[n=4],valores[n=3],valores[n=2],valores[n=1],valores[n=0] ]);
     // var dataSet = anychart.data.set(valores);

   
      // map data for the first series, take x from the zero column and value from the first column of data set
      var seriesData = dataSet.mapAs({x: [0], value: [1]});

     // create line chart
      chart = anychart.area();

      // adding dollar symbols to yAxis labels
      chart.yAxis().labels().textFormatter("€{%Value}");

      // turn on chart animation
      chart.animation(true);
      
      // axes settings
      chart.yAxis().title('Precio');
      chart.xAxis().title('Fecha');
      chart.xAxis().labels().padding([5,5,0,5]);
      chart.xAxis().labels().rotation(90);
      chart.xAxis().overlapMode("allowOverlap");


      // set chart title text settings
      chart.title('SAN Santander<br/>' +
      '<span style="color:#212121; font-size: 13px;">2016</span>');
      chart.title().useHtml(true).padding([0,0,20,0]);

      // create a series with mapped data
      var series = chart.area(seriesData);
      series.name("ACME Share Price");
      series.hoverMarkers().enabled(true).type('circle').size(4);

      // set chart tooltip and interactivity settings
      chart.tooltip().position('top').anchor('centerbottom');
      chart.tooltip().positionMode('point');
      chart.interactivity().hoverMode('byX');
      
      // chart padding
      chart.right(20);

      // set container id for the chart
      chart.container('container');

      // initiate chart drawing
      chart.draw();
    });
	};
	*/
var usuarios = [
  { nombre: 'javier', email: 'javier@email.com' },
  { nombre: 'pedro', email: 'pedro@email.com' },
  { nombre: 'fran', email: 'fran@email.com' }
];

router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Express',
  	aDocs: aDocs,
  	usuarios: usuarios,
  	//container: container
  	//parseo:parseo
  });
});

});
module.exports = router;
