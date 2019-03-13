/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThemeLockButton<T = any> extends NSButton {
    _configureLockButton<R = void>(): R;
  }
  namespace classes {
    export interface _NSThemeLockButton<T = any> extends NSButton {
      alloc<R = _NSThemeLockButton>(): R;
      new: <R = _NSThemeLockButton>() => R;
      lockButtonInView_action<R = unknown, P0 = unknown, P1 = string>(_lockButtonInView: P0, _action: P1): R;
    }
  }
}
