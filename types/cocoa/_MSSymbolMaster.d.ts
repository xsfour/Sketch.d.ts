/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSymbolMaster<T = any> extends MSArtboardGroup {
    symbolID<R = NSString>(): R;
    setSymbolID<R = void, P0 = NSString>(_v: P0): R;
    includeBackgroundColorInInstance<R = boolean>(): R;
    setIncludeBackgroundColorInInstance<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSSymbolMaster<T = any> extends MSArtboardGroup {
      alloc<R = _MSSymbolMaster>(): R;
      new: <R = _MSSymbolMaster>() => R;
    }
  }
}
