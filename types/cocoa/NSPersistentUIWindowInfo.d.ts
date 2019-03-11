/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIWindowInfo<T = any> extends cocoa.NSObject {
    recordEncryptionKey<R = string>(): R;
    dealloc<R = void>(): R;
    copyAllPublicProperties<R = unknown>(): R;
    setExternalPublicProperties<R = void, P0 = unknown>(_setExternalPublicProperties: P0): R;
    isGlobal<R = boolean>(): R;
    windowID<R = number>(): R;
    setWindowID<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSPersistentUIWindowInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSPersistentUIWindowInfo>(): R;
      new: <R = NSPersistentUIWindowInfo>() => R;
    }
  }
}

declare const NSPersistentUIWindowInfo: cocoa.classes.NSPersistentUIWindowInfo;
