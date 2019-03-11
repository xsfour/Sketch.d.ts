/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSketchFileMigratorClient<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    handleXPCError<R = void, P0 = unknown>(_handleXPCError: P0): R;
    waitUntilDoneIfSynchronous<R = void>(): R;
    sendReplyWithError_options<R = void, P0 = unknown, P1 = number>(_sendReplyWithError: P0, _options: P1): R;
    invalidate<R = void>(): R;
    migrateResourcesWithNames_atURL_options_withReply<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = cocoa.CDUnknownBlockType>(_migrateResourcesWithNames: P0, _atURL: P1, _options: P2, _withReply: P3): R;
    migrateDocumentAtURL_intoFolderAtURL_options_withReply<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = cocoa.CDUnknownBlockType>(_migrateDocumentAtURL: P0, _intoFolderAtURL: P1, _options: P2, _withReply: P3): R;
    validateDocumentAtURL_options_withReply<R = void, P0 = unknown, P1 = number, P2 = cocoa.CDUnknownBlockType>(_validateDocumentAtURL: P0, _options: P1, _withReply: P2): R;
    dealloc<R = void>(): R;
    reply<R = cocoa.CDUnknownBlockType>(): R;
    setReply<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    semaphore<R = cocoa.OS_dispatch_semaphore>(): R;
    setSemaphore<R = void, P0 = cocoa.OS_dispatch_semaphore>(_v: P0): R;
    proxy<R = cocoa.BCSketchFileMigrator>(): R;
    setProxy<R = void, P0 = cocoa.BCSketchFileMigrator>(_v: P0): R;
    connection<R = cocoa.NSXPCConnection>(): R;
    setConnection<R = void, P0 = cocoa.NSXPCConnection>(_v: P0): R;
  }
  namespace classes {
    export interface BCSketchFileMigratorClient<T = any> extends cocoa.classes.NSObject {
      alloc<R = BCSketchFileMigratorClient>(): R;
      new: <R = BCSketchFileMigratorClient>() => R;
    }
  }
}

declare const BCSketchFileMigratorClient: cocoa.classes.BCSketchFileMigratorClient;
