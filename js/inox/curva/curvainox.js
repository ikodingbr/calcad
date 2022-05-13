function calculeCurva90GomadaRaioCurtoInox() {
    let diametro = parseFloat($("#dnCurva90GomadaRaioCurtoInox").val());
    let espessura = parseFloat($("#espessuraCurva90GomadaRaioCurtoInox").val());
    let peso = parseFloat(((((diametro * pi) / 2) * (diametro * pi)) / 1000000) * pesoAçoInox * espessura);
    let pesoLiquido = parseFloat(peso);
    let pesoBruto = parseFloat(peso * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoCurva90GomadaRaioCurtoInox").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoCurva90GomadaRaioCurtoInox").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};

function calculeCurva45GomadaRaioCurtoInox() {
    let diametro = parseFloat($("#dnCurva45GomadaRaioCurtoInox").val());
    let espessura = parseFloat($("#espessuraCurva45GomadaRaioCurtoInox").val());
    let peso = parseFloat(((((diametro * pi) / 2) * (diametro * pi)) / 1000000) * pesoAçoInox * espessura);
    let pesoLiquido = parseFloat(peso / 2);
    let pesoBruto = parseFloat((peso / 2) * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoCurva45GomadaRaioCurtoInox").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoCurva45GomadaRaioCurtoInox").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};

function calculeCurva90GomadaRaioLongoInox() {
    let diametro = parseFloat($("#dnCurva90GomadaRaioLongoInox").val());
    let espessura = parseFloat($("#espessuraCurva90GomadaRaioLongoInox").val());
    let peso = parseFloat((((((diametro * 1.5) * pi) / 2) * (diametro * pi)) / 1000000) * pesoAçoInox * espessura);
    let pesoLiquido = parseFloat(peso);
    let pesoBruto = parseFloat((peso) * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoCurva90GomadaRaioLongoInox").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoCurva90GomadaRaioLongoInox").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};