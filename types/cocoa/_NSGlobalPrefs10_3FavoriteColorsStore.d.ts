/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSGlobalPrefs10_3FavoriteColorsStore<T = any> extends cocoa.NSFavoriteColorsStore, cocoa.NSFavoriteColorsStoreConcreteSubclassProtocol {
    postDistributedNotification<R = void>(): R;
    remoteColorsDidChange<R = void, P0 = unknown>(_remoteColorsDidChange: P0): R;
    initWithPreferenceKey_domain<R = unknown, P0 = unknown, P1 = unknown>(_initWithPreferenceKey: P0, _domain: P1): R;
  }
  namespace classes {
    export interface _NSGlobalPrefs10_3FavoriteColorsStore<T = any> extends cocoa.classes.NSFavoriteColorsStore, cocoa.classes.NSFavoriteColorsStoreConcreteSubclassProtocol {
      alloc<R = _NSGlobalPrefs10_3FavoriteColorsStore>(): R;
      new: <R = _NSGlobalPrefs10_3FavoriteColorsStore>() => R;
    }
  }
}
