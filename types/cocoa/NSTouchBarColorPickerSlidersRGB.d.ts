/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSlidersRGB<T = any> extends cocoa.NSTouchBarColorPickerSliders {
    _updateEntryMode<R = void>(): R;
    entryMode<R = number>(): R;
    setEntryMode<R = void, P0 = number>(_v: P0): R;
    _alphaArtworkProvider<R = cocoa.NSTouchBarColorPickerSliderArtworkProvider>(): R;
    _blueArtworkProvider<R = cocoa.NSTouchBarColorPickerSliderRGBArtworkProvider>(): R;
    _greenArtworkProvider<R = cocoa.NSTouchBarColorPickerSliderRGBArtworkProvider>(): R;
    _redArtworkProvider<R = cocoa.NSTouchBarColorPickerSliderRGBArtworkProvider>(): R;
    _displayedAlphaComponent<R = number>(): R;
    _displayedBlueComponent<R = number>(): R;
    _displayedGreenComponent<R = number>(): R;
    _displayedRedComponent<R = number>(): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSlidersRGB<T = any> extends cocoa.classes.NSTouchBarColorPickerSliders {
      alloc<R = NSTouchBarColorPickerSlidersRGB>(): R;
      new: <R = NSTouchBarColorPickerSlidersRGB>() => R;
      keyPathsForValuesAffecting_blueArtworkProvider<R = unknown>(): R;
      keyPathsForValuesAffecting_greenArtworkProvider<R = unknown>(): R;
      keyPathsForValuesAffecting_redArtworkProvider<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarColorPickerSlidersRGB: cocoa.classes.NSTouchBarColorPickerSlidersRGB;
