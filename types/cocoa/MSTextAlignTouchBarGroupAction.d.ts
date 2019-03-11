/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextAlignTouchBarGroupAction<T = any> extends cocoa.MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSTextAlignTouchBarGroupAction<T = any> extends cocoa.classes.MSActionGroup {
      alloc<R = MSTextAlignTouchBarGroupAction>(): R;
      new: <R = MSTextAlignTouchBarGroupAction>() => R;
    }
  }
}

declare const MSTextAlignTouchBarGroupAction: cocoa.classes.MSTextAlignTouchBarGroupAction;
