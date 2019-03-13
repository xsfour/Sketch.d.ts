/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBackgroundBlurInspectorItem<T = any> extends MSBaseBlurInspectorItem {
    saturationAdapter<R = MSMathInspectorValueAdaptor>(): R;
    setSaturationAdapter<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    saturationSlider<R = NSSlider>(): R;
    setSaturationSlider<R = void, P0 = NSSlider>(_v: P0): R;
    saturationField<R = MSUpDownTextField>(): R;
    setSaturationField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
  }
  namespace classes {
    export interface MSBackgroundBlurInspectorItem<T = any> extends MSBaseBlurInspectorItem {
      alloc<R = MSBackgroundBlurInspectorItem>(): R;
      new: <R = MSBackgroundBlurInspectorItem>() => R;
    }
  }
}

declare const MSBackgroundBlurInspectorItem: cocoa.classes.MSBackgroundBlurInspectorItem;
