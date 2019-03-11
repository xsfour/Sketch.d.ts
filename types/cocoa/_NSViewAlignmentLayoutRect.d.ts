/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewAlignmentLayoutRect<T = any> extends cocoa.NSLayoutRect {
    heightAnchor<R = unknown>(): R;
    widthAnchor<R = unknown>(): R;
    bottomAnchor<R = unknown>(): R;
    centerYAnchor<R = unknown>(): R;
    topAnchor<R = unknown>(): R;
    trailingAnchor<R = unknown>(): R;
    centerXAnchor<R = unknown>(): R;
    leadingAnchor<R = unknown>(): R;
    initWithHostItem<R = unknown, P0 = unknown>(_initWithHostItem: P0): R;
    hostItem<R = cocoa.NSAKLayoutItem>(): R;
  }
  namespace classes {
    export interface _NSViewAlignmentLayoutRect<T = any> extends cocoa.classes.NSLayoutRect {
      alloc<R = _NSViewAlignmentLayoutRect>(): R;
      new: <R = _NSViewAlignmentLayoutRect>() => R;
    }
  }
}
