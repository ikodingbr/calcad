import 'dart:math';

import 'package:flutter/material.dart';

class ConcentricConeModel {
  double _d1 = 0;
  double _d2 = 0;
  double _h = 0;
  double _thickness = 0;
  double _steelDensity = 0;
  double d1MinusThickness = 0;
  double d2MinusThickness = 0;
  double hypotenuse = 0;
  double greaterGeneratrix = 0;
  double minorGeneratrix = 0;
  double alpha = 0;
  double greaterChord = 0;
  double minorChord = 0;
  double sheetWidth = 0;
  double sheetHeight = 0;
  double sheetWeight = 0;
  double sheetArea = 0;
  double d1Area = 0;
  double d2Area = 0;
  double weightPerSquareMeter = 0;
  double productWeight = 0;

  void setD1(double d1) => _d1 = d1;
  void setD2(double d2) => _d2 = d2;
  void setH(double h) => _h = h;
  void setThickness(double thickness) => _thickness = thickness;
  void setSteelDensity(double steelDensity) => _steelDensity = steelDensity;
  void calculate() {
    d1MinusThickness = _calculateD1MinusThickness();
    d2MinusThickness = _calculateD2MinusThickness();
    hypotenuse = _calculateHypotenuse();
    greaterGeneratrix = _calculateGreaterGeneratrix();
    minorGeneratrix = _calculateMinorGeneratrix();
    alpha = _calculateAlpha();
    greaterChord = _calculateGreaterChord();
    minorChord = _calculateMinorChord();
    sheetWidth = _calculateSheetWidth();
    sheetHeight = _calculateSheetHeight();
    sheetWeight = _calculateSheetWeight();
    sheetArea = _calculateSheetArea();
    d1Area = _calculateD1Area();
    d2Area = _calculateD2Area();
    weightPerSquareMeter = _calculateWeightPerSquareMeter();
    productWeight = _calculateProductWeight();
  }

  double _calculateD1MinusThickness() => _d1 - _thickness;
  double _calculateD2MinusThickness() => _d2 - _thickness;
  double _calculateHypotenuse() => (d1MinusThickness - d2MinusThickness) / 2;
  double _calculateGreaterGeneratrix() => ((d1MinusThickness / 2) * sqrt(pow(_h, 2) + pow(hypotenuse, 2))) / hypotenuse;
  double _calculateMinorGeneratrix() => greaterGeneratrix - sqrt(pow(_h, 2) + pow(hypotenuse, 2));
  double _calculateAlpha() => ((180 * (d1MinusThickness / 2)) / greaterGeneratrix) * 2;
  double _alphaToRadians(alpha) => (alpha * pi) / 180;
  double _calculateGreaterChord() => 2 * greaterGeneratrix * sin(_alphaToRadians(alpha) / 2);
  double _calculateMinorChord() => 2 * minorGeneratrix * sin(_alphaToRadians(alpha) / 2);
  double _calculateSheetWidth() => greaterChord;
  double _calculateSheetHeight() => greaterGeneratrix - sqrt(pow(minorGeneratrix, 2) - pow(minorChord / 2, 2));
  double _calculateSheetWeight() => (sheetWidth * sheetHeight * _steelDensity * _thickness) / 100000;
  double _calculateSheetArea() => (sheetWidth * sheetHeight) / 1000000;
  double _calculateD1Area() => (d1MinusThickness * pi) / 2;
  double _calculateD2Area() => (d2MinusThickness * pi) / 2;
  double _calculateWeightPerSquareMeter() => _steelDensity * _thickness;
  double _calculateProductWeight() => ((d1Area + d2Area) * (greaterGeneratrix - minorGeneratrix) * weightPerSquareMeter) / 100000;

  Column dataToTextList() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.end,
      children: [
        Text("d1MinusThickness: ${d1MinusThickness.toStringAsFixed(2)}"),
        Text("d2MinusThickness: ${d2MinusThickness.toStringAsFixed(2)}"),
        Text("hypotenuse: ${hypotenuse.toStringAsFixed(2)}"),
        Text("greaterGeneratrix: ${greaterGeneratrix.toStringAsFixed(2)}"),
        Text("minorGeneratrix: ${minorGeneratrix.toStringAsFixed(2)}"),
        Text("alpha: ${alpha.toStringAsFixed(2)}"),
        Text("greaterChord: ${greaterChord.toStringAsFixed(2)}"),
        Text("minorChord: ${minorChord.toStringAsFixed(2)}"),
        Text("sheetWidth: ${sheetWidth.toStringAsFixed(2)}"),
        Text("sheetHeight: ${sheetHeight.toStringAsFixed(2)}"),
        Text("sheetWeight: ${sheetWeight.toStringAsFixed(2)}"),
        Text("sheetArea: ${sheetArea.toStringAsFixed(2)}"),
        Text("d1Area: ${d1Area.toStringAsFixed(2)}"),
        Text("d2Area: ${d2Area.toStringAsFixed(2)}"),
        Text("weightPerSquareMeter: ${weightPerSquareMeter.toStringAsFixed(2)}"),
        Text("productWeight: ${productWeight.toStringAsFixed(2)}"),
      ],
    );
  }

  toCoordinates() {}
}
