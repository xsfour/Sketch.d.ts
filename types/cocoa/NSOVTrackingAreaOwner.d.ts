/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOVTrackingAreaOwner<T = any> extends cocoa.NSObject {
    mouseExited<R = void, P0 = unknown>(_mouseExited: P0): R;
    mouseEntered<R = void, P0 = unknown>(_mouseEntered: P0): R;
    owner<R = cocoa.NSOutlineView>(): R;
    setOwner<R = void, P0 = cocoa.NSOutlineView>(_v: P0): R;
  }
  namespace classes {
    export interface NSOVTrackingAreaOwner<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSOVTrackingAreaOwner>(): R;
      new: <R = NSOVTrackingAreaOwner>() => R;
    }
  }
}

declare const NSOVTrackingAreaOwner: cocoa.classes.NSOVTrackingAreaOwner;
