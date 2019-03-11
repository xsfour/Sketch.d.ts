/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentWriter<T = any> extends cocoa.NSObject, cocoa.MSDocumentPreviewGenerationProtocol {
    cxx_destruct<R = void>(): R;
    writeDocumentData_isAutosave_error<R = boolean, P0 = unknown, P1 = boolean, P2 = unknown>(_writeDocumentData: P0, _isAutosave: P1, _error: P2): R;
    initWithFileURL<R = unknown, P0 = unknown>(_initWithFileURL: P0): R;
    findLibraryPreviewArtboardForDocument_outPage<R = unknown, P0 = unknown, P1 = unknown>(_findLibraryPreviewArtboardForDocument: P0, _outPage: P1): R;
    previewImageForDocument_page_rect<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CGRect>(_previewImageForDocument: P0, _page: P1, _rect: P2): R;
    libraryPreview<R = cocoa.NSData>(): R;
    setLibraryPreview<R = void, P0 = cocoa.NSData>(_v: P0): R;
    previewData<R = cocoa.NSData>(): R;
    setPreviewData<R = void, P0 = cocoa.NSData>(_v: P0): R;
    archiver<R = cocoa.MSJSONZippedArchiver>(): R;
    setArchiver<R = void, P0 = cocoa.MSJSONZippedArchiver>(_v: P0): R;
    previewGenerationBlock<R = cocoa.CDUnknownBlockType>(): R;
    setPreviewGenerationBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    UIMetadata<R = cocoa.NSDictionary>(): R;
    setUIMetadata<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSDocumentWriter<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSDocumentPreviewGenerationProtocol {
      alloc<R = MSDocumentWriter>(): R;
      new: <R = MSDocumentWriter>() => R;
      metadataForNewFile<R = unknown>(): R;
    }
  }
}

declare const MSDocumentWriter: cocoa.classes.MSDocumentWriter;
