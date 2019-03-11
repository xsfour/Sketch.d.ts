/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSWindowBackdrop<T = any> extends cocoa.NSObject {
    blendMode<R = cocoa.NSString>(): R;
    setBlendMode<R = void, P0 = cocoa.NSString>(_v: P0): R;
    frame<R = cocoa.CGRect>(): R;
    setFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    hasActiveAppearance<R = boolean>(): R;
    setHasActiveAppearance<R = void, P0 = boolean>(_v: P0): R;
    level<R = number>(): R;
    setLevel<R = void, P0 = number>(_v: P0): R;
    material<R = cocoa.NSString>(): R;
    setMaterial<R = void, P0 = cocoa.NSString>(_v: P0): R;
    orderedIn<R = boolean>(): R;
    setOrderedIn<R = void, P0 = boolean>(_v: P0): R;
    saturation<R = number>(): R;
    setSaturation<R = void, P0 = number>(_v: P0): R;
    tintColor<R = cocoa.CGColor>(): R;
    setTintColor<R = void, P0 = cocoa.CGColor>(_v: P0): R;
    window<R = cocoa.NSCGSWindow>(): R;
  }
  namespace classes {
    export interface NSCGSWindowBackdrop<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSCGSWindowBackdrop>(): R;
      new: <R = NSCGSWindowBackdrop>() => R;
    }
  }
}

declare const NSCGSWindowBackdrop: cocoa.classes.NSCGSWindowBackdrop;
