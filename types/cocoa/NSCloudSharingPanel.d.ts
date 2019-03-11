/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCloudSharingPanel<T = any> extends cocoa.NSObject {
    beginSheetModalForWindow_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_beginSheetModalForWindow: P0, _completionHandler: P1): R;
    dealloc<R = void>(): R;
    servicesToCustomize<R = cocoa.NSArray>(): R;
    setServicesToCustomize<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    documentHasPassword<R = boolean>(): R;
    setDocumentHasPassword<R = void, P0 = boolean>(_v: P0): R;
    shareButtonLabel<R = cocoa.NSString>(): R;
    setShareButtonLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    secondaryMessageForSharedDocument<R = cocoa.NSString>(): R;
    setSecondaryMessageForSharedDocument<R = void, P0 = cocoa.NSString>(_v: P0): R;
    secondaryMessage<R = cocoa.NSString>(): R;
    setSecondaryMessage<R = void, P0 = cocoa.NSString>(_v: P0): R;
    primaryMessageTemplateForSharedDocument<R = cocoa.NSString>(): R;
    setPrimaryMessageTemplateForSharedDocument<R = void, P0 = cocoa.NSString>(_v: P0): R;
    primaryMessageTemplate<R = cocoa.NSString>(): R;
    setPrimaryMessageTemplate<R = void, P0 = cocoa.NSString>(_v: P0): R;
    helpAnchor<R = cocoa.NSString>(): R;
    setHelpAnchor<R = void, P0 = cocoa.NSString>(_v: P0): R;
    thumbnailImage<R = cocoa.NSImage>(): R;
    setThumbnailImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    delegate<R = cocoa.NSCloudSharingPanelDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSCloudSharingPanelDelegate>(_v: P0): R;
    ubiquitousDocumentURL<R = cocoa.NSURL>(): R;
    setUbiquitousDocumentURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
  }
  namespace classes {
    export interface NSCloudSharingPanel<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSCloudSharingPanel>(): R;
      new: <R = NSCloudSharingPanel>() => R;
      panel<R = unknown>(): R;
    }
  }
}

declare const NSCloudSharingPanel: cocoa.classes.NSCloudSharingPanel;
