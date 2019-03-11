/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFinishEditingButton<T = any> extends cocoa.NSButton {}
  namespace classes {
    export interface MSFinishEditingButton<T = any> extends cocoa.classes.NSButton {
      alloc<R = MSFinishEditingButton>(): R;
      new: <R = MSFinishEditingButton>() => R;
    }
  }
}

declare const MSFinishEditingButton: cocoa.classes.MSFinishEditingButton;
