/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBoxMaterialCapableCustomView<T = any> extends cocoa.NSView, cocoa._NSBoxCustomViewProtocol {
    _updateSubviews<R = void>(): R;
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
    export interface _NSBoxMaterialCapableCustomView<T = any> extends cocoa.classes.NSView, cocoa.classes._NSBoxCustomViewProtocol {
      alloc<R = _NSBoxMaterialCapableCustomView>(): R;
      new: <R = _NSBoxMaterialCapableCustomView>() => R;
    }
  }
}
