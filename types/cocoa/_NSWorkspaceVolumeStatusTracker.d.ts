/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWorkspaceVolumeStatusTracker<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSWorkspaceVolumeStatusTracker<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSWorkspaceVolumeStatusTracker>(): R;
      new: <R = _NSWorkspaceVolumeStatusTracker>() => R;
    }
  }
}
