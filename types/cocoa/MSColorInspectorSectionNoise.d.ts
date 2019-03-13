/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSectionNoise<T = any> extends MSColorInspectorSection {
    refreshNoiseIntensityTouchBarSlider<R = void>(): R;
    adjustNoiseIntensity<R = void, P0 = unknown>(_adjustNoiseIntensity: P0): R;
  }
  namespace classes {
    export interface MSColorInspectorSectionNoise<T = any> extends MSColorInspectorSection {
      alloc<R = MSColorInspectorSectionNoise>(): R;
      new: <R = MSColorInspectorSectionNoise>() => R;
    }
  }
}

declare const MSColorInspectorSectionNoise: cocoa.classes.MSColorInspectorSectionNoise;
