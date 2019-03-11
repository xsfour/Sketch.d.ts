/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePromiseProvider<T = any> extends cocoa.NSObject, cocoa.NSFileProviderProtocol, cocoa._NSPasteboardPromiseProviderAgencyProtocol, cocoa.NSPasteboardWritingProtocol {
    cxx_destruct<R = void>(): R;
    _setDestinationURL<R = void, P0 = unknown>(__setDestinationURL: P0): R;
    _destinationURL<R = unknown>(): R;
    _cooridinatedlyWritePromiseToURL_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(__cooridinatedlyWritePromiseToURL: P0, _completionHandler: P1): R;
    draggingCancelled<R = void, P0 = unknown>(_draggingCancelled: P0): R;
    draggingEnded<R = void, P0 = unknown>(_draggingEnded: P0): R;
    pasteboardFinishedWithDataProvider<R = void, P0 = unknown>(_pasteboardFinishedWithDataProvider: P0): R;
    pasteboard_item_provideDataForType<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_pasteboard: P0, _item: P1, _provideDataForType: P2): R;
    _fileNameForType<R = unknown, P0 = unknown>(__fileNameForType: P0): R;
    _cancel<R = void>(): R;
    setDataProvider_forTypes<R = boolean, P0 = unknown, P1 = unknown>(_setDataProvider: P0, _forTypes: P1): R;
    setPropertyList_forType<R = boolean, P0 = unknown, P1 = unknown>(_setPropertyList: P0, _forType: P1): R;
    setString_forType<R = boolean, P0 = unknown, P1 = unknown>(_setString: P0, _forType: P1): R;
    setData_forType<R = boolean, P0 = unknown, P1 = unknown>(_setData: P0, _forType: P1): R;
    dealloc<R = void>(): R;
    initWithFileType_delegate<R = unknown, P0 = unknown, P1 = unknown>(_initWithFileType: P0, _delegate: P1): R;
    private<R = cocoa._NSFilePromiseProviderPrivate>(): R;
    dragggingSequenceNumber<R = number>(): R;
    setDragggingSequenceNumber<R = void, P0 = number>(_v: P0): R;
    alternateFileTypes<R = cocoa.NSArray>(): R;
    setAlternateFileTypes<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    delegate<R = cocoa.NSFilePromiseProviderDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSFilePromiseProviderDelegate>(_v: P0): R;
    userInfo<R = unknown>(): R;
    setUserInfo<R = void, P0 = unknown>(_v: P0): R;
    _providedItemsOperationQueue<R = cocoa.NSOperationQueue>(): R;
    _providedItemsURL<R = cocoa.NSURL>(): R;
    fileType<R = cocoa.NSString>(): R;
    setFileType<R = void, P0 = cocoa.NSString>(_v: P0): R;
    _fileReactorID<R = cocoa.NSString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSFilePromiseProvider<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSFileProviderProtocol, cocoa.classes._NSPasteboardPromiseProviderAgencyProtocol, cocoa.classes.NSPasteboardWritingProtocol {
      alloc<R = NSFilePromiseProvider>(): R;
      new: <R = NSFilePromiseProvider>() => R;
      _provideItemNotifyQueue<R = unknown>(): R;
    }
  }
}

declare const NSFilePromiseProvider: cocoa.classes.NSFilePromiseProvider;
