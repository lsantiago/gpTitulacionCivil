$(document).ready(function(){
	cargarJSON();

	$('#btnSumar').click(function(){
		var resultado = parseFloat($('#txtPrimerNum').val()) + parseFloat($('#txtSegundoNum').val()); 
		//$('#txtResultado').val(resultado);


		var Gs = [23.4, 34.5, 12];
		var U = [23.4, 34.5, 12];
		console.log(Gs[1] + U[2]);
		$('#txtResultado').val(Gs[0]);

	});


});


function cargarJSON(){
	console.log('Cargando JSON');

	$.getJSON('./data/db.json', function (data) {
		console.log(data);
	});
}
