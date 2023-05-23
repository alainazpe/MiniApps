$(document).ready(function() {

	$('#ancho').keyboard({type:'tel'});
	$('#alto').keyboard({type:'tel'});

	$('#calculoAncho').keyboard({type:'tel'});
	$('#calculoAlto').keyboard({type:'tel'});

	function detect(){

	    $("#calculoAncho").val(Number($('#labelRange').html()) / 100 * Number($('#ancho').val()));
	    $("#calculoAlto").val(Number($('#labelRange').html()) / 100 * Number($('#alto').val()));

	    proporcion = (Number($('#ancho').val()) / Number($('#alto').val()));


	    $("#campoProporcion").val(proporcion.toFixed(2));
	}

	function change(change){
	     proporcion = (Number($('#ancho').val()) / Number($('#alto').val()));


	if(change){ 
		//cambiaAlto

		$("#calculoAncho").val($("#calculoAlto").val() * proporcion);

		 AltoEntreCalculado =  ( Number($('#alto').val() ) / Number( $('#calculoAlto').val() ) )

		rangoCalculo = 
			Math.round(
				100 / AltoEntreCalculado
			);
		
		$("#range").val(rangoCalculo);
		$("#labelRange").html(rangoCalculo);
		range.dispatchEvent(new Event('input', {bubbles:true}));

	} else {
		//cambiaAncho
		 $("#calculoAlto").val($("#calculoAncho").val() / proporcion);

		 AltoEntreCalculado =  ( Number($('#alto').val() ) / Number( $('#calculoAlto').val() ) )

		rangoCalculo = 
			Math.round(
				100 / AltoEntreCalculado
			);
		
		$("#range").val(rangoCalculo);
		$("#labelRange").html(rangoCalculo);
		range.dispatchEvent(new Event('input', {bubbles:true}));

		}
			   
	}

ChangeFalse = function(){change(false);}

ChangeTrue = function(){change(true);}

	ancho = document.getElementById("ancho");
	alto = document.getElementById("alto");
	calculoAncho = document.getElementById("calculoAncho");
calculoAlto = document.getElementById("calculoAlto");

	 ancho.addEventListener("focusout",  detect);
	 alto.addEventListener("focusout",  detect);
	 calculoAncho.addEventListener("focusout",  ChangeFalse);
	 calculoAlto.addEventListener("focusout",  ChangeTrue);


 

 



	 $("#range").change(function(){    detect();	});


});