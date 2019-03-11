/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPanelFavoriteSwatchView<T = any> extends cocoa.NSView, cocoa.NSCollectionViewElementProtocol {
    needsPanelToBecomeKey<R = boolean>(): R;
    color<R = cocoa.NSColor>(): R;
    setColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSColorPanelFavoriteSwatchView<T = any> extends cocoa.classes.NSView, cocoa.classes.NSCollectionViewElementProtocol {
      alloc<R = NSColorPanelFavoriteSwatchView>(): R;
      new: <R = NSColorPanelFavoriteSwatchView>() => R;
    }
  }
}

declare const NSColorPanelFavoriteSwatchView: cocoa.classes.NSColorPanelFavoriteSwatchView;
