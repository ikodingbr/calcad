function calculeReducaoExcentricaCarbono() {
    var bocaMaior = parseFloat($("#bocaMaiorReducaoExcentricaCarbono").val());
    var bocaMenor = parseFloat($("#bocaMenorReducaoExcentricaCarbono").val());
    var espessura = parseFloat($("#espessuraReducaoExcentricaCarbono").val());
    var altura = parseFloat($("#alturaReducaoExcentricaCarbono").val());
    var geratriz = parseFloat((((bocaMaior - bocaMenor) / 2) ** 2 + (altura ** 2)) ** 0.5);
    var area = parseFloat((geratriz * 3.14) * ((bocaMaior / 2) + (bocaMenor / 2)));
    var pesoLiquido = parseFloat((area * pesoAçoCarbono * espessura) / 1000000);
    var pesoBruto = parseFloat(0);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoReducaoExcentricaCarbono").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoReducaoExcentricaCarbono").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};

function calculeReducaoConcentricaCarbono() {
    var bocaMaior = parseFloat($("#bocaMaiorReducaoConcentricaCarbono").val());
    var bocaMenor = parseFloat($("#bocaMenorReducaoConcentricaCarbono").val());
    var espessura = parseFloat($("#espessuraReducaoConcentricaCarbono").val());
    var altura = parseFloat($("#alturaReducaoConcentricaCarbono").val());
    var geratriz = parseFloat((((bocaMaior - bocaMenor) / 2) ** 2 + (altura ** 2)) ** 0.5);
    var area = parseFloat((geratriz * 3.14) * ((bocaMaior / 2) + (bocaMenor / 2)));
    var pesoLiquido = parseFloat((area * pesoAçoCarbono * espessura) / 1000000);
    var pesoBruto = parseFloat(0);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoReducaoConcentricaCarbono").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoReducaoConcentricaCarbono").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};