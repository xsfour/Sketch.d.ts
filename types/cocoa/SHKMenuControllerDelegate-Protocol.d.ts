/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SHKMenuControllerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    sharingServicePicker_didChooseSharingService<R = void, P0 = cocoa.SHKSharingServicePicker, P1 = cocoa.SHKSharingService>(_sharingServicePicker: P0, _didChooseSharingService: P1): R;
    sharingServicePicker_delegateForSharingService<R = cocoa.SHKSharingServiceDelegate, P0 = cocoa.SHKSharingServicePicker, P1 = cocoa.SHKSharingService>(_sharingServicePicker: P0, _delegateForSharingService: P1): R;
    sharingServicePicker_recentSharingServicesForItems_proposedSharingServices<R = cocoa.NSArray, P0 = cocoa.SHKSharingServicePicker, P1 = cocoa.NSArray, P2 = cocoa.NSArray>(_sharingServicePicker: P0, _recentSharingServicesForItems: P1, _proposedSharingServices: P2): R;
    sharingServicePicker_sharingServicesForItems_mask_proposedSharingServices<R = cocoa.NSArray, P0 = cocoa.SHKSharingServicePicker, P1 = cocoa.NSArray, P2 = number, P3 = cocoa.NSArray>(_sharingServicePicker: P0, _sharingServicesForItems: P1, _mask: P2, _proposedSharingServices: P3): R;
    sharingServicePicker_sharingServicesForItems_proposedSharingServices<R = cocoa.NSArray, P0 = cocoa.SHKSharingServicePicker, P1 = cocoa.NSArray, P2 = cocoa.NSArray>(_sharingServicePicker: P0, _sharingServicesForItems: P1, _proposedSharingServices: P2): R;
  }
  namespace classes {
    export interface SHKMenuControllerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const SHKMenuControllerDelegateProtocol: cocoa.classes.SHKMenuControllerDelegateProtocol;
