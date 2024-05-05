import 'package:calcad/modules/cones/modules/concentric/concentric.module.dart';
import 'package:calcad/modules/cones/modules/eccentric/eccentric.module.dart';
import 'package:flutter_modular/flutter_modular.dart';

class ConesModule extends Module {
  @override
  void binds(i) {}

  @override
  void routes(r) {
    r.module('/concentric', module: ConcentricModule());
    r.module('/eccentric', module: EccentricModule());
  }
}
