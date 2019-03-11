/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMirrorWebView<T = any> extends cocoa.WKWebView {
    hitTest<R = unknown, P0 = cocoa.CGPoint>(_hitTest: P0): R;
    acceptsFirstResponder<R = boolean>(): R;
  }
  namespace classes {
    export interface MSMirrorWebView<T = any> extends cocoa.classes.WKWebView {
      developerToolsEnabled<R = boolean>(): R;
    }
  }
}

declare const MSMirrorWebView: cocoa.classes.MSMirrorWebView;
