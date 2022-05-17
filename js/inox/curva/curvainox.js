function calculeCurva90GomadaRaioCurtoInox() {
    let diametro = parseFloat($("#dnCurva90GomadaRaioCurtoInox").val());
    let espessura = parseFloat($("#espessuraCurva90GomadaRaioCurtoInox").val());
    let peso = parseFloat(((((diametro * pi) / 2) * (diametro * pi)) / 1000000) * pesoAçoInox * espessura);
    let pesoLiquido = parseFloat(peso);
    let pesoBruto = parseFloat(peso * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoCurva90GomadaRaioCurtoInox").val(pesoLiquido.toFixed(2).replace(".", ",") + " kg");
    $("#pesoBrutoCurva90GomadaRaioCurtoInox").val(pesoBruto.toFixed(2).replace(".", ",") + " kg");

    let largura = parseFloat((diametro * pi) / 2);
    let comprimento = parseFloat(diametro * pi);
    let area = parseFloat((largura * comprimento) / 1000000);
    if (isNaN(largura)) largura = 0;
    if (isNaN(comprimento)) comprimento = 0;
    if (isNaN(area)) area = 0;
    $("#larguraCurva90GomadaRaioCurtoInox").val(largura.toFixed(2).replace(".", ",") + " mm");
    $("#comprimentoCurva90GomadaRaioCurtoInox").val(comprimento.toFixed(2).replace(".", ",") + " mm");
    $("#areaCurva90GomadaRaioCurtoInox").val(area.toFixed(2).replace(".", ",") + " m²");
};

function calculeCurva45GomadaRaioCurtoInox() {
    let diametro = parseFloat($("#dnCurva45GomadaRaioCurtoInox").val());
    let espessura = parseFloat($("#espessuraCurva45GomadaRaioCurtoInox").val());
    let peso = parseFloat(((((diametro * pi) / 2) * (diametro * pi)) / 1000000) * pesoAçoInox * espessura);
    let pesoLiquido = parseFloat(peso / 2);
    let pesoBruto = parseFloat((peso / 2) * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoCurva45GomadaRaioCurtoInox").val(pesoLiquido.toFixed(2).replace(".", ",") + " kg");
    $("#pesoBrutoCurva45GomadaRaioCurtoInox").val(pesoBruto.toFixed(2).replace(".", ",") + " kg");

    let largura = parseFloat((diametro * pi) / 2);
    let comprimento = parseFloat(diametro * pi);
    let area = parseFloat((largura * comprimento) / 1000000);
    if (isNaN(largura)) largura = 0;
    if (isNaN(comprimento)) comprimento = 0;
    if (isNaN(area)) area = 0;
    $("#larguraCurva45GomadaRaioCurtoInox").val(largura.toFixed(2).replace(".", ",") + " mm");
    $("#comprimentoCurva45GomadaRaioCurtoInox").val(comprimento.toFixed(2).replace(".", ",") + " mm");
    $("#areaCurva45GomadaRaioCurtoInox").val(area.toFixed(2).replace(".", ",") + " m²");
};

function calculeCurva90GomadaRaioLongoInox() {
    let diametro = parseFloat($("#dnCurva90GomadaRaioLongoInox").val());
    let espessura = parseFloat($("#espessuraCurva90GomadaRaioLongoInox").val());
    let peso = parseFloat((((((diametro * 1.5) * pi) / 2) * (diametro * pi)) / 1000000) * pesoAçoInox * espessura);
    let pesoLiquido = parseFloat(peso);
    let pesoBruto = parseFloat((peso) * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoCurva90GomadaRaioLongoInox").val(pesoLiquido.toFixed(2).replace(".", ",") + " kg");
    $("#pesoBrutoCurva90GomadaRaioLongoInox").val(pesoBruto.toFixed(2).replace(".", ",") + " kg");

    let largura = parseFloat((diametro * pi) / 2);
    let comprimento = parseFloat(diametro * pi);
    let area = parseFloat((largura * comprimento) / 1000000);
    if (isNaN(largura)) largura = 0;
    if (isNaN(comprimento)) comprimento = 0;
    if (isNaN(area)) area = 0;
    $("#larguraCurva90GomadaRaioLongoInox").val(largura.toFixed(2).replace(".", ",") + " mm");
    $("#comprimentoCurva90GomadaRaioLongoInox").val(comprimento.toFixed(2).replace(".", ",") + " mm");
    $("#areaCurva90GomadaRaioLongoInox").val(area.toFixed(2).replace(".", ",") + " m²");
};