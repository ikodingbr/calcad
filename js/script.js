var isApresentationHidden = false
var isCurvasHidden = true
var isCurva90RaioCurtoInoxHidden = true
var isCurva45RaioCurtoInoxHidden = true
var isCurva90RaioLongoInoxHidden = true
var isCurva90RaioCurtoCarbonoHidden = true
var isCurva45RaioCurtoCarbonoHidden = true
var isCurva90RaioCLongoCarbonoHidden = true

$(document).ready(function () {
    //Set value 0
    $('#sch5sCurva90RaioCurtoInox').val((0 * 5).toFixed(3).replace('.', ',') + ' KG')
    $('#sch10sCurva90RaioCurtoInox').val((0 * 6.35).toFixed(3).replace('.', ',') + ' KG')
    $('#esp8Curva90RaioCurtoInox').val((0 * 8).toFixed(3).replace('.', ',') + ' KG')
    $('#stdsCurva90RaioCurtoInox').val((0 * 9.53).toFixed(3).replace('.', ',') + ' KG')
    $('#xssCurva90RaioCurtoInox').val((0 * 12.7).toFixed(3).replace('.', ',') + ' KG')

    $('#sch5sCurva45RaioCurtoInox').val((0 * 5).toFixed(3).replace('.', ',') + ' KG')
    $('#sch10sCurva45RaioCurtoInox').val((0 * 6.35).toFixed(3).replace('.', ',') + ' KG')
    $('#esp8Curva45RaioCurtoInox').val((0 * 8).toFixed(3).replace('.', ',') + ' KG')
    $('#stdsCurva45RaioCurtoInox').val((0 * 9.53).toFixed(3).replace('.', ',') + ' KG')
    $('#xssCurva45RaioCurtoInox').val((0 * 12.7).toFixed(3).replace('.', ',') + ' KG')

    $('#sch5sCurva90RaioLongoInox').val((0 * 5).toFixed(3).replace('.', ',') + ' KG')
    $('#sch10sCurva90RaioLongoInox').val((0 * 6.35).toFixed(3).replace('.', ',') + ' KG')
    $('#esp8Curva90RaioLongoInox').val((0 * 8).toFixed(3).replace('.', ',') + ' KG')
    $('#stdsCurva90RaioLongoInox').val((0 * 9.53).toFixed(3).replace('.', ',') + ' KG')
    $('#xssCurva90RaioLongoInox').val((0 * 12.7).toFixed(3).replace('.', ',') + ' KG')

    $('#sch5sCurva90RaioCurtoAc').val((0 * 5).toFixed(3).replace('.', ',') + ' KG')
    $('#sch10sCurva90RaioCurtoAc').val((0 * 6.35).toFixed(3).replace('.', ',') + ' KG')
    $('#esp8Curva90RaioCurtoAc').val((0 * 8).toFixed(3).replace('.', ',') + ' KG')
    $('#stdsCurva90RaioCurtoAc').val((0 * 9.53).toFixed(3).replace('.', ',') + ' KG')
    $('#xssCurva90RaioCurtoAc').val((0 * 12.7).toFixed(3).replace('.', ',') + ' KG')

    $('#sch5sCurva45RaioCurtoAc').val((0 * 5).toFixed(3).replace('.', ',') + ' KG')
    $('#sch10sCurva45RaioCurtoAc').val((0 * 6.35).toFixed(3).replace('.', ',') + ' KG')
    $('#esp8Curva45RaioCurtoAc').val((0 * 8).toFixed(3).replace('.', ',') + ' KG')
    $('#stdsCurva45RaioCurtoAc').val((0 * 9.53).toFixed(3).replace('.', ',') + ' KG')
    $('#xssCurva45RaioCurtoAc').val((0 * 12.7).toFixed(3).replace('.', ',') + ' KG')

    $('#sch5sCurva90RaioLongoAc').val((0 * 5).toFixed(3).replace('.', ',') + ' KG')
    $('#sch10sCurva90RaioLongoAc').val((0 * 6.35).toFixed(3).replace('.', ',') + ' KG')
    $('#esp8Curva90RaioLongoAc').val((0 * 8).toFixed(3).replace('.', ',') + ' KG')
    $('#stdsCurva90RaioLongoAc').val((0 * 9.53).toFixed(3).replace('.', ',') + ' KG')
    $('#xssCurva90RaioLongoAc').val((0 * 12.7).toFixed(3).replace('.', ',') + ' KG')

    //Hide
    $('#containerCurva90RaioCurtoInox').hide()
    $('#containerCurva45RaioCurtoInox').hide()
    $('#containerCurva90RaioLongoInox').hide()
    $('#containerCurva90RaioCurtoCarbono').hide()
    $('#containerCurva45RaioCurtoCarbono').hide()
    $('#containerCurva90RaioLongoCarbono').hide()
    $('#containerCurvas').hide()
});

