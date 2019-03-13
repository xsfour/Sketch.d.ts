/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnarchiver<T = any> extends NSCoder {
    classNameDecodedForArchiveClassName<R = unknown, P0 = unknown>(_classNameDecodedForArchiveClassName: P0): R;
    decodeClassName_asClassName<R = void, P0 = unknown, P1 = unknown>(_decodeClassName: P0, _asClassName: P1): R;
    data<R = unknown>(): R;
    _setAllowedClasses<R = void, P0 = unknown>(__setAllowedClasses: P0): R;
    replaceObject_withObject<R = void, P0 = unknown, P1 = unknown>(_replaceObject: P0, _withObject: P1): R;
    dealloc<R = void>(): R;
    initForReadingWithData<R = unknown, P0 = unknown>(_initForReadingWithData: P0): R;
    systemVersion<R = number>(): R;
    atEnd<R = boolean>(): R;
  }
  namespace classes {
    export interface NSUnarchiver<T = any> extends NSCoder {
      alloc<R = NSUnarchiver>(): R;
      new: <R = NSUnarchiver>() => R;
      unarchiveObjectWithFile<R = unknown, P0 = unknown>(_unarchiveObjectWithFile: P0): R;
      unarchiveObjectWithData<R = unknown, P0 = unknown>(_unarchiveObjectWithData: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSUnarchiver: cocoa.classes.NSUnarchiver;
