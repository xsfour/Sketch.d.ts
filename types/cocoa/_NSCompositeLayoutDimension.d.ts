/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCompositeLayoutDimension<T = any> extends NSLayoutDimension, NSCompositeLayoutAnchorProtocol {
    initWithDimension_plusDimension<R = unknown, P0 = unknown, P1 = unknown>(_initWithDimension: P0, _plusDimension: P1): R;
    initWithDimension_plusDimension_times<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithDimension: P0, _plusDimension: P1, _times: P2): R;
    _childAnchors<R = NSArray>(): R;
  }
  namespace classes {
    export interface _NSCompositeLayoutDimension<T = any> extends NSLayoutDimension, NSCompositeLayoutAnchorProtocol {
      alloc<R = _NSCompositeLayoutDimension>(): R;
      new: <R = _NSCompositeLayoutDimension>() => R;
    }
  }
}
