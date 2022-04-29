var pesoAço = parseFloat(7.850);
var pi = parseFloat(3.14);

function calculeCurva90RaioCurto() {
    var diametro = parseFloat($("#dnCurva90RaioCurto").val());
    var espessura = parseFloat($("#espessuraCurva90RaioCurto").val());
    var peso = parseFloat(((((diametro * pi) / 2) * (diametro * pi)) / 1000000) * pesoAço * espessura);
    var pesoLiquido = parseFloat(peso);
    var pesoBruto = parseFloat(peso * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoCurva90RaioCurto").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoCurva90RaioCurto").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};

function calculeCurva45RaioCurto() {
    var diametro = parseFloat($("#dnCurva45RaioCurto").val());
    var espessura = parseFloat($("#espessuraCurva45RaioCurto").val());
    var peso = parseFloat(((((diametro * pi) / 2) * (diametro * pi)) / 1000000) * pesoAço * espessura);
    var pesoLiquido = parseFloat(peso / 2);
    var pesoBruto = parseFloat((peso / 2) * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoCurva45RaioCurto").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoCurva45RaioCurto").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};

function calculeCurva90RaioLongo() {
    var diametro = parseFloat($("#dnCurva90RaioLongo").val());
    var espessura = parseFloat($("#espessuraCurva90RaioLongo").val());
    var peso = parseFloat((((((diametro * 1.5) * pi) / 2) * (diametro * pi)) / 1000000) * pesoAço * espessura);
    var pesoLiquido = parseFloat(peso);
    var pesoBruto = parseFloat((peso) * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoCurva90RaioLongo").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoCurva90RaioLongo").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};