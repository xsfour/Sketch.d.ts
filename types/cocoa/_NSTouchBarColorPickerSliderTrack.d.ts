/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarColorPickerSliderTrack<T = any> extends NSView {
    wantsLayer<R = boolean>(): R;
    _autounbinder<R = unknown>(): R;
    allowedColorSpaces<R = NSArray>(): R;
    setAllowedColorSpaces<R = void, P0 = NSArray>(_v: P0): R;
    valueIsFlipped<R = boolean>(): R;
    setValueIsFlipped<R = void, P0 = boolean>(_v: P0): R;
    artworkProvider<R = NSTouchBarColorPickerSliderArtworkProvider>(): R;
    setArtworkProvider<R = void, P0 = NSTouchBarColorPickerSliderArtworkProvider>(_v: P0): R;
    displayedColor<R = NSColor>(): R;
    setDisplayedColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTouchBarColorPickerSliderTrack<T = any> extends NSView {
      alloc<R = _NSTouchBarColorPickerSliderTrack>(): R;
      new: <R = _NSTouchBarColorPickerSliderTrack>() => R;
    }
  }
}
