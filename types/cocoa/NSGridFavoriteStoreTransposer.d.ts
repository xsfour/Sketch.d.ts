/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGridFavoriteStoreTransposer<T = any> extends NSFavoriteColorsStore, NSFavoriteColorsStoreConcreteSubclassProtocol {
    baseStoreDidChange<R = void, P0 = unknown>(_baseStoreDidChange: P0): R;
    initWithGridStore_numRows_numColumns<R = unknown, P0 = unknown, P1 = number, P2 = number>(_initWithGridStore: P0, _numRows: P1, _numColumns: P2): R;
  }
  namespace classes {
    export interface NSGridFavoriteStoreTransposer<T = any> extends NSFavoriteColorsStore, NSFavoriteColorsStoreConcreteSubclassProtocol {
      alloc<R = NSGridFavoriteStoreTransposer>(): R;
      new: <R = NSGridFavoriteStoreTransposer>() => R;
    }
  }
}

declare const NSGridFavoriteStoreTransposer: cocoa.classes.NSGridFavoriteStoreTransposer;
