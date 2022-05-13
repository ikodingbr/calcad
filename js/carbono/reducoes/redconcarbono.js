function calculeReducaoExcentricaCarbono() {
    let bocaMaior = parseFloat($("#bocaMaiorReducaoExcentricaCarbono").val());
    let bocaMenor = parseFloat($("#bocaMenorReducaoExcentricaCarbono").val());
    let espessura = parseFloat($("#espessuraReducaoExcentricaCarbono").val());
    let altura = parseFloat($("#alturaReducaoExcentricaCarbono").val());
    let geratriz = parseFloat((((bocaMaior - bocaMenor) / 2) ** 2 + (altura ** 2)) ** 0.5);
    let area = parseFloat((geratriz * 3.14) * ((bocaMaior / 2) + (bocaMenor / 2)));
    let pesoLiquido = parseFloat((area * pesoAçoCarbono * espessura) / 1000000);
    let pesoBruto = parseFloat(0);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoReducaoExcentricaCarbono").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoReducaoExcentricaCarbono").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};

function calculeReducaoConcentricaCarbono() {
    let bocaMaior = parseFloat($("#bocaMaiorReducaoConcentricaCarbono").val());
    let bocaMenor = parseFloat($("#bocaMenorReducaoConcentricaCarbono").val());
    let espessura = parseFloat($("#espessuraReducaoConcentricaCarbono").val());
    let altura = parseFloat($("#alturaReducaoConcentricaCarbono").val());
    let geratriz = parseFloat((((bocaMaior - bocaMenor) / 2) ** 2 + (altura ** 2)) ** 0.5);
    let area = parseFloat((geratriz * 3.14) * ((bocaMaior / 2) + (bocaMenor / 2)));
    let pesoLiquido = parseFloat((area * pesoAçoCarbono * espessura) / 1000000);
    let pesoBruto = parseFloat(0);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoReducaoConcentricaCarbono").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoReducaoConcentricaCarbono").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};