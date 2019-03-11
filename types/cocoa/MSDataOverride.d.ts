/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataOverride<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    initWithOverride_symbolInstance<R = unknown, P0 = unknown, P1 = unknown>(_initWithOverride: P0, _symbolInstance: P1): R;
    symbolInstance<R = cocoa.MSSymbolInstance>(): R;
    availableOverride<R = cocoa.MSAvailableOverride>(): R;
    overrideIdentifier<R = cocoa.NSString>(): R;
    affectedLayer<R = cocoa.MSImmutableStyledLayer>(): R;
  }
  namespace classes {
    export interface MSDataOverride<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSDataOverride>(): R;
      new: <R = MSDataOverride>() => R;
    }
  }
}

declare const MSDataOverride: cocoa.classes.MSDataOverride;
