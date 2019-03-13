/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableForeignStyle<T = any> extends MSImmutableForeignObject {
    localSharedStyle<R = MSImmutableSharedStyle>(): R;
    setLocalSharedStyle<R = void, P0 = MSImmutableSharedStyle>(_v: P0): R;
    remoteStyleID<R = NSString>(): R;
    setRemoteStyleID<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableForeignStyle<T = any> extends MSImmutableForeignObject {
      alloc<R = _MSImmutableForeignStyle>(): R;
      new: <R = _MSImmutableForeignStyle>() => R;
    }
  }
}
