/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarColorPickerSliderTrack<T = any> extends cocoa.NSView {
    wantsLayer<R = boolean>(): R;
    _autounbinder<R = unknown>(): R;
    allowedColorSpaces<R = cocoa.NSArray>(): R;
    setAllowedColorSpaces<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    valueIsFlipped<R = boolean>(): R;
    setValueIsFlipped<R = void, P0 = boolean>(_v: P0): R;
    artworkProvider<R = cocoa.NSTouchBarColorPickerSliderArtworkProvider>(): R;
    setArtworkProvider<R = void, P0 = cocoa.NSTouchBarColorPickerSliderArtworkProvider>(_v: P0): R;
    displayedColor<R = cocoa.NSColor>(): R;
    setDisplayedColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTouchBarColorPickerSliderTrack<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSTouchBarColorPickerSliderTrack>(): R;
      new: <R = _NSTouchBarColorPickerSliderTrack>() => R;
    }
  }
}