function calcCurva90RaioCurtoInox() {
    var pes = parseFloat(8)
    var dia = parseFloat($('#dnCurva90RaioCurtoInox').val())
    var vpi = parseFloat(3.14)
    var res = parseFloat(((((dia * vpi) / 2) * (dia * vpi)) / 1000000) * pes)

    $('#sch5sCurva90RaioCurtoInox').val((res * 5).toFixed(3).replace('.', ',') + ' KG')
    $('#sch10sCurva90RaioCurtoInox').val((res * 6.35).toFixed(3).replace('.', ',') + ' KG')
    $('#esp8Curva90RaioCurtoInox').val((res * 8).toFixed(3).replace('.', ',') + ' KG')
    $('#stdsCurva90RaioCurtoInox').val((res * 9.53).toFixed(3).replace('.', ',') + ' KG')
    $('#xssCurva90RaioCurtoInox').val((res * 12.7).toFixed(3).replace('.', ',') + ' KG')
}

function calcCurva45RaioCurtoInox() {
    var pes = parseFloat(8)
    var dia = parseFloat($('#dnCurva45RaioCurtoInox').val())
    var vpi = parseFloat(3.14)
    var res = parseFloat((((((dia * vpi) / 2) * (dia * vpi)) / 1000000) * pes) / 2)

    $('#sch5sCurva45RaioCurtoInox').val((res * 5).toFixed(3).replace('.', ',') + ' KG')
    $('#sch10sCurva45RaioCurtoInox').val((res * 6.35).toFixed(3).replace('.', ',') + ' KG')
    $('#esp8Curva45RaioCurtoInox').val((res * 8).toFixed(3).replace('.', ',') + ' KG')
    $('#stdsCurva45RaioCurtoInox').val((res * 9.53).toFixed(3).replace('.', ',') + ' KG')
    $('#xssCurva45RaioCurtoInox').val((res * 12.7).toFixed(3).replace('.', ',') + ' KG')
}

function calcCurva90RaioLongoInox() {
    var pes = parseFloat(8)
    var dia = parseFloat($('#dnCurva90RaioLongoInox').val())
    var vpi = parseFloat(3.14)
    var res = parseFloat((((((dia * vpi) / 2) * 1.5) * (dia * vpi)) / 1000000) * pes)

    $('#sch5sCurva90RaioLongoInox').val((res * 5).toFixed(3).replace('.', ',') + ' KG')
    $('#sch10sCurva90RaioLongoInox').val((res * 6.35).toFixed(3).replace('.', ',') + ' KG')
    $('#esp8Curva90RaioLongoInox').val((res * 8).toFixed(3).replace('.', ',') + ' KG')
    $('#stdsCurva90RaioLongoInox').val((res * 9.53).toFixed(3).replace('.', ',') + ' KG')
    $('#xssCurva90RaioLongoInox').val((res * 12.7).toFixed(3).replace('.', ',') + ' KG')
}

function calcCurva90RaioCurtoAc() {
    var pes = parseFloat(7.85)
    var dia = parseFloat($('#dnCurva90RaioCurtoAc').val())
    var vpi = parseFloat(3.14)
    var res = parseFloat(((((dia * vpi) / 2) * (dia * vpi)) / 1000000) * pes)

    $('#sch5sCurva90RaioCurtoAc').val((res * 5).toFixed(3).replace('.', ',') + ' KG')
    $('#sch10sCurva90RaioCurtoAc').val((res * 6.35).toFixed(3).replace('.', ',') + ' KG')
    $('#esp8Curva90RaioCurtoAc').val((res * 8).toFixed(3).replace('.', ',') + ' KG')
    $('#stdsCurva90RaioCurtoAc').val((res * 9.53).toFixed(3).replace('.', ',') + ' KG')
    $('#xssCurva90RaioCurtoAc').val((res * 12.7).toFixed(3).replace('.', ',') + ' KG')
}

