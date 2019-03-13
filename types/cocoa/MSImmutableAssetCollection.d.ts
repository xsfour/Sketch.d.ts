/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableAssetCollection<T = any> extends _MSImmutableAssetCollection {
    migratePropertiesFromV74OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV74OrEarlierWithUnarchiver: P0): R;
  }
  namespace classes {
    export interface MSImmutableAssetCollection<T = any> extends _MSImmutableAssetCollection {
      alloc<R = MSImmutableAssetCollection>(): R;
      new: <R = MSImmutableAssetCollection>() => R;
    }
  }
}

declare const MSImmutableAssetCollection: cocoa.classes.MSImmutableAssetCollection;
