var pesoAço = parseFloat(7.850);

function calculeReducaoExcentrica() {
    var bocaMaior = parseFloat($("#bocaMaiorReducaoExcentrica").val());
    var bocaMenor = parseFloat($("#bocaMenorReducaoExcentrica").val());
    var espessura = parseFloat($("#espessuraReducaoExcentrica").val());
    var altura = parseFloat($("#alturaReducaoExcentrica").val());
    var geratriz = parseFloat((((bocaMaior - bocaMenor) / 2) ** 2 + (altura ** 2)) ** 0.5);
    var area = parseFloat((geratriz * 3.14) * ((bocaMaior / 2) + (bocaMenor / 2)));
    var pesoLiquido = parseFloat((area * pesoAço * espessura) / 1000000);
    var pesoBruto = parseFloat(0);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoReducaoExcentrica").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoReducaoExcentrica").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
}

function calculeReducaoConcentrica() {
    var bocaMaior = parseFloat($("#bocaMaiorReducaoConcentrica").val());
    var bocaMenor = parseFloat($("#bocaMenorReducaoConcentrica").val());
    var espessura = parseFloat($("#espessuraReducaoConcentrica").val());
    var altura = parseFloat($("#alturaReducaoConcentrica").val());
    var geratriz = parseFloat((((bocaMaior - bocaMenor) / 2) ** 2 + (altura ** 2)) ** 0.5);
    var area = parseFloat((geratriz * 3.14) * ((bocaMaior / 2) + (bocaMenor / 2)));
    var pesoLiquido = parseFloat((area * pesoAço * espessura) / 1000000);
    var pesoBruto = parseFloat(0);
    if (isNaN(pesoLiquido)) pesoLiquido = 0;
    if (isNaN(pesoBruto)) pesoBruto = 0;
    $("#pesoLiquidoReducaoConcentrica").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
    $("#pesoBrutoReducaoConcentrica").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
}