/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSButtonCellAux<T = any> extends NSObject {
    dealloc<R = void>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    animatingOutTextFields<R = NSMutableArray>(): R;
    setAnimatingOutTextFields<R = void, P0 = NSMutableArray>(_v: P0): R;
    animatingOutImageViews<R = NSMutableArray>(): R;
    setAnimatingOutImageViews<R = void, P0 = NSMutableArray>(_v: P0): R;
    minimumPressDuration<R = number>(): R;
    setMinimumPressDuration<R = void, P0 = number>(_v: P0): R;
    contentTintColor<R = NSColor>(): R;
    setContentTintColor<R = void, P0 = NSColor>(_v: P0): R;
    bezelTintColor<R = NSColor>(): R;
    setBezelTintColor<R = void, P0 = NSColor>(_v: P0): R;
    animator<R = _NSButtonAnimationView>(): R;
    setAnimator<R = void, P0 = _NSButtonAnimationView>(_v: P0): R;
  }
  namespace classes {
    export interface _NSButtonCellAux<T = any> extends NSObject {
      alloc<R = _NSButtonCellAux>(): R;
      new: <R = _NSButtonCellAux>() => R;
    }
  }
}
