import 'package:flutter/material.dart';
import 'package:calcad/modules/core/enums/screen.enum.dart';
import 'package:calcad/modules/core/utils/screen.util.dart';
import 'package:calcad/modules/home/ui/widgets/home.appbar.widget.dart';
import 'package:calcad/modules/home/ui/widgets/home.drawer.widget.dart';
import 'package:calcad/modules/home/ui/widgets/home.selector_list.mobile.dart';
import 'package:calcad/modules/home/ui/widgets/home.selector_list.desktop.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    final Widget selectorList = Screen(context).screen == ScreenEnum.desktop ? const HomeSelectorListDesktop() : const HomeSelectorListMobile();

    return Scaffold(
      backgroundColor: Theme.of(context).primaryColorLight,
      appBar: HomeAppBarWidget(context: context),
      drawer: const HomeDrawerWidget(),
      body: SafeArea(
        child: selectorList,
      ),
    );
  }
}
