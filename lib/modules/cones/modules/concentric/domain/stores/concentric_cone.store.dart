import 'package:flutter/material.dart';
import 'package:flutter_modular/flutter_modular.dart';
import 'package:calcad/modules/core/enums/steel.enum.dart';
import 'package:calcad/modules/cones/modules/concentric/domain/models/concentric_cone.model.dart';

class ConcentricConeStore extends ChangeNotifier {
  final model = Modular.get<ConcentricConeModel>();

  double d1 = 1524;
  double d2 = 1220;
  double h = 711;
  double thickness = 9.52;
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
    calculate();
    notifyListeners();
  }

  void setD1(String? d1) {
    this.d1 = d1 == null || d1 == '' ? 0 : double.parse(d1);
    calculate();
    notifyListeners();
  }

  void setD2(String? d2) {
    this.d2 = d2 == null || d2 == '' ? 0 : double.parse(d2);
    calculate();
    notifyListeners();
  }

  void setH(String? h) {
    this.h = h == null || h == '' ? 0 : double.parse(h);
    calculate();
    notifyListeners();
  }

  void setThickness(String? thickness) {
    this.thickness = thickness == null || thickness == '' ? 0 : double.parse(thickness);
    calculate();
    notifyListeners();
  }

  void calculate() {
    if (d1 != 0 && d2 != 0 && h != 0 && thickness != 0) {
      steelDensity = steel == SteelEnum.carbon ? 0.785 : 0.792;

      model.setD1(d1);
      model.setD2(d2);
      model.setH(h);
      model.setThickness(thickness);
      model.setSteelDensity(steelDensity);
      model.calculate();

      d1MinusThickness = model.d1MinusThickness;
      d2MinusThickness = model.d2MinusThickness;
      hypotenuse = model.hypotenuse;
      greaterGeneratrix = model.greaterGeneratrix;
      minorGeneratrix = model.minorGeneratrix;
      alpha = model.alpha;
      greaterChord = model.greaterChord;
      minorChord = model.minorChord;
      sheetWidth = model.sheetWidth;
      sheetHeight = model.sheetHeight;
      sheetWeight = model.sheetWeight;
      sheetArea = model.sheetArea;
      d1Area = model.d1Area;
      d2Area = model.d2Area;
      weightPerSquareMeter = model.weightPerSquareMeter;
      productWeight = model.productWeight;
    }

    notifyListeners();
  }
}
