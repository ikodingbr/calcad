var constante = parseFloat(8);
var pi = parseFloat(3.14);

function calculeCurva90RaioCurtoInox() {
  var diametro = parseFloat($("#dnCurva90RaioCurtoInox").val());
  var espessura = parseFloat($("#espessuraCurva90RaioCurtoInox").val());
  var peso = parseFloat(((((diametro * pi) / 2) * (diametro * pi)) / 1000000) * constante * espessura);
  var pesoLiquido = parseFloat(peso);
  var pesoBruto = parseFloat(peso * 1.05);
  if (isNaN(pesoLiquido)) pesoLiquido = 0;
  if (isNaN(pesoBruto)) pesoBruto = 0;
  $("#pesoLiquidoCurva90RaioCurtoInox").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
  $("#pesoBrutoCurva90RaioCurtoInox").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
}

function calculeCurva45RaioCurtoInox() {
  var diametro = parseFloat($("#dnCurva45RaioCurtoInox").val());
  var espessura = parseFloat($("#espessuraCurva45RaioCurtoInox").val());
  var peso = parseFloat(((((diametro * pi) / 2) * (diametro * pi)) / 1000000) * constante * espessura);
  var pesoLiquido = parseFloat(peso / 2);
  var pesoBruto = parseFloat((peso / 2) * 1.05);
  if (isNaN(pesoLiquido)) pesoLiquido = 0;
  if (isNaN(pesoBruto)) pesoBruto = 0;
  $("#pesoLiquidoCurva45RaioCurtoInox").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
  $("#pesoBrutoCurva45RaioCurtoInox").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
}

function calculeCurva90RaioLongoInox() {
  var diametro = parseFloat($("#dnCurva90RaioLongoInox").val());
  var espessura = parseFloat($("#espessuraCurva90RaioLongoInox").val());
  var peso = parseFloat((((((diametro * 1.5) * pi) / 2) * (diametro * pi)) / 1000000) * constante * espessura);
  var pesoLiquido = parseFloat(peso);
  var pesoBruto = parseFloat((peso) * 1.05);
  if (isNaN(pesoLiquido)) pesoLiquido = 0;
  if (isNaN(pesoBruto)) pesoBruto = 0;
  $("#pesoLiquidoCurva90RaioLongoInox").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
  $("#pesoBrutoCurva90RaioLongoInox").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
}