/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteViewController<T = any> extends NSViewController, NSTouchBarCustomizationPaletteLayoutDelegateProtocol, NSCollectionViewDataSourceProtocol {
    cxx_destruct<R = void>(): R;
    dragImageForItem<R = unknown, P0 = unknown>(_dragImageForItem: P0): R;
    _visibleBarPresets<R = unknown>(): R;
    _visiblePaletteBarItems<R = unknown>(): R;
    _discardCachedVisiblePaletteBarItems<R = void>(): R;
    itemTree<R = unknown>(): R;
    reloadData<R = void>(): R;
    visualCenterXOffset<R = number>(): R;
    setVisualCenterXOffset<R = void, P0 = number>(_v: P0): R;
    scaleFactor<R = number>(): R;
    setScaleFactor<R = void, P0 = number>(_v: P0): R;
    presetRepresentedObjectClass<R = unknown>(): R;
    setPresetRepresentedObjectClass<R = void, P0 = unknown>(_v: P0): R;
    presetScale<R = number>(): R;
    setPresetScale<R = void, P0 = number>(_v: P0): R;
    presetSize<R = CGSize>(): R;
    setPresetSize<R = void, P0 = CGSize>(_v: P0): R;
    delegate<R = NSTouchBarCustomizationPaletteViewControllerDelegate>(): R;
    setDelegate<R = void, P0 = NSTouchBarCustomizationPaletteViewControllerDelegate>(_v: P0): R;
    showNonCustomizableItems<R = boolean>(): R;
    setShowNonCustomizableItems<R = void, P0 = boolean>(_v: P0): R;
    touchBars<R = NSArray>(): R;
    setTouchBars<R = void, P0 = NSArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPaletteViewController<T = any> extends NSViewController, NSTouchBarCustomizationPaletteLayoutDelegateProtocol, NSCollectionViewDataSourceProtocol {
      alloc<R = NSTouchBarCustomizationPaletteViewController>(): R;
      new: <R = NSTouchBarCustomizationPaletteViewController>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteViewController: cocoa.classes.NSTouchBarCustomizationPaletteViewController;
