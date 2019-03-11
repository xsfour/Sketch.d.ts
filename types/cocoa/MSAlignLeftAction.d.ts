/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignLeftAction<T = any> extends cocoa.MSBaseAlignAction {
    label<R = unknown>(): R;
    alignLeft<R = void, P0 = unknown>(_alignLeft: P0): R;
  }
  namespace classes {
    export interface MSAlignLeftAction<T = any> extends cocoa.classes.MSBaseAlignAction {
      alloc<R = MSAlignLeftAction>(): R;
      new: <R = MSAlignLeftAction>() => R;
    }
  }
}

declare const MSAlignLeftAction: cocoa.classes.MSAlignLeftAction;
