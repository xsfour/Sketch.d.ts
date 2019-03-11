/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBackgroundBlurInspectorItem<T = any> extends cocoa.MSBaseBlurInspectorItem {
    saturationAdapter<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setSaturationAdapter<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    saturationSlider<R = cocoa.NSSlider>(): R;
    setSaturationSlider<R = void, P0 = cocoa.NSSlider>(_v: P0): R;
    saturationField<R = cocoa.MSUpDownTextField>(): R;
    setSaturationField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
  }
  namespace classes {
    export interface MSBackgroundBlurInspectorItem<T = any> extends cocoa.classes.MSBaseBlurInspectorItem {
      alloc<R = MSBackgroundBlurInspectorItem>(): R;
      new: <R = MSBackgroundBlurInspectorItem>() => R;
    }
  }
}

declare const MSBackgroundBlurInspectorItem: cocoa.classes.MSBackgroundBlurInspectorItem;
