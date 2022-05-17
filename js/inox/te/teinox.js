function calculeTeReducaoInox() {
    let diametro = parseFloat($("#dnTeReducaoInox").val());
    let espessura = parseFloat($("#espessuraTeReducaoInox").val());
    let peso = parseFloat(((((diametro * pi) / 2) * (diametro * pi)) / 1000000) * pesoAçoInox * espessura);
    let pesoLiquido = parseFloat(peso);
    let pesoBruto = parseFloat(peso * 1.05);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoTeReducaoInox").val(pesoLiquido.toFixed(2).replace(".", ",") + " kg");
    $("#pesoBrutoTeReducaoInox").val(pesoBruto.toFixed(2).replace(".", ",") + " kg");

    let largura = parseFloat((diametro * pi) / 2);
    let comprimento = parseFloat(diametro * pi);
    let area = parseFloat((largura * comprimento) / 1000000);
    if (isNaN(largura)) largura = 0;
    if (isNaN(comprimento)) comprimento = 0;
    if (isNaN(area)) area = 0;
    $("#larguraTeReducaoInox").val(largura.toFixed(2).replace(".", ",") + " mm");
    $("#dimComprimentoTeReducaoInox").val(comprimento.toFixed(2).replace(".", ",") + " mm");
    $("#areaTeReducaoInox").val(area.toFixed(2).replace(".", ",") + " m²");
};