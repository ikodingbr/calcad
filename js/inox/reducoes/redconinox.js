function calculeReducaoExcentricaInox() {
    var bocaMaior = parseFloat($("#bocaMaiorReducaoExcentricaInox").val());
    var bocaMenor = parseFloat($("#bocaMenorReducaoExcentricaInox").val());
    var espessura = parseFloat($("#espessuraReducaoExcentricaInox").val());
    var altura = parseFloat($("#alturaReducaoExcentricaInox").val());
    var geratriz = parseFloat((((bocaMaior - bocaMenor) / 2) ** 2 + (altura ** 2)) ** 0.5);
    var area = parseFloat((geratriz * 3.14) * ((bocaMaior / 2) + (bocaMenor / 2)));
    var pesoLiquido = parseFloat((area * pesoAçoInox * espessura) / 1000000);
    var pesoBruto = parseFloat(0);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoReducaoExcentricaInox").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoReducaoExcentricaInox").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};

function calculeReducaoConcentricaInox() {
    var bocaMaior = parseFloat($("#bocaMaiorReducaoConcentricaInox").val());
    var bocaMenor = parseFloat($("#bocaMenorReducaoConcentricaInox").val());
    var espessura = parseFloat($("#espessuraReducaoConcentricaInox").val());
    var altura = parseFloat($("#alturaReducaoConcentricaInox").val());
    var geratriz = parseFloat((((bocaMaior - bocaMenor) / 2) ** 2 + (altura ** 2)) ** 0.5);
    var area = parseFloat((geratriz * 3.14) * ((bocaMaior / 2) + (bocaMenor / 2)));
    var pesoLiquido = parseFloat((area * pesoAçoInox * espessura) / 1000000);
    var pesoBruto = parseFloat(0);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoReducaoConcentricaInox").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoReducaoConcentricaInox").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
};