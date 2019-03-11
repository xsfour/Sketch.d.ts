/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorModeFillTouchBarGroupAction<T = any> extends cocoa.MSColorInspectorModeBorderTouchBarGroupAction {}
  namespace classes {
    export interface MSColorInspectorModeFillTouchBarGroupAction<T = any> extends cocoa.classes.MSColorInspectorModeBorderTouchBarGroupAction {
      alloc<R = MSColorInspectorModeFillTouchBarGroupAction>(): R;
      new: <R = MSColorInspectorModeFillTouchBarGroupAction>() => R;
    }
  }
}

declare const MSColorInspectorModeFillTouchBarGroupAction: cocoa.classes.MSColorInspectorModeFillTouchBarGroupAction;
