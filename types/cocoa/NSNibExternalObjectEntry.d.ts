/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibExternalObjectEntry<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    initWithKey_object<R = unknown, P0 = unknown, P1 = unknown>(_initWithKey: P0, _object: P1): R;
    objectDescription<R = cocoa.NSString>(): R;
    key<R = cocoa.NSString>(): R;
    object<R = unknown>(): R;
  }
  namespace classes {
    export interface NSNibExternalObjectEntry<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSNibExternalObjectEntry>(): R;
      new: <R = NSNibExternalObjectEntry>() => R;
      entryWithKey_forObject<R = unknown, P0 = unknown, P1 = unknown>(_entryWithKey: P0, _forObject: P1): R;
    }
  }
}

declare const NSNibExternalObjectEntry: cocoa.classes.NSNibExternalObjectEntry;
