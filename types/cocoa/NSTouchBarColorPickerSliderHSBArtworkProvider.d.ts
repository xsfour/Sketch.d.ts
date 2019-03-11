/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliderHSBArtworkProvider<T = any> extends cocoa.NSTouchBarColorPickerSliderArtworkProvider {
    representedHSBComponent<R = number>(): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSliderHSBArtworkProvider<T = any> extends cocoa.classes.NSTouchBarColorPickerSliderArtworkProvider {
      alloc<R = NSTouchBarColorPickerSliderHSBArtworkProvider>(): R;
      new: <R = NSTouchBarColorPickerSliderHSBArtworkProvider>() => R;
      brightnessArtworkProviderWithDisplayHue_displaySaturation<R = unknown, P0 = number, P1 = number>(_brightnessArtworkProviderWithDisplayHue: P0, _displaySaturation: P1): R;
      saturationArtworkProviderWithDisplayHue<R = unknown, P0 = number>(_saturationArtworkProviderWithDisplayHue: P0): R;
      hueArtworkProvider<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarColorPickerSliderHSBArtworkProvider: cocoa.classes.NSTouchBarColorPickerSliderHSBArtworkProvider;
