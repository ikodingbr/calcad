import 'package:calcad/modules/cones/modules/concentric/ui/widgets/concentric_cone.canva.widget.dart';
import 'package:flutter/material.dart';
import 'package:calcad/modules/core/enums/steel.enum.dart';
import 'package:calcad/modules/cones/modules/concentric/domain/stores/concentric_cone.store.dart';
import 'package:calcad/modules/cones/modules/concentric/ui/widgets/concentric_cone.radio.widget.dart';
import 'package:calcad/modules/cones/modules/concentric/ui/widgets/concentric_cone.textformfield.widget.dart';

class ConcentricConeFormDesktop extends StatefulWidget {
  final ConcentricConeStore store;

  const ConcentricConeFormDesktop({super.key, required this.store});

  @override
  State<ConcentricConeFormDesktop> createState() => _ConcentricConeFormStateDesktop();
}

class _ConcentricConeFormStateDesktop extends State<ConcentricConeFormDesktop> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    const double leftPanelWidth = 350;

    return Form(
      key: _formKey,
      child: Flex(
        direction: Axis.horizontal,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: leftPanelWidth,
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    ConcentricConeRadioWidget(
                      title: 'Aço carbono',
                      value: SteelEnum.carbon,
                      store: widget.store,
                      width: (leftPanelWidth / 2) - 20,
                    ),
                    ConcentricConeRadioWidget(
                      title: 'Aço inox',
                      value: SteelEnum.inox,
                      store: widget.store,
                      width: (leftPanelWidth / 2) - 20,
                    )
                  ],
                ),
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
                widget.store.model.dataToTextList(),
              ],
            ),
          ),
          ConcentricConeCanvaWidget(
            store: widget.store,
            width: MediaQuery.of(context).size.width - leftPanelWidth - 20,
            height: MediaQuery.of(context).size.height - kToolbarHeight - 20,
          )
        ],
      ),
    );
  }
}
