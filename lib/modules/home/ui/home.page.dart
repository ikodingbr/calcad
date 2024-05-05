import 'package:calcad/modules/home/ui/widgets/home.appbar.widget.dart';
import 'package:calcad/modules/home/ui/widgets/home.selector.widget.dart';
import 'package:flutter/material.dart';
import 'package:calcad/modules/home/ui/widgets/home.drawer.widget.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).primaryColorLight,
      appBar: HomeAppBarWidget(context: context),
      drawer: const HomeDrawerWidget(),
      body: const SafeArea(
        child: Padding(
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
                      path: '/cones/concentric/'
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.all(10),
                    child: HomeSelectorWidget(
                      svgPath: 'assets/svg/tronco-de-cone-concentrico.svg',
                      label: 'Redução Concêntrica',
                      path: '/cones/concentric/'
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
                      path: '/cones/concentric/'
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.all(10),
                    child: HomeSelectorWidget(
                      svgPath: 'assets/svg/tronco-de-cone-concentrico.svg',
                      label: 'Redução Concêntrica',
                      path: '/cones/concentric/'
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
                      path: '/cones/concentric/'
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.all(10),
                    child: HomeSelectorWidget(
                      svgPath: 'assets/svg/tronco-de-cone-concentrico.svg',
                      label: 'Redução Concêntrica',
                      path: '/cones/concentric/'
                    ),
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
