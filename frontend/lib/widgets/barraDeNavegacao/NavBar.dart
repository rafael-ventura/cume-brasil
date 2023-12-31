import 'package:flutter/material.dart';
import 'package:frontend/widgets/barraDeNavegacao/NavBarService.dart';
import 'dart:convert';
import 'package:frontend/views/PerfilView.dart';
import 'package:frontend/views/FavoritosView.dart';
import 'package:frontend/views/HomeView.dart';
import 'package:frontend/views/ViasView.dart';

/// Flutter code sample for [BottomNavigationBar].

class NavBar extends StatefulWidget {
  final void Function(int) onNavigate;

  const NavBar({Key? key, required this.onNavigate}) : super(key: key);

  @override
  State<NavBar> createState() => _BottomNavBarState();
}

class _BottomNavBarState extends State<NavBar> {
  final NavBarService _navigationBarService = NavBarService();
  int _selectedIndex = 0;
  final List<Widget> _children = [
    HomeView(),
    ViasView(),
    FavoritosView(),
    PerfilView(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
    widget.onNavigate(index);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _children.elementAt(_selectedIndex),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
            backgroundColor: Colors.red,
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.hiking),
            label: 'Vias',
            backgroundColor: Colors.green,
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.star),
            label: 'Favoritas',
            backgroundColor: Colors.purple,
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Perfil',
            backgroundColor: Color.fromARGB(255, 66, 66, 66),
          ),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.amber[800],
        onTap: _onItemTapped,
      ),
    );
  }
}
