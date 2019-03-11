/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDataDetectionIndicatorView<T = any> extends cocoa._NSDrawingHandlerView {
    copy<R = void, P0 = unknown>(_copy: P0): R;
    _showMenu<R = void, P0 = unknown>(__showMenu: P0): R;
    _reset<R = void>(): R;
    bindToTextView_forDataResult_inRange<R = void, P0 = unknown, P1 = unknown, P2 = cocoa._NSRange>(_bindToTextView: P0, _forDataResult: P1, _inRange: P2): R;
  }
  namespace classes {
    export interface NSDataDetectionIndicatorView<T = any> extends cocoa.classes._NSDrawingHandlerView {
      alloc<R = NSDataDetectionIndicatorView>(): R;
      new: <R = NSDataDetectionIndicatorView>() => R;
    }
  }
}

declare const NSDataDetectionIndicatorView: cocoa.classes.NSDataDetectionIndicatorView;
