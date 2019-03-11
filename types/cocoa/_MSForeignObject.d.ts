/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSForeignObject<T = any> extends cocoa.MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    symbolPrivate<R = boolean>(): R;
    setSymbolPrivate<R = void, P0 = boolean>(_v: P0): R;
    sourceLibraryName<R = cocoa.NSString>(): R;
    setSourceLibraryName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    libraryID<R = cocoa.NSString>(): R;
    setLibraryID<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _MSForeignObject<T = any> extends cocoa.classes.MSModelObject {
      alloc<R = _MSForeignObject>(): R;
      new: <R = _MSForeignObject>() => R;
    }
  }
}
