var constante = parseFloat(7.83);
var pi = parseFloat(3.14);

function calculeCurva90RaioCurtoAc() {
  var diametro = parseFloat($("#dnCurva90RaioCurtoAc").val());
  var espessura = parseFloat($("#espessuraCurva90RaioCurtoAc").val());
  var peso = parseFloat(((((diametro * pi) / 2) * (diametro * pi)) / 1000000) * constante * espessura);
  var pesoLiquido = parseFloat(peso);
  var pesoBruto = parseFloat(peso * 1.05);
  if (isNaN(pesoLiquido)) pesoLiquido = 0;
  if (isNaN(pesoBruto)) pesoBruto = 0;
  $("#pesoLiquidoCurva90RaioCurtoAc").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
  $("#pesoBrutoCurva90RaioCurtoAc").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
}

function calculeCurva45RaioCurtoAc() {
  var diametro = parseFloat($("#dnCurva45RaioCurtoAc").val());
  var espessura = parseFloat($("#espessuraCurva45RaioCurtoAc").val());
  var peso = parseFloat(((((diametro * pi) / 2) * (diametro * pi)) / 1000000) * constante * espessura);
  var pesoLiquido = parseFloat(peso / 2);
  var pesoBruto = parseFloat((peso / 2) * 1.05);
  if (isNaN(pesoLiquido)) pesoLiquido = 0;
  if (isNaN(pesoBruto)) pesoBruto = 0;
  $("#pesoLiquidoCurva45RaioCurtoAc").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
  $("#pesoBrutoCurva45RaioCurtoAc").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
}

function calculeCurva90RaioLongoAc() {
  var diametro = parseFloat($("#dnCurva90RaioLongoAc").val());
  var espessura = parseFloat($("#espessuraCurva90RaioLongoAc").val());
  var peso = parseFloat((((((diametro * 1.5) * pi) / 2) * (diametro * pi)) / 1000000) * constante * espessura);
  var pesoLiquido = parseFloat(peso);
  var pesoBruto = parseFloat((peso) * 1.05);
  if (isNaN(pesoLiquido)) pesoLiquido = 0;
  if (isNaN(pesoBruto)) pesoBruto = 0;
  $("#pesoLiquidoCurva90RaioLongoAc").val(pesoLiquido.toFixed(2).replace(".", ",") + " KG");
  $("#pesoBrutoCurva90RaioLongoAc").val(pesoBruto.toFixed(2).replace(".", ",") + " KG");
}