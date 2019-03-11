/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSlidersCMYK<T = any> extends cocoa.NSTouchBarColorPickerSliders {
    _alphaArtworkProvider<R = cocoa.NSTouchBarColorPickerSliderArtworkProvider>(): R;
    _blackArtworkProvider<R = cocoa.NSTouchBarColorPickerSliderCMYKArtworkProvider>(): R;
    _yellowArtworkProvider<R = cocoa.NSTouchBarColorPickerSliderCMYKArtworkProvider>(): R;
    _magentaArtworkProvider<R = cocoa.NSTouchBarColorPickerSliderCMYKArtworkProvider>(): R;
    _cyanArtworkProvider<R = cocoa.NSTouchBarColorPickerSliderCMYKArtworkProvider>(): R;
    _displayedAlphaComponent<R = number>(): R;
    _displayedBlackComponent<R = number>(): R;
    _displayedYellowComponent<R = number>(): R;
    _displayedMagentaComponent<R = number>(): R;
    _displayedCyanComponent<R = number>(): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSlidersCMYK<T = any> extends cocoa.classes.NSTouchBarColorPickerSliders {
      alloc<R = NSTouchBarColorPickerSlidersCMYK>(): R;
      new: <R = NSTouchBarColorPickerSlidersCMYK>() => R;
    }
  }
}

declare const NSTouchBarColorPickerSlidersCMYK: cocoa.classes.NSTouchBarColorPickerSlidersCMYK;
