import 'package:calcad/modules/cones/cones.module.dart';
import 'package:calcad/modules/home/ui/home.page.dart';
import 'package:flutter/material.dart';
import 'package:flutter_modular/flutter_modular.dart';

class AppModule extends Module {
  @override
  void binds(i) {}

  @override
  void routes(r) {
    r.child('/', child: (BuildContext context) => const HomePage());
    r.module('/cones', module: ConesModule());
  }
}
