/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSymbolInstance<T = any> extends cocoa.MSImmutableStyledLayer {
    overrideValues<R = cocoa.NSArray>(): R;
    setOverrideValues<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    verticalSpacing<R = number>(): R;
    setVerticalSpacing<R = void, P0 = number>(_v: P0): R;
    symbolID<R = cocoa.NSString>(): R;
    setSymbolID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    scale<R = number>(): R;
    setScale<R = void, P0 = number>(_v: P0): R;
    horizontalSpacing<R = number>(): R;
    setHorizontalSpacing<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableSymbolInstance<T = any> extends cocoa.classes.MSImmutableStyledLayer {
      alloc<R = _MSImmutableSymbolInstance>(): R;
      new: <R = _MSImmutableSymbolInstance>() => R;
    }
  }
}
