import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:webview_flutter/webview_flutter.dart';

class WebViewStack extends StatefulWidget {
  const WebViewStack({super.key});

  @override
  State<WebViewStack> createState() => _WebViewStackState();
}

class _WebViewStackState extends State<WebViewStack> {
  var loadingPercentage = 0;
  late final WebViewController controller;

  @override
  void initState() {
    super.initState();
    // controller = WebViewController()
    //   ..setJavaScriptMode(JavaScriptMode.unrestricted)
    //   ..setNavigationDelegate(NavigationDelegate(
    //     onPageStarted: (url) {
    //       if (mounted) {
    //         setState(() {
    //           loadingPercentage = 0;
    //         });
    //       }
    //     },
    //     onProgress: (progress) {
    //       setState(() {
    //         loadingPercentage = progress;
    //       });
    //     },
    //     onPageFinished: (url) {
    //       setState(() {
    //         loadingPercentage = 100;
    //       });
    //     },
    //   ))
    //   ..loadRequest(
    //     Uri.parse('https://sales-delivery-mono-9264.vercel.app'),
    //   );
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        InAppWebView(
          initialUrlRequest: URLRequest(
            url: WebUri("https://sales-delivery-mono-9264.vercel.app"),
          ),
          // androidOptions: AndroidInAppWebViewOptions(
          //   useWideViewPort: true,
          //   loadWithOverviewMode: true,
          //   databaseEnabled: true,
          //   displayZoomControls: true,
          //   builtInZoomControls: true,
          //   thirdPartyCookiesEnabled: true,
          //   userAgent: "My Custom User Agent",
          //   // Add more options as needed
          // ),
          onWebViewCreated: (InAppWebViewController controller) {
            // WebView has been created
          },
          // onLoadStart: (InAppWebViewController controller, Uri url) {
          //   // WebView has started loading a new page
          // },
          // onLoadStop: (InAppWebViewController controller, Uri url) {
          //   // WebView has finished loading a page
          // },
        ),
        if (loadingPercentage < 100)
          LinearProgressIndicator(
            value: loadingPercentage / 100.0,
          ),
      ],
    );
  }
}
