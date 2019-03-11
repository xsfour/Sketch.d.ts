/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLegacyDocumentReader<T = any> extends cocoa.MSDocumentReader {
    metadata<R = unknown>(): R;
    documentWasMigrated<R = boolean>(): R;
    UIMetadata<R = unknown>(): R;
    data<R = unknown>(): R;
    checkNeedsMigration<R = boolean, P0 = unknown>(_checkNeedsMigration: P0): R;
    migrateUsingXPC<R = boolean, P0 = unknown>(_migrateUsingXPC: P0): R;
    validateMigration<R = boolean>(): R;
    containsPreviewImage<R = boolean>(): R;
    dealloc<R = void>(): R;
    initWithFileURL<R = unknown, P0 = unknown>(_initWithFileURL: P0): R;
    documentFileState<R = number>(): R;
    fileURL<R = cocoa.NSURL>(): R;
    file<R = cocoa.BCStructuredFile>(): R;
    setFile<R = void, P0 = cocoa.BCStructuredFile>(_v: P0): R;
  }
  namespace classes {
    export interface MSLegacyDocumentReader<T = any> extends cocoa.classes.MSDocumentReader {
      alloc<R = MSLegacyDocumentReader>(): R;
      new: <R = MSLegacyDocumentReader>() => R;
    }
  }
}

declare const MSLegacyDocumentReader: cocoa.classes.MSLegacyDocumentReader;
