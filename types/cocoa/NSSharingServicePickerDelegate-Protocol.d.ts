/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSharingServicePickerDelegateProtocol<T = any> {
    sharingServicePicker_didChooseSharingService<R = void, P0 = cocoa.NSSharingServicePicker, P1 = cocoa.NSSharingService>(_sharingServicePicker: P0, _didChooseSharingService: P1): R;
    sharingServicePicker_delegateForSharingService<R = cocoa.NSSharingServiceDelegate, P0 = cocoa.NSSharingServicePicker, P1 = cocoa.NSSharingService>(_sharingServicePicker: P0, _delegateForSharingService: P1): R;
    sharingServicePicker_sharingServicesForItems_proposedSharingServices<R = cocoa.NSArray, P0 = cocoa.NSSharingServicePicker, P1 = cocoa.NSArray, P2 = cocoa.NSArray>(_sharingServicePicker: P0, _sharingServicesForItems: P1, _proposedSharingServices: P2): R;
  }
  namespace classes {
    export interface NSSharingServicePickerDelegateProtocol<T = any> {  }
  }
}

declare const NSSharingServicePickerDelegateProtocol: cocoa.classes.NSSharingServicePickerDelegateProtocol;
