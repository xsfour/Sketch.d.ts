/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUISecureURLHerder<T = any> extends NSObject {
    resolveSecurityScopedURLsFromRecords<R = void, P0 = unknown>(_resolveSecurityScopedURLsFromRecords: P0): R;
    fetchAndConsumeLSPersistentFileList<R = void>(): R;
    getLSPersistentFileList<R = OpaqueLSSharedFileListRef>(): R;
    dealloc<R = void>(): R;
    initWithBundleID<R = unknown, P0 = unknown>(_initWithBundleID: P0): R;
  }
  namespace classes {
    export interface NSPersistentUISecureURLHerder<T = any> extends NSObject {
      alloc<R = NSPersistentUISecureURLHerder>(): R;
      new: <R = NSPersistentUISecureURLHerder>() => R;
    }
  }
}

declare const NSPersistentUISecureURLHerder: cocoa.classes.NSPersistentUISecureURLHerder;
