/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorImageTabAction<T = any> extends cocoa.MSColorInspectorModePickerAction {}
  namespace classes {
    export interface MSColorInspectorImageTabAction<T = any> extends cocoa.classes.MSColorInspectorModePickerAction {
      alloc<R = MSColorInspectorImageTabAction>(): R;
      new: <R = MSColorInspectorImageTabAction>() => R;
    }
  }
}

declare const MSColorInspectorImageTabAction: cocoa.classes.MSColorInspectorImageTabAction;
