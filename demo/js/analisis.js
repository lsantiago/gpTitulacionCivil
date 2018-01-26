$(document).ready(function(){
	

	$('#btnSumar').click(function(){
		var resultado = parseFloat($('#txtPrimerNum').val()) + parseFloat($('#txtSegundoNum').val()); 
		$('#txtResultado').val(resultado);


		var Gs = [23.4, 34.5, 12];
		var U = [23.4, 34.5, 12];
		console.log(Gs[1] + U[2]);


		$('#txtResultado').val(resultado);

	});


	$('#get-data').click(function () {
		cargarJSON();
	});


});


function cargarJSON(){
	console.log('Cargando JSON');

	var showData = $('#show-data');

	$.getJSON('./data/db.json', function (data) {
		console.log(data);

		var items = data.items.map(function (item) {
			return item.key + ': ' + item.value;
		});

		showData.empty();

		if (items.length) {
			var content = '<li>' + items.join('</li><li>') + '</li>';
			var list = $('<ul />').html(content);
			showData.append(list);
		}
	});
}
