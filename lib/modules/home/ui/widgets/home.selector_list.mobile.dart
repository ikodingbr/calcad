import 'package:calcad/modules/home/ui/widgets/home.selector.widget.dart';
import 'package:flutter/material.dart';

class HomeSelectorListMobile extends StatelessWidget {
  const HomeSelectorListMobile({super.key});

  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.all(10),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Padding(
                padding: EdgeInsets.all(10),
                child: HomeSelectorWidget(
                  svgPath: 'assets/svg/tronco-de-cone-concentrico.svg',
                  label: 'Redução Concêntrica',
                  path: '/cones/concentric/',
                  size: 175,
                ),
              ),
              Padding(
                padding: EdgeInsets.all(10),
                child: HomeSelectorWidget(
                  svgPath: 'assets/svg/tronco-de-cone-concentrico.svg',
                  label: 'Redução Concêntrica',
                  path: '/cones/concentric/',
                  size: 175,
                ),
              ),
            ],
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Padding(
                padding: EdgeInsets.all(10),
                child: HomeSelectorWidget(
                  svgPath: 'assets/svg/tronco-de-cone-concentrico.svg',
                  label: 'Redução Concêntrica',
                  path: '/cones/concentric/',
                  size: 175,
                ),
              ),
              Padding(
                padding: EdgeInsets.all(10),
                child: HomeSelectorWidget(
                  svgPath: 'assets/svg/tronco-de-cone-concentrico.svg',
                  label: 'Redução Concêntrica',
                  path: '/cones/concentric/',
                  size: 175,
                ),
              ),
            ],
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Padding(
                padding: EdgeInsets.all(10),
                child: HomeSelectorWidget(
                  svgPath: 'assets/svg/tronco-de-cone-concentrico.svg',
                  label: 'Redução Concêntrica',
                  path: '/cones/concentric/',
                  size: 175,
                ),
              ),
              Padding(
                padding: EdgeInsets.all(10),
                child: HomeSelectorWidget(
                  svgPath: 'assets/svg/tronco-de-cone-concentrico.svg',
                  label: 'Redução Concêntrica',
                  path: '/cones/concentric/',
                  size: 175,
                ),
              ),
            ],
          )
        ],
      ),
    );
  }
}
