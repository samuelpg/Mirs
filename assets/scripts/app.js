$( document ).ready(function(){
    $(".button-collapse").sideNav();

    $('.learn-more-btn').on('click tap', function(){
        $('html, body').animate({
             scrollTop: (500)
         }, 500);
    });

    //contacto    
    var $name = $("#NombreyApellido");
    var $email = $("#email");
    var $cellphone = $("#Telefono");
    var $empresa = $("#Empresa");
    var $message = $("#Mensaje");
    
    $("#sendMail").click(function(){
        console.log("AAA")
        if(($name.val()=="") || ($email.val()=="") || ($cellphone.val()=="") || ($empresa.val()=="") || ($message.val()=="")){
            $(".hideb-2").addClass("show");
        }else{
            $(".hideb-2").removeClass("show");
            $(".hideb").addClass("show");
            $("#sendMail").addClass("disabled");
        }
    });
})


