/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSServicesRolloverView<T = any> extends NSView {
    initWithDelegate_style<R = unknown, P0 = unknown, P1 = number>(_initWithDelegate: P0, _style: P1): R;
    isFlipped<R = boolean>(): R;
    delegate<R = NSServicesRolloverViewDelegate>(): R;
    setDelegate<R = void, P0 = NSServicesRolloverViewDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSServicesRolloverView<T = any> extends NSView {
      alloc<R = NSServicesRolloverView>(): R;
      new: <R = NSServicesRolloverView>() => R;
    }
  }
}

declare const NSServicesRolloverView: cocoa.classes.NSServicesRolloverView;
