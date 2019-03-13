/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorModeFillTouchBarGroupAction<T = any> extends MSColorInspectorModeBorderTouchBarGroupAction {}
  namespace classes {
    export interface MSColorInspectorModeFillTouchBarGroupAction<T = any> extends MSColorInspectorModeBorderTouchBarGroupAction {
      alloc<R = MSColorInspectorModeFillTouchBarGroupAction>(): R;
      new: <R = MSColorInspectorModeFillTouchBarGroupAction>() => R;
    }
  }
}

declare const MSColorInspectorModeFillTouchBarGroupAction: cocoa.classes.MSColorInspectorModeFillTouchBarGroupAction;
