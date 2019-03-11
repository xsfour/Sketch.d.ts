/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCConnectionExportInfo<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    exportCount<R = number>(): R;
    setExportCount<R = void, P0 = number>(_v: P0): R;
    exportedInterface<R = cocoa.NSXPCInterface>(): R;
    setExportedInterface<R = void, P0 = cocoa.NSXPCInterface>(_v: P0): R;
    exportedObject<R = unknown>(): R;
    setExportedObject<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface _NSXPCConnectionExportInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSXPCConnectionExportInfo>(): R;
      new: <R = _NSXPCConnectionExportInfo>() => R;
    }
  }
}
