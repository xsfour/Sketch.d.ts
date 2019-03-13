/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutablePersistentAssetCollection<T = any> extends MSImmutableAssetCollection {}
  namespace classes {
    export interface MSImmutablePersistentAssetCollection<T = any> extends MSImmutableAssetCollection {
      alloc<R = MSImmutablePersistentAssetCollection>(): R;
      new: <R = MSImmutablePersistentAssetCollection>() => R;
    }
  }
}

declare const MSImmutablePersistentAssetCollection: cocoa.classes.MSImmutablePersistentAssetCollection;
