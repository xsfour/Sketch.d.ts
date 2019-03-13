/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPanelFavoriteSwatchView<T = any> extends NSView, NSCollectionViewElementProtocol {
    needsPanelToBecomeKey<R = boolean>(): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSColorPanelFavoriteSwatchView<T = any> extends NSView, NSCollectionViewElementProtocol {
      alloc<R = NSColorPanelFavoriteSwatchView>(): R;
      new: <R = NSColorPanelFavoriteSwatchView>() => R;
    }
  }
}

declare const NSColorPanelFavoriteSwatchView: cocoa.classes.NSColorPanelFavoriteSwatchView;
