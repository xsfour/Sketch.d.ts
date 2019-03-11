/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSyncedTabWrapper<T = any> extends cocoa.NSBaseTabData {
    snapshotIsDisabled<R = boolean>(): R;
    setSnapshotIsDisabled<R = void, P0 = boolean>(_v: P0): R;
    window<R = cocoa.NSWindow>(): R;
    setWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
  }
  namespace classes {
    export interface NSSyncedTabWrapper<T = any> extends cocoa.classes.NSBaseTabData {
      alloc<R = NSSyncedTabWrapper>(): R;
      new: <R = NSSyncedTabWrapper>() => R;
    }
  }
}

declare const NSSyncedTabWrapper: cocoa.classes.NSSyncedTabWrapper;
