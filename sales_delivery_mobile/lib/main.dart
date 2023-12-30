import 'package:flutter/material.dart';
import 'package:sales_delivery_mobile/webviewstack.dart';


void main() {
  runApp(
    const MaterialApp(
      // theme: ThemeData(useMaterial3: true),
      home: WebViewApp(),
    ),
  );
}

class WebViewApp extends StatefulWidget {
  const WebViewApp({super.key});

  @override
  State<WebViewApp> createState() => _WebViewAppState();
}

class _WebViewAppState extends State<WebViewApp> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        toolbarHeight: 18,
        // title: const Text('Flutter WebView'),
      ),
      body: const WebViewStack(),
    );
  }
}
