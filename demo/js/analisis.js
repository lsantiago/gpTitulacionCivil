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
		//cargarJSON();

		startFirebase();
		

		/*loadBinaryFile('data/vlee.sqlite', function(data){
		console.log("Loading database...");
		var db = new SQL.Database(data);

		var res = db.exec("SELECT id FROM Factor WHERE id=1");
		document.getElementById("res").textContent = JSON.stringify(res);

		valor = JSON.parse(JSON.stringify(res));
		console.log(valor);
			
		//console.log(parseFloat(valor[0].values[0]) +2);
		});*/
	});


});


function startFirebase(){
	firebase.initializeApp(config);

	  // accedo al servicio de trabajo con la base de datos en tiempo real
	  var databaseService = firebase.database();

	  var ref = databaseService.ref('items');
	  var data = null;

	  ref.once("value", function(snapshot) {
			data = snapshot.val();
			showDatos(data);
	  });

	  

}

function showDatos(datos){
	nroDatos = datos.length;

	for(i = 0; i < nroDatos; i++){
		console.log(datos[i].key);
	}  	
}


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


// extrae información del archivo sqlite
function loadBinaryFile(path,success) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", path, true); 
	xhr.responseType = "arraybuffer";
	xhr.onload = function() {
		var data = new Uint8Array(xhr.response);
		var arr = new Array();
		for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
			success(arr.join(""));
	};
	xhr.send();
};


