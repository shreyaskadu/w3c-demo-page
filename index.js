$(document).ready(function () {
    $("#panal").click(function () {
        $("#div1").fadeIn();
    });
    $("#btn1").click(function(){
     $("#fig1").hide();
     
    });
    $("#btn2").click(function(){
     $("#fig2").hide();
     
    });
    $("#btn3").click(function(){
     $("#fig1").show();
     $("#fig2").show();
     
    });
});
