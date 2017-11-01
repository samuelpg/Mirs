var lng, lang, country, SS;

function placeHolderToSpanish(){
    
    if(document.querySelector("#gform")){
        document.getElementsByName('name')[0].placeholder='Nombre y Apellido';
        document.getElementsByName('cellphone')[0].placeholder='Telefono';
       
        document.getElementsByName('company')[0].placeholder='Empresa';
        document.getElementsByName('message')[0].placeholder='Mensaje';
        
        document.getElementById('sent').innerHTML="Mensaje Enviado";
        document.getElementById('fill').innerHTML="Rellene los Campos";
        document.getElementById('sendMail').innerHTML="Enviar";    
    }
}

function placeHolderToEnglish(){
    if(document.querySelector("#gform")){
        document.getElementsByName('name')[0].placeholder='Name and Lastname';
        document.getElementsByName('cellphone')[0].placeholder='Phone Number';
    
        document.getElementsByName('company')[0].placeholder='Company';
        document.getElementsByName('message')[0].placeholder='Message';
        
        document.getElementById('sent').innerHTML="Message Sent";
        document.getElementById('fill').innerHTML="Fill All the Fields";
        document.getElementById('sendMail').innerHTML="Send";
    }
}



function getZone() {

    SS = sessionStorage.getItem("lang") || undefined;

    if (SS == undefined) {

        $.ajax({
            type: "GET",
            url: "http://ip-api.com/json",
            cache: false,
            success: function (data) {

                country = data.countryCode;

                console.log(country);

                if ( ( country == "AR" ) || ( country == "BO" )|| ( country == "BR" ) ||( country == "CL" ) ||( country == "CO" ) || ( country == "EC" ) || ( country == "GY" ) || ( country == "PY" ) || ( country == "PE" ) || ( country == "UY" ) || ( country == "VE" ) || ( country == "CU" ) || ( country == "CW" ) || ( country == "DM" ) || ( country == "SV" ) || ( country == "CR" ) || ( country == "MX" ) || ( country == "GT" ) || ( country == "HN" ) || ( country == "NI" ) || ( country == "PA" ) || ( country == "PR" ) || ( country == "ES" ) ) {

                    lng = "ESP";

                    console.log("LATAM/CENTRALLATAM")

                    sessionStorage.setItem("lang", lng);

                } else {

                    console.log('ENGLISH');

                    lng = "ENG";

                    sessionStorage.setItem("lang", lng);

                }

                changeLng(lng);

            },
            error: function (xmlHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown);

                lng = "ESP";

                sessionStorage.setItem("lang", lng);


                changeLng(lng);

            }
        });


    }else{

        changeLng(SS);

    }

}

function switchLng() {

    SS =  sessionStorage.getItem("lang")||undefined;

    //console.log('changing');
    console.log(SS)

    if (SS == undefined){
        lng = "ENG";
        sessionStorage.setItem("lang", lng);
        //console.log('Lng no definido');
    }

    if (SS == "ENG"){
        
        lng = "ESP";
        sessionStorage.setItem("lang", lng);
    }

    if (SS == "ESP"){
        
        lng = "ENG";
        sessionStorage.setItem("lang", lng);
    }

    console.log(lng);

    changeLng(lng);

}

function changeLng(SSS) {

    var en = document.getElementsByClassName('en'),
        enbutton = document.getElementsByClassName('enbutton'),
        es = document.getElementsByClassName('es'),
        esbutton = document.getElementsByClassName('esbutton');


    if (SSS === "ESP"){

        //console.log('FUE ESP')
        placeHolderToSpanish();
        
        for (var i = 0; i < en.length; i++) {
            en[i].style.display = 'none';
        }

        for (var i = 0; i < enbutton.length; i++) {
            enbutton[i].style.display = 'none'
        }

        for (var i = 0; i < es.length; i++) {
            if(es[i].classList.contains("li-item")){
                es[i].style.display = 'list-item'
            }else{
                es[i].style.display = 'block'
            }

        }

        for (var i = 0; i < esbutton.length; i++) {
            esbutton[i].style.display = 'inline-block'
        }

    }

    if (SSS === "ENG" || undefined) {

        //console.log('FUE ENG');
         placeHolderToEnglish();

        for (var i = 0; i < en.length; i++) {
            if(en[i].classList.contains("li-item")){
                en[i].style.display = 'list-item'
            }else{
                en[i].style.display = 'block'
            }
        }

        for (var i = 0; i < enbutton.length; i++) {
            enbutton[i].style.display = 'inline-block'
        }

        for (var i = 0; i < es.length; i++) {
            es[i].style.display = 'none'
        }

        for (var i = 0; i < esbutton.length; i++) {
            esbutton[i].style.display = 'none'
        }

    }

}

getZone();
