/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorImageTabAction<T = any> extends MSColorInspectorModePickerAction {}
  namespace classes {
    export interface MSColorInspectorImageTabAction<T = any> extends MSColorInspectorModePickerAction {
      alloc<R = MSColorInspectorImageTabAction>(): R;
      new: <R = MSColorInspectorImageTabAction>() => R;
    }
  }
}

declare const MSColorInspectorImageTabAction: cocoa.classes.MSColorInspectorImageTabAction;
