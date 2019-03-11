/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBoxCustomView<T = any> extends cocoa.NSView, cocoa._NSBoxCustomViewProtocol {
    mouseDownCanMoveWindow<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    allowsVibrancy<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    cornerRadius<R = number>(): R;
    setCornerRadius<R = void, P0 = number>(_v: P0): R;
    borderWidth<R = number>(): R;
    setBorderWidth<R = void, P0 = number>(_v: P0): R;
    borderColor<R = cocoa.NSColor>(): R;
    setBorderColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    fillColor<R = cocoa.NSColor>(): R;
    setFillColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSBoxCustomView<T = any> extends cocoa.classes.NSView, cocoa.classes._NSBoxCustomViewProtocol {
      alloc<R = _NSBoxCustomView>(): R;
      new: <R = _NSBoxCustomView>() => R;
    }
  }
}
