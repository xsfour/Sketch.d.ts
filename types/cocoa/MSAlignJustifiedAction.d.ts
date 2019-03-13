/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignJustifiedAction<T = any> extends MSBaseAlignAction {
    label<R = unknown>(): R;
    alignJustified<R = void, P0 = unknown>(_alignJustified: P0): R;
  }
  namespace classes {
    export interface MSAlignJustifiedAction<T = any> extends MSBaseAlignAction {
      alloc<R = MSAlignJustifiedAction>(): R;
      new: <R = MSAlignJustifiedAction>() => R;
    }
  }
}

declare const MSAlignJustifiedAction: cocoa.classes.MSAlignJustifiedAction;
