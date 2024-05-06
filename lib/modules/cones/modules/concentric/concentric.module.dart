import 'package:flutter_modular/flutter_modular.dart';
import 'package:calcad/modules/cones/modules/concentric/ui/concentric_cone.page.dart';
import 'package:calcad/modules/cones/modules/concentric/domain/stores/concentric_cone.store.dart';
import 'package:calcad/modules/cones/modules/concentric/domain/models/concentric_cone.model.dart';

class ConcentricModule extends Module {
  @override
  void binds(i) {
    i.addSingleton<ConcentricConeStore>(ConcentricConeStore.new);
    i.addSingleton<ConcentricConeModel>(ConcentricConeModel.new);
  }

  @override
  void routes(r) {
    r.child('/', child: (context) => ConcentricConePage());
  }
}
