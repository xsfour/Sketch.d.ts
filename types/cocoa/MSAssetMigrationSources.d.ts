/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetMigrationSources<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    imageURL<R = cocoa.NSURL>(): R;
    setImageURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    gradientArchive<R = cocoa.MSVersionedArchive>(): R;
    setGradientArchive<R = void, P0 = cocoa.MSVersionedArchive>(_v: P0): R;
    colorArchive<R = cocoa.MSVersionedArchive>(): R;
    setColorArchive<R = void, P0 = cocoa.MSVersionedArchive>(_v: P0): R;
  }
  namespace classes {
    export interface MSAssetMigrationSources<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSAssetMigrationSources>(): R;
      new: <R = MSAssetMigrationSources>() => R;
    }
  }
}

declare const MSAssetMigrationSources: cocoa.classes.MSAssetMigrationSources;
