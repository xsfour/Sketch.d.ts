/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorCircularGradientTabAction<T = any> extends cocoa.MSColorInspectorModePickerAction {}
  namespace classes {
    export interface MSColorInspectorCircularGradientTabAction<T = any> extends cocoa.classes.MSColorInspectorModePickerAction {
      alloc<R = MSColorInspectorCircularGradientTabAction>(): R;
      new: <R = MSColorInspectorCircularGradientTabAction>() => R;
    }
  }
}

declare const MSColorInspectorCircularGradientTabAction: cocoa.classes.MSColorInspectorCircularGradientTabAction;
