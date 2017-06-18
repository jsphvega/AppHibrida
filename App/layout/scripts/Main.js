function archivo(evt) {
	var files = evt.target.files; // FileList object

	// Obtenemos la imagen del campo "file".
	for (var i = 0, f; f = files[i]; i++) {
		//Solo admitimos imágenes.
		if (!f.type.match('image.*')) {
			continue;
		}

		var reader = new FileReader();
		reader.onload = (function(theFile) {
			return function(e) {
				// Insertamos la imagen
				document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
				NombreDocumento(theFile.name);
			};
		})(f);

		reader.readAsDataURL(f);
	}

	TiempoSistema();
	FechaSistema();
}

function TiempoSistema() {
	var tiempo = new Date();
	var hora = tiempo.getHours();
	var minuto = tiempo.getMinutes();
	var segundo = tiempo.getSeconds();

	document.getElementById('txthora').value = hora +":" + minuto +":" + segundo;
}

function FechaSistema() {
	var f = new Date();
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

	document.getElementById("txtfecha").value = diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
}

function NombreDocumento(Nombre){
	document.getElementById("txtNombre").value = Nombre; 
}

document.getElementById('files').addEventListener('change', archivo, false);
document.getElementById('txthora').addEventListener('value', TiempoSistema, false);
document.getElementById('txtfecha').addEventListener('value', FechaSistema, false);