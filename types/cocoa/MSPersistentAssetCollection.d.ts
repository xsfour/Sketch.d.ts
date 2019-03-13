/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPersistentAssetCollection<T = any> extends MSAssetCollection {
    applyDefaultExportPresetsIfNeeded<R = void>(): R;
    resourceNeedingMigration<R = unknown>(): R;
    cleanupAfterTesting<R = void>(): R;
    save<R = void>(): R;
    archive<R = MSVersionedArchive>(): R;
    setArchive<R = void, P0 = MSVersionedArchive>(_v: P0): R;
  }
  namespace classes {
    export interface MSPersistentAssetCollection<T = any> extends MSAssetCollection {
      alloc<R = MSPersistentAssetCollection>(): R;
      new: <R = MSPersistentAssetCollection>() => R;
      defaultExportPresets<R = unknown>(): R;
      assetCollectionWithName<R = unknown, P0 = unknown>(_assetCollectionWithName: P0): R;
      assetCollectionByMigratingPresetsFromSources<R = unknown, P0 = unknown>(_assetCollectionByMigratingPresetsFromSources: P0): R;
      defaultMigrationArchiveForPresetNamed<R = unknown, P0 = unknown>(_defaultMigrationArchiveForPresetNamed: P0): R;
      defaultMigrationSources<R = unknown>(): R;
    }
  }
}

declare const MSPersistentAssetCollection: cocoa.classes.MSPersistentAssetCollection;
