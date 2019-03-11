/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolOverride<T = any> extends cocoa.MSAvailableOverride {
    addChild<R = void, P0 = unknown>(_addChild: P0): R;
    children<R = unknown>(): R;
    internalChildren<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MSSymbolOverride<T = any> extends cocoa.classes.MSAvailableOverride {
      alloc<R = MSSymbolOverride>(): R;
      new: <R = MSSymbolOverride>() => R;
    }
  }
}

declare const MSSymbolOverride: cocoa.classes.MSSymbolOverride;
