/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMirrorWebView<T = any> extends WKWebView {
    hitTest<R = unknown, P0 = CGPoint>(_hitTest: P0): R;
    acceptsFirstResponder<R = boolean>(): R;
  }
  namespace classes {
    export interface MSMirrorWebView<T = any> extends WKWebView {
      developerToolsEnabled<R = boolean>(): R;
    }
  }
}

declare const MSMirrorWebView: cocoa.classes.MSMirrorWebView;
