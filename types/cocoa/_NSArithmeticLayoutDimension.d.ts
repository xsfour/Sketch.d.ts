/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSArithmeticLayoutDimension<T = any> extends cocoa.NSLayoutDimension, cocoa.NSCompositeLayoutAnchorProtocol {
    initWithMultiplier_dimension_constant<R = unknown, P0 = number, P1 = unknown, P2 = number>(_initWithMultiplier: P0, _dimension: P1, _constant: P2): R;
    _childAnchors<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface _NSArithmeticLayoutDimension<T = any> extends cocoa.classes.NSLayoutDimension, cocoa.classes.NSCompositeLayoutAnchorProtocol {
      alloc<R = _NSArithmeticLayoutDimension>(): R;
      new: <R = _NSArithmeticLayoutDimension>() => R;
    }
  }
}
