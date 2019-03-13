/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSyncedTabWrapper<T = any> extends NSBaseTabData {
    snapshotIsDisabled<R = boolean>(): R;
    setSnapshotIsDisabled<R = void, P0 = boolean>(_v: P0): R;
    window<R = NSWindow>(): R;
    setWindow<R = void, P0 = NSWindow>(_v: P0): R;
  }
  namespace classes {
    export interface NSSyncedTabWrapper<T = any> extends NSBaseTabData {
      alloc<R = NSSyncedTabWrapper>(): R;
      new: <R = NSSyncedTabWrapper>() => R;
    }
  }
}

declare const NSSyncedTabWrapper: cocoa.classes.NSSyncedTabWrapper;
