/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSharingServiceDelegateProtocol<T = any> {
    anchoringViewForSharingService_showRelativeToRect_preferredEdge<R = cocoa.NSView, P0 = cocoa.NSSharingService, P1 = cocoa.CGRect, P2 = number>(_anchoringViewForSharingService: P0, _showRelativeToRect: P1, _preferredEdge: P2): R;
    sharingService_sourceWindowForShareItems_sharingContentScope<R = cocoa.NSWindow, P0 = cocoa.NSSharingService, P1 = cocoa.NSArray, P2 = number>(_sharingService: P0, _sourceWindowForShareItems: P1, _sharingContentScope: P2): R;
    sharingService_transitionImageForShareItem_contentRect<R = cocoa.NSImage, P0 = cocoa.NSSharingService, P1 = unknown, P2 = cocoa.CGRect>(_sharingService: P0, _transitionImageForShareItem: P1, _contentRect: P2): R;
    sharingService_sourceFrameOnScreenForShareItem<R = cocoa.CGRect, P0 = cocoa.NSSharingService, P1 = unknown>(_sharingService: P0, _sourceFrameOnScreenForShareItem: P1): R;
    sharingService_didShareItems<R = void, P0 = cocoa.NSSharingService, P1 = cocoa.NSArray>(_sharingService: P0, _didShareItems: P1): R;
    sharingService_didFailToShareItems_error<R = void, P0 = cocoa.NSSharingService, P1 = cocoa.NSArray, P2 = cocoa.NSError>(_sharingService: P0, _didFailToShareItems: P1, _error: P2): R;
    sharingService_willShareItems<R = void, P0 = cocoa.NSSharingService, P1 = cocoa.NSArray>(_sharingService: P0, _willShareItems: P1): R;
  }
  namespace classes {
    export interface NSSharingServiceDelegateProtocol<T = any> {  }
  }
}

declare const NSSharingServiceDelegateProtocol: cocoa.classes.NSSharingServiceDelegateProtocol;
