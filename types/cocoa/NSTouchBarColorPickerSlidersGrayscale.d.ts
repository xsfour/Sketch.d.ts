/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSlidersGrayscale<T = any> extends NSTouchBarColorPickerSliders {
    _alphaArtworkProvider<R = NSTouchBarColorPickerSliderArtworkProvider>(): R;
    _grayscaleArtworkProvider<R = NSTouchBarColorPickerSliderGrayscaleArtworkProvider>(): R;
    _displayedAlphaComponent<R = number>(): R;
    _displayedGrayscaleComponent<R = number>(): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSlidersGrayscale<T = any> extends NSTouchBarColorPickerSliders {
      alloc<R = NSTouchBarColorPickerSlidersGrayscale>(): R;
      new: <R = NSTouchBarColorPickerSlidersGrayscale>() => R;
    }
  }
}

declare const NSTouchBarColorPickerSlidersGrayscale: cocoa.classes.NSTouchBarColorPickerSlidersGrayscale;
