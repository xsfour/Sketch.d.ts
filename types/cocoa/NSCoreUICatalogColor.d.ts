/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCoreUICatalogColor<T = any> extends cocoa.NSDynamicNamedColor {
    resolvedColor<R = unknown>(): R;
    _bestMatchingDisplayGamutFor<R = number, P0 = unknown>(__bestMatchingDisplayGamutFor: P0): R;
    initWithCatalogName_colorName_bundle<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithCatalogName: P0, _colorName: P1, _bundle: P2): R;
    bundle<R = cocoa.NSBundle>(): R;
    setBundle<R = void, P0 = cocoa.NSBundle>(_v: P0): R;
  }
  namespace classes {
    export interface NSCoreUICatalogColor<T = any> extends cocoa.classes.NSDynamicNamedColor {
      alloc<R = NSCoreUICatalogColor>(): R;
      new: <R = NSCoreUICatalogColor>() => R;
      _bundleFromCatalogName<R = unknown, P0 = unknown>(__bundleFromCatalogName: P0): R;
      _catalogNameFromBundle<R = unknown, P0 = unknown>(__catalogNameFromBundle: P0): R;
    }
  }
}

declare const NSCoreUICatalogColor: cocoa.classes.NSCoreUICatalogColor;
