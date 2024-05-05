function calcularM(d1, d2) {
  return (d1 - d2) / 2;
}

function calcularGeratrizMaior(d1, h, m) {
  return ((d1 / 2) * Math.sqrt(Math.pow(h, 2) + Math.pow(m, 2))) / m;
}

function calcularGeratrizMenor(G, h, m) {
  return G - Math.sqrt(Math.pow(h, 2) + Math.pow(m, 2));
}

function calcularAlpha(d1, G) {
  return ((180 * (d1 / 2)) / G) * 2;
}

function calcularX(g, alpha) {
  alpha = (alpha * Math.PI) / 180;
  return 2 * g * Math.sin(alpha / 2);
}

function calcularY(G, alpha) {
  alpha = (alpha * Math.PI) / 180;
  return 2 * G * Math.sin(alpha / 2);
}

function calcularPesoDaChapa(
  comprimentoDaChapa,
  alturaDaChapa,
  espessura,
  densidadeDoAco
) {
  return comprimentoDaChapa * alturaDaChapa * densidadeDoAco * espessura;
}

function calcularAreaDaBocaMaior(d1MenosEspessura) {
  return (d1MenosEspessura * Math.PI) / 2;
}

function calcularAreaDaBocaMenor(d2MenosEspessura) {
  return (d2MenosEspessura * Math.PI) / 2;
}

function calcularPesoDaPeca(
  areaDaBocaMaior,
  areaDaBocaMenor,
  deltaRaios,
  pesoPorMetroQuadrado
) {
  return (
    ((areaDaBocaMaior + areaDaBocaMenor) * deltaRaios * pesoPorMetroQuadrado) /
    100000
  );
}

const densidadeDoAco = 0.785;
const espessura = 9.52;
const d1 = 508;
const d2 = 508;
const altura = 508;
const d1MenosEspessura = d1 - espessura;
const d2MenosEspessura = d2 - espessura;

const m = calcularM(d1MenosEspessura, d2MenosEspessura);
const geratrizMaior = calcularGeratrizMaior(d1MenosEspessura, altura, m);
const geratrizMenor = calcularGeratrizMenor(geratrizMaior, altura, m);
const alpha = calcularAlpha(d1MenosEspessura, geratrizMaior);
const cordaMenor = calcularX(geratrizMenor, alpha);
const cordaMaior = calcularY(geratrizMaior, alpha);
const comprimentoDaChapa = cordaMaior;
const alturaDaChapa =
  geratrizMaior -
  Math.sqrt(Math.pow(geratrizMenor, 2) - Math.pow(cordaMenor / 2, 2));

const pesoDaChapa =
  calcularPesoDaChapa(
    comprimentoDaChapa,
    alturaDaChapa,
    espessura,
    densidadeDoAco
  ) / 100000;

const areaDaChapa = (comprimentoDaChapa * alturaDaChapa) / 1000000;
const areaDaBocaMaior = calcularAreaDaBocaMaior(d1MenosEspessura);
const areaDaBocaMenor = calcularAreaDaBocaMenor(d2MenosEspessura);
const deltaRaios = geratrizMaior - geratrizMenor;

const pesoPorMetroQuadrado = densidadeDoAco * espessura;
const pesoDaPeca = calcularPesoDaPeca(
  areaDaBocaMaior,
  areaDaBocaMenor,
  deltaRaios,
  pesoPorMetroQuadrado
);

console.log({
  A: d1,
  B: d2,
  H: altura,
  R: geratrizMaior,
  r: geratrizMenor,
  alpha: alpha,
  cordaMaior: cordaMaior,
  cordaMenor: cordaMenor,
  comprimentoDaChapa: comprimentoDaChapa,
  alturaDaChapa: alturaDaChapa,
  pesoDaChapa: pesoDaChapa,
  areaDaChapa: areaDaChapa,
  pesoDaPeca: pesoDaPeca,
  deltaRaios: deltaRaios,
  pesoPorMetroQuadrado: pesoPorMetroQuadrado,
  areaDaBocaMaior: areaDaBocaMaior,
  areaDaBocaMenor: areaDaBocaMenor,
});
