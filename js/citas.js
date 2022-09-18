$(document).ready(function(){
    $("#btnInsertar").click(function () {
        var len = 10; 
        var referencia = parseInt((Math.random() * 9 + 1) * Math.pow(10,len-1), 10);
        var tipo = $("#tipo").val();
        var fecha = $("#fecha").val();
        var desc = $("#desc").val();
        var cantidad = $("#cantidad").val();
        if(tipo!='' && fecha!='' && desc!='' && cantidad!=''){
            alert(fecha)
            nuevaFila = "<tr>" +
                '<td>' + referencia + '</td>' +
                '<td>' + tipo + '</td>' +
                '<td>' + fecha + '</td>' +
                '<td>' + desc + '</td>' +
                '<td>' + cantidad + '</td>' +
                "</tr>";
    
            $("#tabla").append(nuevaFila);
            
            $("#tipo").val(null);
            $("#fecha").val(null);
            $("#desc").val(null);
            $("#cantidad").val(null);
        }else{
            alert('Rellene todos los campos')
        }

    });
});