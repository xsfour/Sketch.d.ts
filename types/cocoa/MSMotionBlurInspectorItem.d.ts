/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMotionBlurInspectorItem<T = any> extends MSBaseBlurInspectorItem {
    angleTextField<R = MSUpDownTextField>(): R;
    setAngleTextField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    angleAdapter<R = MSMathInspectorValueAdaptor>(): R;
    setAngleAdapter<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    angleSlider<R = NSSlider>(): R;
    setAngleSlider<R = void, P0 = NSSlider>(_v: P0): R;
  }
  namespace classes {
    export interface MSMotionBlurInspectorItem<T = any> extends MSBaseBlurInspectorItem {
      alloc<R = MSMotionBlurInspectorItem>(): R;
      new: <R = MSMotionBlurInspectorItem>() => R;
    }
  }
}

declare const MSMotionBlurInspectorItem: cocoa.classes.MSMotionBlurInspectorItem;
