/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPasteboardTypeCache<T = any> extends cocoa.NSObject {
    requestOnlyTypesForIndex<R = unknown, P0 = number>(_requestOnlyTypesForIndex: P0): R;
    addRequestOnlyType_forIndex<R = void, P0 = unknown, P1 = number>(_addRequestOnlyType: P0, _forIndex: P1): R;
    _conformingTypeIdentifiers<R = unknown>(): R;
    dealloc<R = void>(): R;
    cachedTypeNames<R = cocoa.NSMutableArray>(): R;
    cachedTypeNameUnion<R = cocoa.NSSet>(): R;
  }
  namespace classes {
    export interface _NSPasteboardTypeCache<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSPasteboardTypeCache>(): R;
      new: <R = _NSPasteboardTypeCache>() => R;
    }
  }
}
