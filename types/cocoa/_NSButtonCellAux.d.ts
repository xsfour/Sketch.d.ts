/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSButtonCellAux<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    copyWithZone<R = unknown, P0 = cocoa._NSZone>(_copyWithZone: P0): R;
    animatingOutTextFields<R = cocoa.NSMutableArray>(): R;
    setAnimatingOutTextFields<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    animatingOutImageViews<R = cocoa.NSMutableArray>(): R;
    setAnimatingOutImageViews<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    minimumPressDuration<R = number>(): R;
    setMinimumPressDuration<R = void, P0 = number>(_v: P0): R;
    contentTintColor<R = cocoa.NSColor>(): R;
    setContentTintColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    bezelTintColor<R = cocoa.NSColor>(): R;
    setBezelTintColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    animator<R = cocoa._NSButtonAnimationView>(): R;
    setAnimator<R = void, P0 = cocoa._NSButtonAnimationView>(_v: P0): R;
  }
  namespace classes {
    export interface _NSButtonCellAux<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSButtonCellAux>(): R;
      new: <R = _NSButtonCellAux>() => R;
    }
  }
}
