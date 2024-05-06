import 'dart:math';
import 'dart:developer' as dev;
import 'package:calcad/modules/cones/modules/concentric/domain/models/concentric_cone.model.dart';
import 'package:calcad/modules/cones/modules/concentric/domain/stores/concentric_cone.store.dart';
import 'package:flutter/material.dart';

class ConcentricConeCanvaWidget extends StatelessWidget {
  final double width;
  final double height;
  final ConcentricConeStore store;

  const ConcentricConeCanvaWidget({
    super.key,
    required this.store,
    required this.width,
    required this.height,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      height: height,
      color: Colors.black.withOpacity(0.1),
      child: CustomPaint(
        painter: Painter(context: context, model: store.model),
      ),
    );
  }
}

class Painter extends CustomPainter {
  final ConcentricConeModel model;
  final BuildContext context;

  Painter({
    required this.context,
    required this.model,
  });

  @override
  void paint(Canvas canvas, Size size) {
    double canvasWidth = size.width;
    double canvasHeight = size.height;
    double sheetWidth = model.sheetWidth;
    double sheetHeight = model.sheetHeight;

    // Calculate the scaling factor
    double scaleX = canvasWidth / sheetWidth;
    double scaleY = canvasHeight / sheetHeight;
    double scale = scaleX < scaleY ? scaleX : scaleY;

    // Apply the scaling factor uniformly to both width and height
    double scaledSheetWidth = sheetWidth * scale;
    double scaledSheetHeight = sheetHeight * scale;

    final paint = Paint()
      ..color = const Color.fromARGB(255, 0, 0, 255)
      ..style = PaintingStyle.stroke;

    dev.log({
      'scale': scale.toStringAsFixed(2),
      'sheetWidth': scaledSheetWidth.toStringAsFixed(2),
      'sheetHeight': scaledSheetHeight.toStringAsFixed(2),
      'canvasWidth': canvasWidth.toStringAsFixed(2),
      'canvasHeight': canvasHeight.toStringAsFixed(2),
    }.toString());

    // Draw the rectangle in the center of the canvas
    canvas.drawRect(
      Rect.fromCenter(
        center: Offset(canvasWidth / 2, canvasHeight / 2),
        width: scaledSheetWidth,
        height: scaledSheetHeight,
      ),
      paint,
    );
  }

  @override
  bool shouldRepaint(Painter oldDelegate) => false;
}
