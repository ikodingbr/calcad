import 'package:calcad/modules/cones/modules/concentric/ui/widgets/concentric_cone.canva.widget.dart';
import 'package:flutter/material.dart';
import 'package:calcad/modules/core/enums/steel.enum.dart';
import 'package:calcad/modules/cones/modules/concentric/domain/stores/concentric_cone.store.dart';
import 'package:calcad/modules/cones/modules/concentric/ui/widgets/concentric_cone.radio.widget.dart';
import 'package:calcad/modules/cones/modules/concentric/ui/widgets/concentric_cone.textformfield.widget.dart';

class ConcentricConeFormMobile extends StatefulWidget {
  final ConcentricConeStore store;

  const ConcentricConeFormMobile({super.key, required this.store});

  @override
  State<ConcentricConeFormMobile> createState() => _ConcentricConeFormStateMobile();
}

class _ConcentricConeFormStateMobile extends State<ConcentricConeFormMobile> {
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
                width: (MediaQuery.of(context).size.width / 2) - 20,
              ),
              ConcentricConeRadioWidget(
                title: 'Aço inox',
                value: SteelEnum.inox,
                store: widget.store,
                width: (MediaQuery.of(context).size.width / 2) - 20,
              ),
            ],
          ),
          Row(
            children: [
              Expanded(
                child: ConcentricConeTextFormFieldWidget(
                  label: "D1",
                  value: widget.store.d1.toString(),
                  onChanged: widget.store.setD1,
                ),
              ),
              Expanded(
                child: ConcentricConeTextFormFieldWidget(
                  label: "D2",
                  value: widget.store.d2.toString(),
                  onChanged: widget.store.setD2,
                ),
              ),
              Expanded(
                child: ConcentricConeTextFormFieldWidget(
                  label: "Altura",
                  value: widget.store.h.toString(),
                  onChanged: widget.store.setH,
                ),
              ),
              Expanded(
                child: ConcentricConeTextFormFieldWidget(
                  label: "Espessura",
                  value: widget.store.thickness.toString(),
                  onChanged: widget.store.setThickness,
                ),
              ),
            ],
          ),
          widget.store.model.dataToTextList(),
          ConcentricConeCanvaWidget(
            store: widget.store,
            width: MediaQuery.of(context).size.width,
            height: 300,
          )
        ],
      ),
    );
  }
}
