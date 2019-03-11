/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMotionBlurInspectorItem<T = any> extends cocoa.MSBaseBlurInspectorItem {
    angleTextField<R = cocoa.MSUpDownTextField>(): R;
    setAngleTextField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
    angleAdapter<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setAngleAdapter<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    angleSlider<R = cocoa.NSSlider>(): R;
    setAngleSlider<R = void, P0 = cocoa.NSSlider>(_v: P0): R;
  }
  namespace classes {
    export interface MSMotionBlurInspectorItem<T = any> extends cocoa.classes.MSBaseBlurInspectorItem {
      alloc<R = MSMotionBlurInspectorItem>(): R;
      new: <R = MSMotionBlurInspectorItem>() => R;
    }
  }
}

declare const MSMotionBlurInspectorItem: cocoa.classes.MSMotionBlurInspectorItem;
