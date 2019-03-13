/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBoundKeyPath<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    mutableSetValue<R = unknown>(): R;
    mutableOrderedSetValue<R = unknown>(): R;
    mutableArrayValue<R = unknown>(): R;
    setValue<R = void, P0 = unknown>(_setValue: P0): R;
    value<R = unknown>(): R;
    validateValue_error<R = boolean, P0 = unknown, P1 = unknown>(_validateValue: P0, _error: P1): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    rootObject<R = unknown>(): R;
    setRootObject<R = void, P0 = unknown>(_v: P0): R;
    keyPath<R = NSString>(): R;
  }
  namespace classes {
    export interface NSBoundKeyPath<T = any> extends NSObject {
      alloc<R = NSBoundKeyPath>(): R;
      new: <R = NSBoundKeyPath>() => R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
      keyPathWithRootObject_path<R = unknown, P0 = unknown, P1 = string>(_keyPathWithRootObject: P0, _path: P1): R;
      newKeyPathWithRootObject_keyPathString<R = unknown, P0 = unknown, P1 = unknown>(_newKeyPathWithRootObject: P0, _keyPathString: P1): R;
    }
  }
}

declare const NSBoundKeyPath: cocoa.classes.NSBoundKeyPath;
