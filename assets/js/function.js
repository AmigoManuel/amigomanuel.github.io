$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip();
    
    $("#btnValidar").click(function() {
    	alert(console.log('show #toast1'));
        console.log('show #toast1');
        $('#toast1').toast('show');
    });

    
    $("#toast-body-hide").click(function() {
    	$('#promotion-code-alert').toast('show');
    }); 
    	
    $("#toast-body-hide-msjDp").click(function() {
    	$('#msjUsoDP').toast('show');
    });
    
    $("#noSePermite").click(function() {
    	$('#cartelMinRoundingAmount').toast('show');
    }); 
});