/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGRectangleShape<T = any> extends cocoa.SVGBasicShape {
    cornerRadius<R = number>(): R;
    setCornerRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGRectangleShape<T = any> extends cocoa.classes.SVGBasicShape {
      alloc<R = _SVGRectangleShape>(): R;
      new: <R = _SVGRectangleShape>() => R;
    }
  }
}
