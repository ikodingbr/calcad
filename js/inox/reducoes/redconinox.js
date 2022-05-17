function calculeReducaoExcentricaInox() {
    let bocaMaior = parseFloat($("#bocaMaiorReducaoExcentricaInox").val());
    let bocaMenor = parseFloat($("#bocaMenorReducaoExcentricaInox").val());
    let espessura = parseFloat($("#espessuraReducaoExcentricaInox").val());
    let altura = parseFloat($("#alturaReducaoExcentricaInox").val());
    let geratriz = parseFloat((((bocaMaior - bocaMenor) / 2) ** 2 + (altura ** 2)) ** 0.5);
    let area = parseFloat((geratriz * 3.14) * ((bocaMaior / 2) + (bocaMenor / 2)));
    let pesoLiquido = parseFloat((area * pesoAçoInox * espessura) / 1000000);
    let pesoBruto = parseFloat(0);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoReducaoExcentricaInox").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoReducaoExcentricaInox").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};

function calculeReducaoConcentricaInox() {
    let bocaMaior = parseFloat($("#bocaMaiorReducaoConcentricaInox").val());
    let bocaMenor = parseFloat($("#bocaMenorReducaoConcentricaInox").val());
    let espessura = parseFloat($("#espessuraReducaoConcentricaInox").val());
    let altura = parseFloat($("#alturaReducaoConcentricaInox").val());
    let geratriz = parseFloat((((bocaMaior - bocaMenor) / 2) ** 2 + (altura ** 2)) ** 0.5);
    let area = parseFloat((geratriz * 3.14) * ((bocaMaior / 2) + (bocaMenor / 2)));
    let pesoLiquido = parseFloat((area * pesoAçoInox * espessura) / 1000000);
    let pesoBruto = parseFloat(0);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoReducaoConcentricaInox").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoReducaoConcentricaInox").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};