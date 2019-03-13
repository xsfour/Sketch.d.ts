/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCompositeLayoutXAxisAnchor<T = any> extends NSLayoutXAxisAnchor, NSCompositeLayoutAnchorProtocol {
    initWithAnchor_plusDimension_times_plus<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_initWithAnchor: P0, _plusDimension: P1, _times: P2, _plus: P3): R;
    _childAnchors<R = NSArray>(): R;
  }
  namespace classes {
    export interface _NSCompositeLayoutXAxisAnchor<T = any> extends NSLayoutXAxisAnchor, NSCompositeLayoutAnchorProtocol {
      alloc<R = _NSCompositeLayoutXAxisAnchor>(): R;
      new: <R = _NSCompositeLayoutXAxisAnchor>() => R;
    }
  }
}
