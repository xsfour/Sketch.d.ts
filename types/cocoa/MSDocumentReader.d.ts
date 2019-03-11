/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentReader<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    previewImageWithMaximumSize<R = unknown, P0 = cocoa.CGSize>(_previewImageWithMaximumSize: P0): R;
    readImmutableDataWithCorruptionDetected_error<R = unknown, P0 = string, P1 = unknown>(_readImmutableDataWithCorruptionDetected: P0, _error: P1): R;
    validate<R = number>(): R;
    open<R = boolean, P0 = unknown>(_open: P0): R;
    repair<R = void>(): R;
    containsLibraryPreviewImage<R = boolean>(): R;
    readDataWithCorruptionDetected_error<R = unknown, P0 = string, P1 = unknown>(_readDataWithCorruptionDetected: P0, _error: P1): R;
    error<R = cocoa.NSError>(): R;
    setError<R = void, P0 = cocoa.NSError>(_v: P0): R;
    libraryPreviewImage<R = cocoa.NSImage>(): R;
    previewImage<R = cocoa.NSImage>(): R;
    metadata<R = cocoa.NSDictionary>(): R;
    UIMetadata<R = cocoa.NSDictionary>(): R;
    compatibilityVersion<R = number>(): R;
    version<R = number>(): R;
    missingFonts<R = cocoa.NSArray>(): R;
    containsPreviewImage<R = boolean>(): R;
    documentWasMigrated<R = boolean>(): R;
  }
  namespace classes {
    export interface MSDocumentReader<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSDocumentReader>(): R;
      new: <R = MSDocumentReader>() => R;
      readerForDocumentAtURL<R = unknown, P0 = unknown>(_readerForDocumentAtURL: P0): R;
      first4bytesOfFileAtURL<R = number, P0 = unknown>(_first4bytesOfFileAtURL: P0): R;
    }
  }
}

declare const MSDocumentReader: cocoa.classes.MSDocumentReader;
