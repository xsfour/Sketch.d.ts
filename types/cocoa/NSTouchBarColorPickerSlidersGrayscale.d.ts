/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSlidersGrayscale<T = any> extends cocoa.NSTouchBarColorPickerSliders {
    _alphaArtworkProvider<R = cocoa.NSTouchBarColorPickerSliderArtworkProvider>(): R;
    _grayscaleArtworkProvider<R = cocoa.NSTouchBarColorPickerSliderGrayscaleArtworkProvider>(): R;
    _displayedAlphaComponent<R = number>(): R;
    _displayedGrayscaleComponent<R = number>(): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSlidersGrayscale<T = any> extends cocoa.classes.NSTouchBarColorPickerSliders {
      alloc<R = NSTouchBarColorPickerSlidersGrayscale>(): R;
      new: <R = NSTouchBarColorPickerSlidersGrayscale>() => R;
    }
  }
}

declare const NSTouchBarColorPickerSlidersGrayscale: cocoa.classes.NSTouchBarColorPickerSlidersGrayscale;
