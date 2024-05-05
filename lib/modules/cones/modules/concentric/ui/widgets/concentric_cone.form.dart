import 'package:calcad/modules/cones/modules/concentric/ui/widgets/concentric_cone.canva.widget.dart';
import 'package:flutter/material.dart';
import 'package:calcad/modules/core/enums/steel.enum.dart';
import 'package:calcad/modules/cones/modules/concentric/domain/stores/concentric_cone.store.dart';
import 'package:calcad/modules/cones/modules/concentric/ui/widgets/concentric_cone.radio.widget.dart';
import 'package:calcad/modules/cones/modules/concentric/ui/widgets/concentric_cone.textformfield.widget.dart';
import 'package:flutter/widgets.dart';

class ConcentricConeForm extends StatefulWidget {
  final ConcentricConeStore store;

  const ConcentricConeForm({super.key, required this.store});

  @override
  State<ConcentricConeForm> createState() => _ConcentricConeFormState();
}

class _ConcentricConeFormState extends State<ConcentricConeForm> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: [
          Row(
            children: [
              ConcentricConeRadioWidget(
                title: 'Aço carbono',
                value: SteelEnum.carbon,
                store: widget.store,
              ),
              ConcentricConeRadioWidget(
                title: 'Aço inox',
                value: SteelEnum.inox,
                store: widget.store,
              ),
            ],
          ),
          Row(
            children: [
              ConcentricConeTextFormFieldWidget(
                label: "D1",
                value: widget.store.d1.toString(),
                onChanged: widget.store.setD1,
              ),
              ConcentricConeTextFormFieldWidget(
                label: "D2",
                value: widget.store.d2.toString(),
                onChanged: widget.store.setD2,
              ),
              ConcentricConeTextFormFieldWidget(
                label: "Altura",
                value: widget.store.h.toString(),
                onChanged: widget.store.setH,
              ),
              ConcentricConeTextFormFieldWidget(
                label: "Espessura",
                value: widget.store.thickness.toString(),
                onChanged: widget.store.setThickness,
              ),
            ],
          ),
          Padding(
            padding: const EdgeInsets.only(top: 10, bottom: 10),
            child: Row(
              children: [
                Expanded(
                  child: ElevatedButton(
                    onPressed: () => widget.store.calculate(),
                    style: const ButtonStyle(
                      shape: MaterialStatePropertyAll(
                        RoundedRectangleBorder(
                          borderRadius: BorderRadius.all(Radius.circular(5)),
                        ),
                      ),
                    ),
                    child: const Text("Calcular"),
                  ),
                )
              ],
            ),
          ),
          ConcentricConeCanvaWidget(store: widget.store)
        ],
      ),
    );
  }
}
