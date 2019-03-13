/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorColorTabAction<T = any> extends MSColorInspectorModePickerAction {}
  namespace classes {
    export interface MSColorInspectorColorTabAction<T = any> extends MSColorInspectorModePickerAction {
      alloc<R = MSColorInspectorColorTabAction>(): R;
      new: <R = MSColorInspectorColorTabAction>() => R;
    }
  }
}

declare const MSColorInspectorColorTabAction: cocoa.classes.MSColorInspectorColorTabAction;
