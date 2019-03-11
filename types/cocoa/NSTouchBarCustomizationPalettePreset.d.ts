/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPalettePreset<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    cleanUpPaletteViewAfterSnapshot<R = void, P0 = unknown>(_cleanUpPaletteViewAfterSnapshot: P0): R;
    makePaletteViewForSnapshot<R = unknown>(): R;
    maxSize<R = cocoa.CGSize>(): R;
    minSize<R = cocoa.CGSize>(): R;
    dealloc<R = void>(): R;
    visualCenterXOffset<R = number>(): R;
    setVisualCenterXOffset<R = void, P0 = number>(_v: P0): R;
    representedItemTree<R = cocoa.NSTouchBarItemTree>(): R;
    presetSnapshot<R = cocoa.NSImage>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPalettePreset<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSTouchBarCustomizationPalettePreset>(): R;
      new: <R = NSTouchBarCustomizationPalettePreset>() => R;
      presetForItemTree_inBarWithSize<R = unknown, P0 = unknown, P1 = cocoa.CGSize>(_presetForItemTree: P0, _inBarWithSize: P1): R;
    }
  }
}

declare const NSTouchBarCustomizationPalettePreset: cocoa.classes.NSTouchBarCustomizationPalettePreset;
