/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePromiseReceiver<T = any> extends cocoa.NSObject, cocoa.NSPasteboardReadingProtocol {
    draggingCancelled<R = void, P0 = unknown>(_draggingCancelled: P0): R;
    draggingEnded<R = void, P0 = unknown>(_draggingEnded: P0): R;
    receivePromisedFilesAtDestination_options_operationQueue_reader<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(_receivePromisedFilesAtDestination: P0, _options: P1, _operationQueue: P2, _reader: P3): R;
    registerDestinationLocation_options_operationQueue_reader<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(_registerDestinationLocation: P0, _options: P1, _operationQueue: P2, _reader: P3): R;
    registerDesinationLocation_options_operationQueu_reader<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(_registerDesinationLocation: P0, _options: P1, _operationQueu: P2, _reader: P3): R;
    dealloc<R = void>(): R;
    providerIsUsingFileCoordination<R = boolean>(): R;
    _setPasteboardItem<R = void, P0 = unknown>(__setPasteboardItem: P0): R;
    _setPasteboard<R = void, P0 = unknown>(__setPasteboard: P0): R;
    alternateFileTypes<R = cocoa.NSArray>(): R;
    fileNames<R = cocoa.NSArray>(): R;
    fileTypes<R = cocoa.NSArray>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSFilePromiseReceiver<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSPasteboardReadingProtocol {
      alloc<R = NSFilePromiseReceiver>(): R;
      new: <R = NSFilePromiseReceiver>() => R;
      acceptableDragTypes<R = unknown>(): R;
      readableDraggedTypes<R = unknown>(): R;
    }
  }
}

declare const NSFilePromiseReceiver: cocoa.classes.NSFilePromiseReceiver;