function calcCurva45RaioCurtoAc() {
    var pes = parseFloat(7.85)
    var dia = parseFloat($('#dnCurva45RaioCurtoAc').val())
    var vpi = parseFloat(3.14)
    var res = parseFloat((((((dia * vpi) / 2) * (dia * vpi)) / 1000000) * pes) / 2)

    $('#sch5sCurva45RaioCurtoAc').val((res * 5).toFixed(3).replace('.', ',') + ' KG')
    $('#sch10sCurva45RaioCurtoAc').val((res * 6.35).toFixed(3).replace('.', ',') + ' KG')
    $('#esp8Curva45RaioCurtoAc').val((res * 8).toFixed(3).replace('.', ',') + ' KG')
    $('#stdsCurva45RaioCurtoAc').val((res * 9.53).toFixed(3).replace('.', ',') + ' KG')
    $('#xssCurva45RaioCurtoAc').val((res * 12.7).toFixed(3).replace('.', ',') + ' KG')
}

function calcCurva90RaioLongoAc() {
    var pes = parseFloat(7.85)
    var dia = parseFloat($('#dnCurva90RaioLongoAc').val())
    var vpi = parseFloat(3.14)
    var res = parseFloat((((((dia * vpi) / 2) * 1.5) * (dia * vpi)) / 1000000) * pes)

    $('#sch5sCurva90RaioLongoAc').val((res * 5).toFixed(3).replace('.', ',') + ' KG')
    $('#sch10sCurva90RaioLongoAc').val((res * 6.35).toFixed(3).replace('.', ',') + ' KG')
    $('#esp8Curva90RaioLongoAc').val((res * 8).toFixed(3).replace('.', ',') + ' KG')
    $('#stdsCurva90RaioLongoAc').val((res * 9.53).toFixed(3).replace('.', ',') + ' KG')
    $('#xssCurva90RaioLongoAc').val((res * 12.7).toFixed(3).replace('.', ',') + ' KG')
}

function Curva90RaioCurtoInox() {
    if (isCurva90RaioCurtoInoxHidden == true) {
        $('#apresentation').fadeOut(150)
        $('#containerCurva45RaioCurtoInox').fadeOut(150)
        $('#containerCurva90RaioLongoInox').fadeOut(150)
        $('#containerCurva90RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva45RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva90RaioLongoCarbono').fadeOut(150)

        isApresentationHidden = true
        isCurva45RaioCurtoInoxHidden = true
        isCurva90RaioLongoInoxHidden = true
        isCurva90RaioCurtoCarbonoHidden = true
        isCurva45RaioCurtoCarbonoHidden = true
        isCurva90RaioCLongoCarbonoHidden = true

        isCurva90RaioCurtoInoxHidden = false

        $('#containerCurvas').fadeIn(1000)
        $('#containerCurva90RaioCurtoInox').fadeIn(1000)
    }
    else {
        $('#containerCurva90RaioCurtoInox').fadeOut(150)
        $('#containerCurva45RaioCurtoInox').fadeOut(150)
        $('#containerCurva90RaioLongoInox').fadeOut(150)
        $('#containerCurva90RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva45RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva90RaioLongoCarbono').fadeOut(150)

        isCurva90RaioCurtoInoxHidden = true
        isCurva45RaioCurtoInoxHidden = true
        isCurva90RaioLongoInoxHidden = true
        isCurva90RaioCurtoCarbonoHidden = true
        isCurva45RaioCurtoCarbonoHidden = true
        isCurva90RaioCLongoCarbonoHidden = true

        isApresentationHidden = false

        $('#apresentation').show(1000)
    }
}

