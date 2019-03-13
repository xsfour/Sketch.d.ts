/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignStyle<T = any> extends _MSForeignStyle, MSSharedStylePastingProtocol {
    remoteShareID<R = unknown>(): R;
    setLocalObject<R = void, P0 = unknown>(_setLocalObject: P0): R;
    localObject<R = unknown>(): R;
    initAsOverrideReferenceForSymbol_withOriginal<R = unknown, P0 = unknown, P1 = unknown>(_initAsOverrideReferenceForSymbol: P0, _withOriginal: P1): R;
    currentObjectID_MSSharedStylePasting<R = NSString>(): R;
  }
  namespace classes {
    export interface MSForeignStyle<T = any> extends _MSForeignStyle, MSSharedStylePastingProtocol {
      alloc<R = MSForeignStyle>(): R;
      new: <R = MSForeignStyle>() => R;
    }
  }
}

declare const MSForeignStyle: cocoa.classes.MSForeignStyle;
