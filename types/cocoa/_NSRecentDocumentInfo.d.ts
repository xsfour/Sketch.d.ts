/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSRecentDocumentInfo<T = any> extends cocoa.NSObject, cocoa.NSRecentDocumentInfoProtocol {
    transferSecurityScope<R = void>(): R;
    resolveByMountingVolumesIfNecessary_queue_completionHandler<R = void, P0 = boolean, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_resolveByMountingVolumesIfNecessary: P0, _queue: P1, _completionHandler: P2): R;
    dealloc<R = void>(): R;
    initWithSharedFileListItem<R = unknown, P0 = cocoa.OpaqueLSSharedFileListItemRef>(_initWithSharedFileListItem: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
    deletionBlock<R = cocoa.CDUnknownBlockType>(): R;
    setDeletionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    icon<R = cocoa.NSImage>(): R;
    setIcon<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    displayName<R = cocoa.NSString>(): R;
    setDisplayName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    resolvedURL<R = cocoa.NSURL>(): R;
    setResolvedURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    sharedFileListItem<R = cocoa.OpaqueLSSharedFileListItemRef>(): R;
    URL<R = cocoa.NSURL>(): R;
    originalURL<R = cocoa.NSURL>(): R;
    description<R = cocoa.NSString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSRecentDocumentInfo<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSRecentDocumentInfoProtocol {
      alloc<R = _NSRecentDocumentInfo>(): R;
      new: <R = _NSRecentDocumentInfo>() => R;
    }
  }
}
