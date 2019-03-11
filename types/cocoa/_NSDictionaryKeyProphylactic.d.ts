/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDictionaryKeyProphylactic<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    dealloc<R = void>(): R;
    hash<R = number>(): R;
    prophylactee<R = unknown>(): R;
    setProphylactee<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface _NSDictionaryKeyProphylactic<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = _NSDictionaryKeyProphylactic>(): R;
      new: <R = _NSDictionaryKeyProphylactic>() => R;
    }
  }
}