function Curva45RaioCurtoInox() {
    if (isCurva45RaioCurtoInoxHidden == true) {
        $('#apresentation').fadeOut(150)
        $('#containerCurva90RaioCurtoInox').fadeOut(150)
        $('#containerCurva90RaioLongoInox').fadeOut(150)
        $('#containerCurva90RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva45RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva90RaioLongoCarbono').fadeOut(150)

        isApresentationHidden = true
        isCurva90RaioCurtoInoxHidden = true
        isCurva90RaioLongoInoxHidden = true
        isCurva90RaioCurtoCarbonoHidden = true
        isCurva45RaioCurtoCarbonoHidden = true
        isCurva90RaioCLongoCarbonoHidden = true

        isCurva45RaioCurtoInoxHidden = false

        $('#containerCurvas').fadeIn(1000)
        $('#containerCurva45RaioCurtoInox').fadeIn(1000)
    }
    else {
        $('#containerCurva90RaioCurtoInox').fadeOut(150)
        $('#containerCurva45RaioCurtoInox').fadeOut(150)
        $('#containerCurva90RaioLongoInox').fadeOut(150)
        $('#containerCurva90RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva45RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva90RaioLongoCarbono').fadeOut(150)

        isCurva90RaioCurtoInoxHidden = true
        isCurva45RaioCurtoInoxHidden = true
        isCurva90RaioLongoInoxHidden = true
        isCurva90RaioCurtoCarbonoHidden = true
        isCurva45RaioCurtoCarbonoHidden = true
        isCurva90RaioCLongoCarbonoHidden = true

        isApresentationHidden = false

        $('#apresentation').show(1000)
    }
}

function Curva90RaioLongoInox() {
    if (isCurva90RaioLongoInoxHidden == true) {
        $('#apresentation').fadeOut(150)
        $('#containerCurva90RaioCurtoInox').fadeOut(150)
        $('#containerCurva45RaioCurtoInox').fadeOut(150)
        $('#containerCurva90RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva45RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva90RaioLongoCarbono').fadeOut(150)

        isApresentationHidden = true
        isCurva90RaioCurtoInoxHidden = true
        isCurva45RaioCurtoInoxHidden = true
        isCurva90RaioCurtoCarbonoHidden = true
        isCurva45RaioCurtoCarbonoHidden = true
        isCurva90RaioCLongoCarbonoHidden = true

        isCurva90RaioLongoInoxHidden = false

        $('#containerCurvas').fadeIn(1000)
        $('#containerCurva90RaioLongoInox').fadeIn(1000)

    }
    else {
        $('#containerCurva90RaioCurtoInox').fadeOut(150)
        $('#containerCurva45RaioCurtoInox').fadeOut(150)
        $('#containerCurva90RaioLongoInox').fadeOut(150)
        $('#containerCurva90RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva45RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva90RaioLongoCarbono').fadeOut(150)

        isCurva90RaioCurtoInoxHidden = true
        isCurva45RaioCurtoInoxHidden = true
        isCurva90RaioLongoInoxHidden = true
        isCurva90RaioCurtoCarbonoHidden = true
        isCurva45RaioCurtoCarbonoHidden = true
        isCurva90RaioCLongoCarbonoHidden = true

        isApresentationHidden = false

        $('#apresentation').show(1000)
    }
}

function Curva90RaioCurtoCarbono() {
    if (isCurva90RaioCurtoCarbonoHidden == true) {
        $('#apresentation').fadeOut(150)
        $('#containerCurva90RaioCurtoInox').fadeOut(150)
        $('#containerCurva45RaioCurtoInox').fadeOut(150)
        $('#containerCurva90RaioLongoInox').fadeOut(150)
        $('#containerCurva45RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva90RaioLongoCarbono').fadeOut(150)

        isApresentationHidden = true
        isCurva90RaioCurtoInoxHidden = true
        isCurva45RaioCurtoInoxHidden = true
        isCurva90RaioLongoInoxHidden = true
        isCurva45RaioCurtoCarbonoHidden = true
        isCurva90RaioCLongoCarbonoHidden = true

        isCurva90RaioCurtoCarbonoHidden = false

        $('#containerCurvas').fadeIn(1000)
        $('#containerCurva90RaioCurtoCarbono').fadeIn(1000)

    }
    else {
        $('#containerCurva90RaioCurtoInox').fadeOut(150)
        $('#containerCurva45RaioCurtoInox').fadeOut(150)
        $('#containerCurva90RaioLongoInox').fadeOut(150)
        $('#containerCurva90RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva45RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva90RaioLongoCarbono').fadeOut(150)

        isCurva90RaioCurtoInoxHidden = true
        isCurva45RaioCurtoInoxHidden = true
        isCurva90RaioLongoInoxHidden = true
        isCurva90RaioCurtoCarbonoHidden = true
        isCurva45RaioCurtoCarbonoHidden = true
        isCurva90RaioCLongoCarbonoHidden = true

        isApresentationHidden = false

        $('#apresentation').show(1000)
    }
}

