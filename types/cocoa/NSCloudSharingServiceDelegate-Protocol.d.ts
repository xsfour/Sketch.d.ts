/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCloudSharingServiceDelegateProtocol<T = any> extends cocoa.NSSharingServiceDelegateProtocol {
    sharingService_didStopSharing<R = void, P0 = cocoa.NSSharingService, P1 = cocoa.CKShare>(_sharingService: P0, _didStopSharing: P1): R;
    sharingService_didSaveShare<R = void, P0 = cocoa.NSSharingService, P1 = cocoa.CKShare>(_sharingService: P0, _didSaveShare: P1): R;
    optionsForSharingService_shareProvider<R = number, P0 = cocoa.NSSharingService, P1 = cocoa.NSItemProvider>(_optionsForSharingService: P0, _shareProvider: P1): R;
    sharingService_didCompleteForItems_error<R = void, P0 = cocoa.NSSharingService, P1 = cocoa.NSArray, P2 = cocoa.NSError>(_sharingService: P0, _didCompleteForItems: P1, _error: P2): R;
  }
  namespace classes {
    export interface NSCloudSharingServiceDelegateProtocol<T = any> extends cocoa.classes.NSSharingServiceDelegateProtocol {  }
  }
}

declare const NSCloudSharingServiceDelegateProtocol: cocoa.classes.NSCloudSharingServiceDelegateProtocol;
