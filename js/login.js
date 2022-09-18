$(document).ready(function () {
    $("#login").click(function () {
        var email = $('#email').val()
        var psw = $('#psw').val()
        var usuario = $('#usuario').val()
        var email_confirmar = sessionStorage.getItem("Email")
        var psw_confirmar = sessionStorage.getItem("Pass")
        var user_confirmar = sessionStorage.getItem("usuario")
        if (psw_confirmar == psw && email == email_confirmar && usuario == user_confirmar) {
            window.open('index2.html', '_blank')
            window.close()
        } else {
            alert("Contraseña,Usuario o email incorrecto")
        }
    })
});