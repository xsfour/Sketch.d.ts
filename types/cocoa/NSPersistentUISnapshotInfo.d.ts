/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUISnapshotInfo<T = any> extends NSObject {}
  namespace classes {
    export interface NSPersistentUISnapshotInfo<T = any> extends NSObject {
      alloc<R = NSPersistentUISnapshotInfo>(): R;
      new: <R = NSPersistentUISnapshotInfo>() => R;
    }
  }
}

declare const NSPersistentUISnapshotInfo: cocoa.classes.NSPersistentUISnapshotInfo;
