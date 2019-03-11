/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPanelFavoriteSwatch<T = any> extends cocoa.NSCollectionViewItem, cocoa._NSItemFocusingCollectionViewItemProtocol {
    performClick<R = void, P0 = unknown>(_performClick: P0): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionDescription<R = unknown, P0 = unknown>(_accessibilityActionDescription: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
    setSelected<R = void, P0 = boolean>(_setSelected: P0): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSColorPanelFavoriteSwatch<T = any> extends cocoa.classes.NSCollectionViewItem, cocoa.classes._NSItemFocusingCollectionViewItemProtocol {
      alloc<R = NSColorPanelFavoriteSwatch>(): R;
      new: <R = NSColorPanelFavoriteSwatch>() => R;
    }
  }
}

declare const NSColorPanelFavoriteSwatch: cocoa.classes.NSColorPanelFavoriteSwatch;
