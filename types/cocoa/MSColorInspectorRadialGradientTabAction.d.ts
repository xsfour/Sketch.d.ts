/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorRadialGradientTabAction<T = any> extends MSColorInspectorModePickerAction {}
  namespace classes {
    export interface MSColorInspectorRadialGradientTabAction<T = any> extends MSColorInspectorModePickerAction {
      alloc<R = MSColorInspectorRadialGradientTabAction>(): R;
      new: <R = MSColorInspectorRadialGradientTabAction>() => R;
    }
  }
}

declare const MSColorInspectorRadialGradientTabAction: cocoa.classes.MSColorInspectorRadialGradientTabAction;
