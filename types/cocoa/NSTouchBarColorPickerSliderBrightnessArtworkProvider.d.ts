/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliderBrightnessArtworkProvider<T = any> extends cocoa.NSTouchBarColorPickerSliderHSBArtworkProvider {
    representedHSBComponent<R = number>(): R;
    initWithDisplayHue_displaySaturation<R = unknown, P0 = number, P1 = number>(_initWithDisplayHue: P0, _displaySaturation: P1): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSliderBrightnessArtworkProvider<T = any> extends cocoa.classes.NSTouchBarColorPickerSliderHSBArtworkProvider {
      alloc<R = NSTouchBarColorPickerSliderBrightnessArtworkProvider>(): R;
      new: <R = NSTouchBarColorPickerSliderBrightnessArtworkProvider>() => R;
    }
  }
}

declare const NSTouchBarColorPickerSliderBrightnessArtworkProvider: cocoa.classes.NSTouchBarColorPickerSliderBrightnessArtworkProvider;
