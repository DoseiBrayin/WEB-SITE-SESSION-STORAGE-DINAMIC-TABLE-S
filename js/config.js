$(document).ready(function(){
    alert('Cambie los campos que desea editar, confirme sus datos y pulse el boton Confirmar')

    $("#usuario").val(sessionStorage.getItem('usuario'))
    $("#email").val(sessionStorage.getItem('Email'))
    $("#dir").val(sessionStorage.getItem('Dir'))
    $("#psw").val(sessionStorage.getItem('Pass'))

    $("#registrar").click(function(){
        var email = $('#email').val()
        var user = $('#usuario').val()
        var Dir = $('#dir').val()
        var psw = $('#psw').val()
        var psw_repeat = $('#psw_confirm').val();
        //Almacenamos los datos y autenticamos
        if(psw == psw_repeat){
            sessionStorage.setItem('usuario',user)
            sessionStorage.setItem('Pass',psw)
            sessionStorage.setItem('Dir',Dir)
            sessionStorage.setItem('Email',email)
            window.open("login.html",'_blank')
            window.close();
        }else{
            alert('Contraseñas no coinciden')
        }
    });
});