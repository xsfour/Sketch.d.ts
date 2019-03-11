/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteInactiveDisplayOverlayWindow<T = any> extends cocoa.NSWindow {
    animateOut<R = void>(): R;
    animateIn<R = void>(): R;
    initWithScreen<R = unknown, P0 = unknown>(_initWithScreen: P0): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPaletteInactiveDisplayOverlayWindow<T = any> extends cocoa.classes.NSWindow {
      alloc<R = NSTouchBarCustomizationPaletteInactiveDisplayOverlayWindow>(): R;
      new: <R = NSTouchBarCustomizationPaletteInactiveDisplayOverlayWindow>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteInactiveDisplayOverlayWindow: cocoa.classes.NSTouchBarCustomizationPaletteInactiveDisplayOverlayWindow;
