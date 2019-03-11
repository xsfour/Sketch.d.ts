/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSketchFileMigratorProtocol<T = any> extends cocoa.NSObjectProtocol {
    migrateResourcesNamed_inFolderAtBookmark_withReply<R = void, P0 = cocoa.NSArray, P1 = cocoa.NSData, P2 = cocoa.CDUnknownBlockType>(_migrateResourcesNamed: P0, _inFolderAtBookmark: P1, _withReply: P2): R;
    migrateDocumentAtBookmark_intoFolderAtBookmark_withReply<R = void, P0 = cocoa.NSData, P1 = cocoa.NSData, P2 = cocoa.CDUnknownBlockType>(_migrateDocumentAtBookmark: P0, _intoFolderAtBookmark: P1, _withReply: P2): R;
    validateDocumentAtBookmark_withReply<R = void, P0 = cocoa.NSData, P1 = cocoa.CDUnknownBlockType>(_validateDocumentAtBookmark: P0, _withReply: P1): R;
  }
  namespace classes {
    export interface BCSketchFileMigratorProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const BCSketchFileMigratorProtocol: cocoa.classes.BCSketchFileMigratorProtocol;
