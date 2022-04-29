function calculeCurva90RaioCurtoCarbono() {
    var diametro = parseFloat($("#dnCurva90RaioCurtoCarbono").val());
    var espessura = parseFloat($("#espessuraCurva90RaioCurtoCarbono").val());
    var peso = parseFloat(((((diametro * pi) / 2) * (diametro * pi)) / 1000000) * pesoAçoCarbono * espessura);
    var pesoLiquido = parseFloat(peso);
    var pesoBruto = parseFloat(peso * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoCurva90RaioCurtoCarbono").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoCurva90RaioCurtoCarbono").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};

function calculeCurva45RaioCurtoCarbono() {
    var diametro = parseFloat($("#dnCurva45RaioCurtoCarbono").val());
    var espessura = parseFloat($("#espessuraCurva45RaioCurtoCarbono").val());
    var peso = parseFloat(((((diametro * pi) / 2) * (diametro * pi)) / 1000000) * pesoAçoCarbono * espessura);
    var pesoLiquido = parseFloat(peso / 2);
    var pesoBruto = parseFloat((peso / 2) * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoCurva45RaioCurtoCarbono").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoCurva45RaioCurtoCarbono").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};

function calculeCurva90RaioLongoCarbono() {
    var diametro = parseFloat($("#dnCurva90RaioLongoCarbono").val());
    var espessura = parseFloat($("#espessuraCurva90RaioLongoCarbono").val());
    var peso = parseFloat((((((diametro * 1.5) * pi) / 2) * (diametro * pi)) / 1000000) * pesoAçoCarbono * espessura);
    var pesoLiquido = parseFloat(peso);
    var pesoBruto = parseFloat((peso) * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoCurva90RaioLongoCarbono").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoCurva90RaioLongoCarbono").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};