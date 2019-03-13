/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliderCMYKArtworkProvider<T = any> extends NSTouchBarColorPickerSliderArtworkProvider {
    initWithComponent<R = unknown, P0 = number>(_initWithComponent: P0): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSliderCMYKArtworkProvider<T = any> extends NSTouchBarColorPickerSliderArtworkProvider {
      alloc<R = NSTouchBarColorPickerSliderCMYKArtworkProvider>(): R;
      new: <R = NSTouchBarColorPickerSliderCMYKArtworkProvider>() => R;
      blackArtworkProvider<R = unknown>(): R;
      yellowArtworkProvider<R = unknown>(): R;
      magentaArtworkProvider<R = unknown>(): R;
      cyanArtworkProvider<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarColorPickerSliderCMYKArtworkProvider: cocoa.classes.NSTouchBarColorPickerSliderCMYKArtworkProvider;
