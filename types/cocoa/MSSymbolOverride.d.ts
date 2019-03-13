/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolOverride<T = any> extends MSAvailableOverride {
    addChild<R = void, P0 = unknown>(_addChild: P0): R;
    children<R = unknown>(): R;
    internalChildren<R = NSArray>(): R;
  }
  namespace classes {
    export interface MSSymbolOverride<T = any> extends MSAvailableOverride {
      alloc<R = MSSymbolOverride>(): R;
      new: <R = MSSymbolOverride>() => R;
    }
  }
}

declare const MSSymbolOverride: cocoa.classes.MSSymbolOverride;
