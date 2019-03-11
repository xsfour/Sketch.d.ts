/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSForeignStyle<T = any> extends cocoa.MSForeignObject {
    localSharedStyle<R = cocoa.MSSharedStyle>(): R;
    setLocalSharedStyle<R = void, P0 = cocoa.MSSharedStyle>(_v: P0): R;
    remoteStyleID<R = cocoa.NSString>(): R;
    setRemoteStyleID<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _MSForeignStyle<T = any> extends cocoa.classes.MSForeignObject {
      alloc<R = _MSForeignStyle>(): R;
      new: <R = _MSForeignStyle>() => R;
    }
  }
}
