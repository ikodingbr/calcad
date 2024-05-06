import 'package:calcad/modules/cones/modules/concentric/ui/widgets/concentric_cone.form.desktop.dart';
import 'package:calcad/modules/core/enums/screen.enum.dart';
import 'package:calcad/modules/core/utils/screen.util.dart';
import 'package:flutter/material.dart';
import 'package:flutter_modular/flutter_modular.dart';
import 'package:calcad/modules/cones/modules/concentric/ui/widgets/concentric_cone.form.mobile.dart';
import 'package:calcad/modules/cones/modules/concentric/domain/stores/concentric_cone.store.dart';
import 'package:calcad/modules/cones/modules/concentric/ui/widgets/concentric_cone.appbar.widget.dart';

class ConcentricConePage extends StatelessWidget {
  final store = Modular.get<ConcentricConeStore>();

  ConcentricConePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).primaryColorLight,
      appBar: ConcentricConeAppBarWidget(context: context),
      body: SafeArea(
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(10),
            child: ListenableBuilder(
              listenable: store,
              builder: (context, _) {
                if (Screen(context).screen == ScreenEnum.desktop) {
                  return ConcentricConeFormDesktop(store: store);
                }

                return ConcentricConeFormMobile(store: store);
              },
            ),
          ),
        ),
      ),
    );
  }
}
