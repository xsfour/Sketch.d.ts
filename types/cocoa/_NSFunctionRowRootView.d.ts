/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowRootView<T = any> extends cocoa.NSFunctionRowBackgroundColorView {
    initWithFunctionRow<R = unknown, P0 = unknown>(_initWithFunctionRow: P0): R;
    functionRow<R = cocoa.NSFunctionRow>(): R;
  }
  namespace classes {
    export interface _NSFunctionRowRootView<T = any> extends cocoa.classes.NSFunctionRowBackgroundColorView {
      alloc<R = _NSFunctionRowRootView>(): R;
      new: <R = _NSFunctionRowRootView>() => R;
    }
  }
}
