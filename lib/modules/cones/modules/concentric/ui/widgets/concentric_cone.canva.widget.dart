import 'package:calcad/modules/cones/modules/concentric/domain/stores/concentric_cone.store.dart';
import 'package:flutter/material.dart';

class ConcentricConeCanvaWidget extends StatelessWidget {
  final ConcentricConeStore store;

  const ConcentricConeCanvaWidget({
    super.key,
    required this.store,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      height: 300,
      color: Colors.black.withOpacity(0.1),
      child: CustomPaint(
        painter: Painter(),
      ),
    );
  }
}

class Painter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = Colors.white
      ..style = PaintingStyle.fill;

    canvas.drawLine(
      const Offset(0, 0),
      const Offset(20, 0),
      paint,
    );

    canvas.drawLine(
      const Offset(0, 40),
      const Offset(20, 20),
      paint,
    );
  }

  @override
  bool shouldRepaint(Painter oldDelegate) => false;
}
