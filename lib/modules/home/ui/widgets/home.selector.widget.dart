import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter_modular/flutter_modular.dart';

class HomeSelectorWidget extends StatelessWidget {
  final String svgPath;
  final String label;
  final String path;

  const HomeSelectorWidget({
    super.key,
    required this.svgPath,
    required this.label,
    required this.path,
  });

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Theme.of(context).primaryColorDark.withOpacity(0.5),
      textStyle: const TextStyle(color: Colors.white),
      borderRadius: BorderRadius.circular(10),
      child: InkWell(
        onTap: () => Modular.to.pushNamed(path),
        focusColor: Theme.of(context).primaryColor.withOpacity(0.5),
        splashColor: Theme.of(context).primaryColor.withOpacity(0.5),
        highlightColor: Theme.of(context).primaryColor.withOpacity(0.5),
        borderRadius: BorderRadius.circular(10),
        child: SizedBox(
          height: 200,
          width: 200,
          child: Flex(
            direction: Axis.vertical,
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SvgPicture.asset(svgPath),
              Text(
                label,
                style: const TextStyle(
                  fontSize: 17,
                  fontWeight: FontWeight.w500,
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