function Curva45RaioCurtoCarbono() {
    if (isCurva45RaioCurtoCarbonoHidden == true) {
        $('#apresentation').fadeOut(150)
        $('#containerCurva90RaioCurtoInox').fadeOut(150)
        $('#containerCurva45RaioCurtoInox').fadeOut(150)
        $('#containerCurva90RaioLongoInox').fadeOut(150)
        $('#containerCurva90RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva90RaioLongoCarbono').fadeOut(150)

        isApresentationHidden = true
        isCurva90RaioCurtoInoxHidden = true
        isCurva45RaioCurtoInoxHidden = true
        isCurva90RaioLongoInoxHidden = true
        isCurva90RaioCurtoCarbonoHidden = true
        isCurva90RaioCLongoCarbonoHidden = true

        isCurva45RaioCurtoCarbonoHidden = false

        $('#containerCurvas').fadeIn(1000)
        $('#containerCurva45RaioCurtoCarbono').fadeIn(1000)

    }
    else {
        $('#containerCurva90RaioCurtoInox').fadeOut(150)
        $('#containerCurva45RaioCurtoInox').fadeOut(150)
        $('#containerCurva90RaioLongoInox').fadeOut(150)
        $('#containerCurva90RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva45RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva90RaioLongoCarbono').fadeOut(150)

        isCurva90RaioCurtoInoxHidden = true
        isCurva45RaioCurtoInoxHidden = true
        isCurva90RaioLongoInoxHidden = true
        isCurva90RaioCurtoCarbonoHidden = true
        isCurva45RaioCurtoCarbonoHidden = true
        isCurva90RaioCLongoCarbonoHidden = true

        isApresentationHidden = false

        $('#apresentation').show(1000)
    }
}

function Curva90RaioLongoCarbono() {
    if (isCurva90RaioCLongoCarbonoHidden == true) {
        $('#apresentation').fadeOut(150)
        $('#containerCurva90RaioCurtoInox').fadeOut(150)
        $('#containerCurva45RaioCurtoInox').fadeOut(150)
        $('#containerCurva90RaioLongoInox').fadeOut(150)
        $('#containerCurva90RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva45RaioCurtoCarbono').fadeOut(150)

        isApresentationHidden = true
        isCurva90RaioCurtoInoxHidden = true
        isCurva45RaioCurtoInoxHidden = true
        isCurva90RaioLongoInoxHidden = true
        isCurva90RaioCurtoCarbonoHidden = true
        isCurva45RaioCurtoCarbonoHidden = true

        isCurva90RaioCLongoCarbonoHidden = false

        $('#containerCurvas').fadeIn(1000)
        $('#containerCurva90RaioLongoCarbono').fadeIn(1000)
    }
    else {
        $('#containerCurva90RaioCurtoInox').fadeOut(150)
        $('#containerCurva45RaioCurtoInox').fadeOut(150)
        $('#containerCurva90RaioLongoInox').fadeOut(150)
        $('#containerCurva90RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva45RaioCurtoCarbono').fadeOut(150)
        $('#containerCurva90RaioLongoCarbono').fadeOut(150)

        isCurva90RaioCurtoInoxHidden = true
        isCurva45RaioCurtoInoxHidden = true
        isCurva90RaioLongoInoxHidden = true
        isCurva90RaioCurtoCarbonoHidden = true
        isCurva45RaioCurtoCarbonoHidden = true
        isCurva90RaioCLongoCarbonoHidden = true

        isApresentationHidden = false

        $('#apresentation').show(1000)
    }
}