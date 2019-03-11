/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSConstraintIndicatorView<T = any> extends cocoa.NSView {
    drawRect_asBorder_withLineThickness_forceColor<R = void, P0 = cocoa.CGRect, P1 = boolean, P2 = number, P3 = unknown>(_drawRect: P0, _asBorder: P1, _withLineThickness: P2, _forceColor: P3): R;
    roundRectInBase<R = cocoa.CGRect, P0 = cocoa.CGRect>(_roundRectInBase: P0): R;
    constraintDescription<R = unknown>(): R;
    isFlipped<R = boolean>(): R;
    representedConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setRepresentedConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
  }
  namespace classes {
    export interface _NSConstraintIndicatorView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSConstraintIndicatorView>(): R;
      new: <R = _NSConstraintIndicatorView>() => R;
    }
  }
}
