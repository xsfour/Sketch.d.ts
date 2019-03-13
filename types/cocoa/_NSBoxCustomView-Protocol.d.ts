/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBoxCustomViewProtocol<T = any> extends NSObjectProtocol {
    cornerRadius<R = number>(): R;
    setCornerRadius<R = void, P0 = number>(_v: P0): R;
    borderWidth<R = number>(): R;
    setBorderWidth<R = void, P0 = number>(_v: P0): R;
    borderColor<R = NSColor>(): R;
    setBorderColor<R = void, P0 = NSColor>(_v: P0): R;
    fillColor<R = NSColor>(): R;
    setFillColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface _NSBoxCustomViewProtocol<T = any> extends NSObjectProtocol {  }
  }
}
