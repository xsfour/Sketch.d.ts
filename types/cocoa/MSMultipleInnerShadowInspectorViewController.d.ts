/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleInnerShadowInspectorViewController<T = any> extends cocoa.MSMultipleShadowInspectorViewController {
    nibName<R = unknown>(): R;
  }
  namespace classes {
    export interface MSMultipleInnerShadowInspectorViewController<T = any> extends cocoa.classes.MSMultipleShadowInspectorViewController {
      alloc<R = MSMultipleInnerShadowInspectorViewController>(): R;
      new: <R = MSMultipleInnerShadowInspectorViewController>() => R;
    }
  }
}

declare const MSMultipleInnerShadowInspectorViewController: cocoa.classes.MSMultipleInnerShadowInspectorViewController;
