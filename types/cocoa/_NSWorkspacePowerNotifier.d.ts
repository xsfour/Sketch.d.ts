/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWorkspacePowerNotifier<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    invalidate<R = void>(): R;
    initWithWorkspaceNotificationCenter<R = unknown, P0 = unknown>(_initWithWorkspaceNotificationCenter: P0): R;
  }
  namespace classes {
    export interface _NSWorkspacePowerNotifier<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSWorkspacePowerNotifier>(): R;
      new: <R = _NSWorkspacePowerNotifier>() => R;
    }
  }
}
