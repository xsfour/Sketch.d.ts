/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIPreservedStateDirectory<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    dispose<R = void>(): R;
    isValid<R = boolean>(): R;
    readRecordsIntoArray_includeCarbonWindows_includeCocoaWindows<R = boolean, P0 = unknown, P1 = boolean, P2 = boolean>(_readRecordsIntoArray: P0, _includeCarbonWindows: P1, _includeCocoaWindows: P2): R;
    initWithStateDirectory<R = unknown, P0 = unknown>(_initWithStateDirectory: P0): R;
  }
  namespace classes {
    export interface NSPersistentUIPreservedStateDirectory<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSPersistentUIPreservedStateDirectory>(): R;
      new: <R = NSPersistentUIPreservedStateDirectory>() => R;
    }
  }
}

declare const NSPersistentUIPreservedStateDirectory: cocoa.classes.NSPersistentUIPreservedStateDirectory;
