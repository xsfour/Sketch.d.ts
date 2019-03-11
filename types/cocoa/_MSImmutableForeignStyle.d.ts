/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableForeignStyle<T = any> extends cocoa.MSImmutableForeignObject {
    localSharedStyle<R = cocoa.MSImmutableSharedStyle>(): R;
    setLocalSharedStyle<R = void, P0 = cocoa.MSImmutableSharedStyle>(_v: P0): R;
    remoteStyleID<R = cocoa.NSString>(): R;
    setRemoteStyleID<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableForeignStyle<T = any> extends cocoa.classes.MSImmutableForeignObject {
      alloc<R = _MSImmutableForeignStyle>(): R;
      new: <R = _MSImmutableForeignStyle>() => R;
    }
  }
}
