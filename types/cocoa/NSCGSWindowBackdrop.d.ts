/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSWindowBackdrop<T = any> extends NSObject {
    blendMode<R = NSString>(): R;
    setBlendMode<R = void, P0 = NSString>(_v: P0): R;
    frame<R = CGRect>(): R;
    setFrame<R = void, P0 = CGRect>(_v: P0): R;
    hasActiveAppearance<R = boolean>(): R;
    setHasActiveAppearance<R = void, P0 = boolean>(_v: P0): R;
    level<R = number>(): R;
    setLevel<R = void, P0 = number>(_v: P0): R;
    material<R = NSString>(): R;
    setMaterial<R = void, P0 = NSString>(_v: P0): R;
    orderedIn<R = boolean>(): R;
    setOrderedIn<R = void, P0 = boolean>(_v: P0): R;
    saturation<R = number>(): R;
    setSaturation<R = void, P0 = number>(_v: P0): R;
    tintColor<R = CGColor>(): R;
    setTintColor<R = void, P0 = CGColor>(_v: P0): R;
    window<R = NSCGSWindow>(): R;
  }
  namespace classes {
    export interface NSCGSWindowBackdrop<T = any> extends NSObject {
      alloc<R = NSCGSWindowBackdrop>(): R;
      new: <R = NSCGSWindowBackdrop>() => R;
    }
  }
}

declare const NSCGSWindowBackdrop: cocoa.classes.NSCGSWindowBackdrop;
