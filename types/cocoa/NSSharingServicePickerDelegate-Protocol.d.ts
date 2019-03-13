/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSharingServicePickerDelegateProtocol<T = any> {
    sharingServicePicker_didChooseSharingService<R = void, P0 = NSSharingServicePicker, P1 = NSSharingService>(_sharingServicePicker: P0, _didChooseSharingService: P1): R;
    sharingServicePicker_delegateForSharingService<R = NSSharingServiceDelegate, P0 = NSSharingServicePicker, P1 = NSSharingService>(_sharingServicePicker: P0, _delegateForSharingService: P1): R;
    sharingServicePicker_sharingServicesForItems_proposedSharingServices<R = NSArray, P0 = NSSharingServicePicker, P1 = NSArray, P2 = NSArray>(_sharingServicePicker: P0, _sharingServicesForItems: P1, _proposedSharingServices: P2): R;
  }
  namespace classes {
    export interface NSSharingServicePickerDelegateProtocol<T = any> {  }
  }
}
