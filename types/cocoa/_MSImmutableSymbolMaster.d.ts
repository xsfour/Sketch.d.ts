/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSymbolMaster<T = any> extends MSImmutableArtboardGroup {
    symbolID<R = NSString>(): R;
    setSymbolID<R = void, P0 = NSString>(_v: P0): R;
    includeBackgroundColorInInstance<R = boolean>(): R;
    setIncludeBackgroundColorInInstance<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableSymbolMaster<T = any> extends MSImmutableArtboardGroup {
      alloc<R = _MSImmutableSymbolMaster>(): R;
      new: <R = _MSImmutableSymbolMaster>() => R;
    }
  }
}
