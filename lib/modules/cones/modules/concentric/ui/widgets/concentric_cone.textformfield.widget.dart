import 'dart:developer';

import 'package:flutter/material.dart';

class ConcentricConeTextFormFieldWidget extends StatelessWidget {
  final String label;
  final String value;
  final void Function(String?) onChanged;

  const ConcentricConeTextFormFieldWidget({
    super.key,
    required this.label,
    required this.value,
    required this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Padding(
        padding: const EdgeInsets.all(5),
        child: TextFormField(
          style: const TextStyle(fontSize: 14.5),
          decoration: InputDecoration(
            isDense: true,
            contentPadding: const EdgeInsets.all(13),
            labelText: label,
            border: const OutlineInputBorder(),
          ),
          keyboardType: const TextInputType.numberWithOptions(decimal: true, signed: false),
          onChanged: (value) => onChanged(value),
          initialValue: value == '0.0' ? '' : value,
        ),
      ),
    );
  }
}
