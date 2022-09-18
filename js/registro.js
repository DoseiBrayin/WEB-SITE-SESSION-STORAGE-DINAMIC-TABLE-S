$(document).ready(function(){
    $("#registrar").click(function(){
        var email = $('#email').val()
        var Usuario = $('#usuario').val()
        var Dir = $('#dir').val()
        var psw = $('#psw').val()
        var psw_repeat = $('#psw_confirm').val();
        //Autenticamos
        if(psw == psw_repeat && (email!='' && Usuario!='' && Dir!='' && psw!='' &&psw_repeat!='')){
            sessionStorage.setItem('Email',email)
            sessionStorage.setItem('Pass',psw)
            sessionStorage.setItem('Dir',Dir)
            sessionStorage.setItem('usuario',Usuario)
            window.open("login.html",'_blank')
            window.close();
        }else{
            alert('Contraseñas no coinciden o campos nulos')
        }
    });
});