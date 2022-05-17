function calculeCurva90GomadaRaioCurtoCarbono() {
    let diametro = parseFloat($("#dnCurva90GomadaRaioCurtoCarbono").val());
    let espessura = parseFloat($("#espessuraCurva90GomadaRaioCurtoCarbono").val());
    let peso = parseFloat(((((diametro * pi) / 2) * (diametro * pi)) / 1000000) * pesoAçoCarbono * espessura);
    let pesoLiquido = parseFloat(peso);
    let pesoBruto = parseFloat(peso * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoCurva90GomadaRaioCurtoCarbono").val(pesoLiquido.toFixed(2).replace(".", ",") + " kg");
    $("#pesoBrutoCurva90GomadaRaioCurtoCarbono").val(pesoBruto.toFixed(2).replace(".", ",") + " kg");

    let largura = parseFloat((diametro * pi) / 2);
    let comprimento = parseFloat(diametro * pi);
    let area = parseFloat((largura * comprimento) / 1000000);
    if (isNaN(largura)) largura = 0;
    if (isNaN(comprimento)) comprimento = 0;
    if (isNaN(area)) area = 0;
    $("#larguraCurva90GomadaRaioCurtoCarbono").val(largura.toFixed(2).replace(".", ",") + " mm");
    $("#comprimentoCurva90GomadaRaioCurtoCarbono").val(comprimento.toFixed(2).replace(".", ",") + " mm");
    $("#areaCurva90GomadaRaioCurtoCarbono").val(area.toFixed(2).replace(".", ",") + " m²");
};

function calculeCurva45GomadaRaioCurtoCarbono() {
    let diametro = parseFloat($("#dnCurva45GomadaRaioCurtoCarbono").val());
    let espessura = parseFloat($("#espessuraCurva45GomadaRaioCurtoCarbono").val());
    let peso = parseFloat(((((diametro * pi) / 2) * (diametro * pi)) / 1000000) * pesoAçoCarbono * espessura);
    let pesoLiquido = parseFloat(peso / 2);
    let pesoBruto = parseFloat((peso / 2) * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoCurva45GomadaRaioCurtoCarbono").val(pesoLiquido.toFixed(2).replace(".", ",") + " kg");
    $("#pesoBrutoCurva45GomadaRaioCurtoCarbono").val(pesoBruto.toFixed(2).replace(".", ",") + " kg");

    let largura = parseFloat((diametro * pi) / 2);
    let comprimento = parseFloat(diametro * pi);
    let area = parseFloat((largura * comprimento) / 1000000);
    if (isNaN(largura)) largura = 0;
    if (isNaN(comprimento)) comprimento = 0;
    if (isNaN(area)) area = 0;
    $("#larguraCurva45GomadaRaioCurtoCarbono").val(largura.toFixed(2).replace(".", ",") + " mm");
    $("#comprimentoCurva45GomadaRaioCurtoCarbono").val(comprimento.toFixed(2).replace(".", ",") + " mm");
    $("#areaCurva45GomadaRaioCurtoCarbono").val(area.toFixed(2).replace(".", ",") + " m²");
};

function calculeCurva90GomadaRaioLongoCarbono() {
    let diametro = parseFloat($("#dnCurva90GomadaRaioLongoCarbono").val());
    let espessura = parseFloat($("#espessuraCurva90GomadaRaioLongoCarbono").val());
    let peso = parseFloat((((((diametro * 1.5) * pi) / 2) * (diametro * pi)) / 1000000) * pesoAçoCarbono * espessura);
    let pesoLiquido = parseFloat(peso);
    let pesoBruto = parseFloat((peso) * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoCurva90GomadaRaioLongoCarbono").val(pesoLiquido.toFixed(2).replace(".", ",") + " kg");
    $("#pesoBrutoCurva90GomadaRaioLongoCarbono").val(pesoBruto.toFixed(2).replace(".", ",") + " kg");

    let largura = parseFloat((diametro * pi) / 2);
    let comprimento = parseFloat(diametro * pi);
    let area = parseFloat((largura * comprimento) / 1000000);
    if (isNaN(largura)) largura = 0;
    if (isNaN(comprimento)) comprimento = 0;
    if (isNaN(area)) area = 0;
    $("#larguraCurva90GomadaRaioLongoCarbono").val(largura.toFixed(2).replace(".", ",") + " mm");
    $("#comprimentoCurva90GomadaRaioLongoCarbono").val(comprimento.toFixed(2).replace(".", ",") + " mm");
    $("#areaCurva90GomadaRaioLongoCarbono").val(area.toFixed(2).replace(".", ",") + " m²");
};