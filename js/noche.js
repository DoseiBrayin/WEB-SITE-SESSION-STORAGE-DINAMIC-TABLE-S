$(document).ready(function () {
    $("#Dark").on("click", function () {
        $("#Nav").css("background-color", "#808080")
        $(".container").css("background-color", "#808080")
        $(this).removeClass('btn btn-dark')
        $(this).addClass('btn btn-light')
        $(this).text('Light')
        $(this).removeAttr("id");
        $(this).attr("id", "dia");
    })
    console.log($("#A").val())

});