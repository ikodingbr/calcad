import 'package:flutter/material.dart';

class RadioButton<T> extends StatelessWidget {
  final String title;
  final void Function()? onTap;
  final T value;
  final T groupValue;
  final void Function(T?)? onChanged;

  const RadioButton({
    super.key,
    required this.title,
    this.onTap,
    required this.value,
    required this.groupValue,
    this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      textStyle: const TextStyle(fontSize: 16, color: Colors.black),
      borderRadius: BorderRadius.circular(10),
      child: InkWell(
        onTap: onTap,
        focusColor: Theme.of(context).primaryColor.withOpacity(0.5),
        splashColor: Theme.of(context).primaryColor.withOpacity(0.5),
        highlightColor: Theme.of(context).primaryColor.withOpacity(0.5),
        hoverColor: Theme.of(context).primaryColor.withOpacity(0.5),
        borderRadius: BorderRadius.circular(10),
        child: Padding(
          padding: const EdgeInsets.all(8),
          child: Flex(
            direction: Axis.horizontal,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Radio<T>(
                value: value,
                groupValue: groupValue,
                onChanged: onChanged,
              ),
              Padding(
                padding: const EdgeInsets.only(left: 8),
                child: Text(title),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
