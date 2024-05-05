import 'dart:math';

import 'package:flutter/material.dart';
import 'package:calcad/modules/core/enums/steel.enum.dart';

class ConcentricConeStore extends ChangeNotifier {
  double d1 = 0;
  double d2 = 0;
  double h = 0;
  double thickness = 0;
  double steelDensity = 0.785;
  SteelEnum steel = SteelEnum.carbon;
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

  void setSteel(SteelEnum steel) {
    this.steel = steel;
    notifyListeners();
  }

  void setD1(String? d1) {
    this.d1 = d1 == null || d1 == '' ? 0 : double.parse(d1);
    notifyListeners();
  }

  void setD2(String? d2) {
    this.d2 = d2 == null || d2 == '' ? 0 : double.parse(d2);
    notifyListeners();
  }

  void setH(String? h) {
    this.h = h == null || h == '' ? 0 : double.parse(h);
    notifyListeners();
  }

  void setThickness(String? thickness) {
    this.thickness = thickness == null || thickness == '' ? 0 : double.parse(thickness);
    notifyListeners();
  }

  void calculate() {
    if (d1 != 0 && d2 != 0 && h != 0 && thickness != 0) {
      steelDensity = steel == SteelEnum.carbon ? 0.785 : 0.79;
      d1MinusThickness = calculateD1MinusThickness();
      d2MinusThickness = calculateD2MinusThickness();
      hypotenuse = calculateHypotenuse();
      greaterGeneratrix = calculateGreaterGeneratrix();
      minorGeneratrix = calculateMinorGeneratrix();
      alpha = calculateAlpha();
      greaterChord = calculateGreaterChord();
      minorChord = calculateMinorChord();
      sheetWidth = calculateSheetWidth();
      sheetHeight = calculateSheetHeight();
      sheetWeight = calculateSheetWeight();
      sheetArea = calculateSheetArea();
      d1Area = calculateD1Area();
      d2Area = calculateD2Area();
      weightPerSquareMeter = calculateWeightPerSquareMeter();
      productWeight = calculateProductWeight();
    }

    notifyListeners();
  }

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
      ],
    );
  }

  double calculateD1MinusThickness() => d1 - thickness;
  double calculateD2MinusThickness() => d2 - thickness;
  double calculateHypotenuse() => (d1MinusThickness - d2MinusThickness) / 2;
  double calculateGreaterGeneratrix() => ((d1MinusThickness / 2) * sqrt(pow(h, 2) + pow(hypotenuse, 2))) / hypotenuse;
  double calculateMinorGeneratrix() => greaterGeneratrix - sqrt(pow(h, 2) + pow(hypotenuse, 2));
  double calculateAlpha() => ((180 * (d1MinusThickness / 2)) / greaterGeneratrix) * 2;
  double alphaToRadians(alpha) => (alpha * pi) / 180;
  double calculateGreaterChord() => 2 * greaterGeneratrix * sin(alphaToRadians(alpha) / 2);
  double calculateMinorChord() => 2 * minorGeneratrix * sin(alphaToRadians(alpha) / 2);
  double calculateSheetWidth() => greaterChord;
  double calculateSheetHeight() => greaterGeneratrix - sqrt(pow(minorGeneratrix, 2) - pow(minorChord / 2, 2));
  double calculateSheetWeight() => (sheetWidth * sheetHeight * steelDensity * thickness) / 100000;
  double calculateSheetArea() => (sheetWidth * sheetHeight) / 1000000;
  double calculateD1Area() => (d1MinusThickness * pi) / 2;
  double calculateD2Area() => (d2MinusThickness * pi) / 2;
  double calculateWeightPerSquareMeter() => steelDensity * thickness;
  double calculateProductWeight() => ((d1Area + d2Area) * (greaterGeneratrix - minorGeneratrix) * weightPerSquareMeter) / 100000;
}
