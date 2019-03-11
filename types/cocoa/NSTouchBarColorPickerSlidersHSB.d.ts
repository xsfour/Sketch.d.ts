/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSlidersHSB<T = any> extends cocoa.NSTouchBarColorPickerSliders {
    brightnessSlider<R = unknown>(): R;
    saturationSlider<R = unknown>(): R;
    hueSlider<R = unknown>(): R;
    _alphaArtworkProvider<R = cocoa.NSTouchBarColorPickerSliderArtworkProvider>(): R;
    _brightnessArtworkProvider<R = cocoa.NSTouchBarColorPickerSliderHSBArtworkProvider>(): R;
    _saturationArtworkProvider<R = cocoa.NSTouchBarColorPickerSliderHSBArtworkProvider>(): R;
    _hueArtworkProvider<R = cocoa.NSTouchBarColorPickerSliderHSBArtworkProvider>(): R;
    _displayedAlphaComponent<R = number>(): R;
    _displayedBrightnessComponent<R = number>(): R;
    _displayedSaturationComponent<R = number>(): R;
    _displayedHueComponent<R = number>(): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSlidersHSB<T = any> extends cocoa.classes.NSTouchBarColorPickerSliders {
      alloc<R = NSTouchBarColorPickerSlidersHSB>(): R;
      new: <R = NSTouchBarColorPickerSlidersHSB>() => R;
      keyPathsForValuesAffecting_brightnessArtworkProvider<R = unknown>(): R;
      keyPathsForValuesAffecting_saturationArtworkProvider<R = unknown>(): R;
      keyPathsForValuesAffecting_hueArtworkProvider<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarColorPickerSlidersHSB: cocoa.classes.NSTouchBarColorPickerSlidersHSB;
