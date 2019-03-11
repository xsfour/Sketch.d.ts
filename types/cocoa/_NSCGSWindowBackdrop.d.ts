/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowBackdrop<T = any> extends cocoa.NSCGSWindowBackdrop {
    setTintColor<R = void, P0 = cocoa.CGColor>(_setTintColor: P0): R;
    tintColor<R = cocoa.CGColor>(): R;
    setOrderedIn<R = void, P0 = boolean>(_setOrderedIn: P0): R;
    isOrderedIn<R = boolean>(): R;
    setSaturation<R = void, P0 = number>(_setSaturation: P0): R;
    saturation<R = number>(): R;
    setHasActiveAppearance<R = void, P0 = boolean>(_setHasActiveAppearance: P0): R;
    hasActiveAppearance<R = boolean>(): R;
    setLevel<R = void, P0 = number>(_setLevel: P0): R;
    level<R = number>(): R;
    setFrame<R = void, P0 = cocoa.CGRect>(_setFrame: P0): R;
    frame<R = cocoa.CGRect>(): R;
    setBlendMode<R = void, P0 = unknown>(_setBlendMode: P0): R;
    blendMode<R = unknown>(): R;
    setMaterial<R = void, P0 = unknown>(_setMaterial: P0): R;
    material<R = unknown>(): R;
    window<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithWindow<R = unknown, P0 = unknown>(_initWithWindow: P0): R;
  }
  namespace classes {
    export interface _NSCGSWindowBackdrop<T = any> extends cocoa.classes.NSCGSWindowBackdrop {
      alloc<R = _NSCGSWindowBackdrop>(): R;
      new: <R = _NSCGSWindowBackdrop>() => R;
    }
  }
}
