/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerFavorites<T = any> extends cocoa.NSControl, cocoa.NSCollectionViewDelegateProtocol, cocoa.NSCollectionViewDataSourceProtocol, cocoa.NSTouchBarColorPickerViewProtocol {
    _favoritesDidChange<R = void, P0 = unknown>(__favoritesDidChange: P0): R;
    setSavedColors<R = void, P0 = unknown>(_setSavedColors: P0): R;
    savedColors<R = unknown>(): R;
    allowsAlpha<R = boolean>(): R;
    setAllowsAlpha<R = void, P0 = boolean>(_v: P0): R;
    currentColor<R = cocoa.NSColor>(): R;
    setCurrentColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    allowedColorSpaces<R = cocoa.NSArray>(): R;
    setAllowedColorSpaces<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    presentedColors<R = cocoa.NSArray>(): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerFavorites<T = any> extends cocoa.classes.NSControl, cocoa.classes.NSCollectionViewDelegateProtocol, cocoa.classes.NSCollectionViewDataSourceProtocol, cocoa.classes.NSTouchBarColorPickerViewProtocol {
      alloc<R = NSTouchBarColorPickerFavorites>(): R;
      new: <R = NSTouchBarColorPickerFavorites>() => R;
    }
  }
}

declare const NSTouchBarColorPickerFavorites: cocoa.classes.NSTouchBarColorPickerFavorites;
