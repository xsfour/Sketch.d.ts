/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorLinearGradientTabAction<T = any> extends MSColorInspectorModePickerAction {}
  namespace classes {
    export interface MSColorInspectorLinearGradientTabAction<T = any> extends MSColorInspectorModePickerAction {
      alloc<R = MSColorInspectorLinearGradientTabAction>(): R;
      new: <R = MSColorInspectorLinearGradientTabAction>() => R;
    }
  }
}

declare const MSColorInspectorLinearGradientTabAction: cocoa.classes.MSColorInspectorLinearGradientTabAction;
