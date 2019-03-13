/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorModeBorderTouchBarGroupAction<T = any> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSColorInspectorModeBorderTouchBarGroupAction<T = any> extends MSActionGroup {
      alloc<R = MSColorInspectorModeBorderTouchBarGroupAction>(): R;
      new: <R = MSColorInspectorModeBorderTouchBarGroupAction>() => R;
    }
  }
}

declare const MSColorInspectorModeBorderTouchBarGroupAction: cocoa.classes.MSColorInspectorModeBorderTouchBarGroupAction;
