/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliderHueArtworkProvider<T = any> extends NSTouchBarColorPickerSliderHSBArtworkProvider {
    representedHSBComponent<R = number>(): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSliderHueArtworkProvider<T = any> extends NSTouchBarColorPickerSliderHSBArtworkProvider {
      alloc<R = NSTouchBarColorPickerSliderHueArtworkProvider>(): R;
      new: <R = NSTouchBarColorPickerSliderHueArtworkProvider>() => R;
    }
  }
}

declare const NSTouchBarColorPickerSliderHueArtworkProvider: cocoa.classes.NSTouchBarColorPickerSliderHueArtworkProvider;
