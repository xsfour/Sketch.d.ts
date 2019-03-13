/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliderSaturationArtworkProvider<T = any> extends NSTouchBarColorPickerSliderHSBArtworkProvider {
    representedHSBComponent<R = number>(): R;
    initWithDisplayHue<R = unknown, P0 = number>(_initWithDisplayHue: P0): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSliderSaturationArtworkProvider<T = any> extends NSTouchBarColorPickerSliderHSBArtworkProvider {
      alloc<R = NSTouchBarColorPickerSliderSaturationArtworkProvider>(): R;
      new: <R = NSTouchBarColorPickerSliderSaturationArtworkProvider>() => R;
    }
  }
}

declare const NSTouchBarColorPickerSliderSaturationArtworkProvider: cocoa.classes.NSTouchBarColorPickerSliderSaturationArtworkProvider;
