$(document).ready(function () {
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