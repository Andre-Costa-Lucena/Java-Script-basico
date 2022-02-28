const turnOn = document.getElementById ( "turnOn" )
const turnOff = document.getElementById ( "turnOff" )
const newL = document.getElementById( "newLight" )
const lamp = document.getElementById ( "lamp" )


function isLampBroken () {
    return lamp.src.indexOf ( "quebrada" ) > -1    
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = "./image/ligada.jpg";
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = "./image/desligada.jpg";
    }    
}

function lampBroken () {
    lamp.src = "./image/quebrada.jpg";
}

function newLight () {
    if ( isLampBroken () ) {
        lamp.src = "./image/desligada.jpg";
    }
}

newL.addEventListener ( "click", newLight);
turnOn.addEventListener ( "click", lampOn );
turnOff.addEventListener ( "click", lampOff );
lamp.addEventListener ( "mouseover", lampOn );
lamp.addEventListener ( "mouseleave", lampOff );
lamp.addEventListener ( "dblclick", lampBroken );