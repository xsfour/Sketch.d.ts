/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentWriter<T = any> extends NSObject, MSDocumentPreviewGenerationProtocol {
    cxx_destruct<R = void>(): R;
    writeDocumentData_isAutosave_error<R = boolean, P0 = unknown, P1 = boolean, P2 = unknown>(_writeDocumentData: P0, _isAutosave: P1, _error: P2): R;
    initWithFileURL<R = unknown, P0 = unknown>(_initWithFileURL: P0): R;
    findLibraryPreviewArtboardForDocument_outPage<R = unknown, P0 = unknown, P1 = unknown>(_findLibraryPreviewArtboardForDocument: P0, _outPage: P1): R;
    previewImageForDocument_page_rect<R = unknown, P0 = unknown, P1 = unknown, P2 = CGRect>(_previewImageForDocument: P0, _page: P1, _rect: P2): R;
    libraryPreview<R = NSData>(): R;
    setLibraryPreview<R = void, P0 = NSData>(_v: P0): R;
    previewData<R = NSData>(): R;
    setPreviewData<R = void, P0 = NSData>(_v: P0): R;
    archiver<R = MSJSONZippedArchiver>(): R;
    setArchiver<R = void, P0 = MSJSONZippedArchiver>(_v: P0): R;
    previewGenerationBlock<R = CDUnknownBlockType>(): R;
    setPreviewGenerationBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    UIMetadata<R = NSDictionary>(): R;
    setUIMetadata<R = void, P0 = NSDictionary>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSDocumentWriter<T = any> extends NSObject, MSDocumentPreviewGenerationProtocol {
      alloc<R = MSDocumentWriter>(): R;
      new: <R = MSDocumentWriter>() => R;
      metadataForNewFile<R = unknown>(): R;
    }
  }
}

declare const MSDocumentWriter: cocoa.classes.MSDocumentWriter;
