import 'package:flutter/material.dart';
import 'package:calcad/modules/core/enums/steel.enum.dart';
import 'package:calcad/modules/core/ui/widgets/radio_button.widget.dart';
import 'package:calcad/modules/cones/modules/concentric/domain/stores/concentric_cone.store.dart';

class ConcentricConeRadioWidget extends StatelessWidget {
  final String title;
  final SteelEnum value;
  final ConcentricConeStore store;

  const ConcentricConeRadioWidget({
    super.key,
    required this.title,
    required this.value,
    required this.store,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(5),
      child: SizedBox(
        width: (MediaQuery.of(context).size.width / 2) - 20,
        child: RadioButton<SteelEnum>(
          title: title,
          value: value,
          groupValue: store.steel,
          onChanged: (steel) => store.setSteel(steel!),
          onTap: () => store.setSteel(value),
        ),
      ),
    );
  }
}
