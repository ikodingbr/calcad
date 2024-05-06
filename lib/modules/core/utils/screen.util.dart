import 'package:calcad/modules/core/enums/screen.enum.dart';
import 'package:flutter/material.dart';

class Screen {
  ScreenEnum screen = ScreenEnum.desktop;

  Screen(BuildContext context) {
    final double width = MediaQuery.of(context).size.width;

    if (width < 414) {
      screen = ScreenEnum.mobile;
    } else if (width < 736) {
      screen = ScreenEnum.tablet;
    } else if (width < 1024) {
      screen = ScreenEnum.desktop;
    }
  }
}
