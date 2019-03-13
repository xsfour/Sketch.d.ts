/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteItem<T = any> extends NSCollectionViewItem {
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionNames<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPaletteItem<T = any> extends NSCollectionViewItem {
      alloc<R = NSTouchBarCustomizationPaletteItem>(): R;
      new: <R = NSTouchBarCustomizationPaletteItem>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteItem: cocoa.classes.NSTouchBarCustomizationPaletteItem;
