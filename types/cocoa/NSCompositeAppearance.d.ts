/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCompositeAppearance<T = any> extends cocoa.NSAppearance {
    _updateSystemTintColor<R = void>(): R;
    compositeName<R = unknown>(): R;
    _appearanceByMapping<R = unknown, P0 = cocoa.CDUnknownBlockType>(__appearanceByMapping: P0): R;
    allowsVibrancy<R = boolean>(): R;
    initWithAppearances<R = unknown, P0 = unknown>(_initWithAppearances: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    appearances<R = cocoa.NSArray>(): R;
    setAppearances<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface NSCompositeAppearance<T = any> extends cocoa.classes.NSAppearance {
      alloc<R = NSCompositeAppearance>(): R;
      new: <R = NSCompositeAppearance>() => R;
      compositeAppearanceForView<R = unknown, P0 = unknown>(_compositeAppearanceForView: P0): R;
    }
  }
}

declare const NSCompositeAppearance: cocoa.classes.NSCompositeAppearance;
