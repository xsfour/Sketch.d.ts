/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutablePersistentAssetCollection<T = any> extends cocoa.MSImmutableAssetCollection {}
  namespace classes {
    export interface MSImmutablePersistentAssetCollection<T = any> extends cocoa.classes.MSImmutableAssetCollection {
      alloc<R = MSImmutablePersistentAssetCollection>(): R;
      new: <R = MSImmutablePersistentAssetCollection>() => R;
    }
  }
}

declare const MSImmutablePersistentAssetCollection: cocoa.classes.MSImmutablePersistentAssetCollection;
