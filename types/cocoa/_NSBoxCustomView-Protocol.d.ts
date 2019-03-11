/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBoxCustomViewProtocol<T = any> extends cocoa.NSObjectProtocol {
    cornerRadius<R = number>(): R;
    setCornerRadius<R = void, P0 = number>(_v: P0): R;
    borderWidth<R = number>(): R;
    setBorderWidth<R = void, P0 = number>(_v: P0): R;
    borderColor<R = cocoa.NSColor>(): R;
    setBorderColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    fillColor<R = cocoa.NSColor>(): R;
    setFillColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface _NSBoxCustomViewProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}
