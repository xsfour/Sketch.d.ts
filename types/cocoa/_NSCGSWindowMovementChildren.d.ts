/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowMovementChildren<T = any> extends NSObject {
    commitForWindow<R = void, P0 = unknown>(_commitForWindow: P0): R;
    windowsForWindow<R = unknown, P0 = unknown>(_windowsForWindow: P0): R;
    setWindows<R = void, P0 = unknown>(_setWindows: P0): R;
    removeWindow<R = void, P0 = unknown>(_removeWindow: P0): R;
    addWindow<R = void, P0 = unknown>(_addWindow: P0): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSCGSWindowMovementChildren<T = any> extends NSObject {
      alloc<R = _NSCGSWindowMovementChildren>(): R;
      new: <R = _NSCGSWindowMovementChildren>() => R;
    }
  }
}
