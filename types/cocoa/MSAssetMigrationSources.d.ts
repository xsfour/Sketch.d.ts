/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetMigrationSources<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    imageURL<R = NSURL>(): R;
    setImageURL<R = void, P0 = NSURL>(_v: P0): R;
    gradientArchive<R = MSVersionedArchive>(): R;
    setGradientArchive<R = void, P0 = MSVersionedArchive>(_v: P0): R;
    colorArchive<R = MSVersionedArchive>(): R;
    setColorArchive<R = void, P0 = MSVersionedArchive>(_v: P0): R;
  }
  namespace classes {
    export interface MSAssetMigrationSources<T = any> extends NSObject {
      alloc<R = MSAssetMigrationSources>(): R;
      new: <R = MSAssetMigrationSources>() => R;
    }
  }
}

declare const MSAssetMigrationSources: cocoa.classes.MSAssetMigrationSources;
