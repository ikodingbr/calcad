import 'package:flutter/material.dart';

class ConcentricConeAppBarWidget extends AppBar {
  final BuildContext context;

  ConcentricConeAppBarWidget({super.key, required this.context})
      : super(
          backgroundColor: Theme.of(context).primaryColorDark,
          iconTheme: IconThemeData(
            color: Theme.of(context).primaryColorLight,
          ),
        );
}
