import 'package:flutter/material.dart';

class HomeAppBarWidget extends AppBar {
  final BuildContext context;

  HomeAppBarWidget({super.key, required this.context})
      : super(
          backgroundColor: Theme.of(context).primaryColorDark,
          iconTheme: IconThemeData(
            color: Theme.of(context).primaryColorLight,
          ),
          title: const Text(
            "CalCAD",
            style: TextStyle(color: Colors.white),
          ),
          centerTitle: true,
        );
}
