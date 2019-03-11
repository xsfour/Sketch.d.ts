/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSServicesRolloverViewDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    pickerForRolloverCalloutView<R = cocoa.NSSharingServicePicker, P0 = cocoa.NSServicesRolloverView>(_pickerForRolloverCalloutView: P0): R;
  }
  namespace classes {
    export interface NSServicesRolloverViewDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSServicesRolloverViewDelegateProtocol: cocoa.classes.NSServicesRolloverViewDelegateProtocol;
