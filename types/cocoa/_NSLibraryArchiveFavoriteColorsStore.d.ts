/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLibraryArchiveFavoriteColorsStore<T = any> extends NSFavoriteColorsStore, NSFavoriteColorsStoreConcreteSubclassProtocol {
    postDistributedNotification<R = void>(): R;
    remoteColorsDidChange<R = void, P0 = unknown>(_remoteColorsDidChange: P0): R;
    initWithFileURL<R = unknown, P0 = unknown>(_initWithFileURL: P0): R;
  }
  namespace classes {
    export interface _NSLibraryArchiveFavoriteColorsStore<T = any> extends NSFavoriteColorsStore, NSFavoriteColorsStoreConcreteSubclassProtocol {
      alloc<R = _NSLibraryArchiveFavoriteColorsStore>(): R;
      new: <R = _NSLibraryArchiveFavoriteColorsStore>() => R;
    }
  }
}
