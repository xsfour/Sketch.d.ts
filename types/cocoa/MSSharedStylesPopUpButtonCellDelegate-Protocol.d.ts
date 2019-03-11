/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStylesPopUpButtonCellDelegateProtocol<T = any> {
    cachedImageForPopupButtonCell_withSharedObject<R = cocoa.NSImage, P0 = cocoa.MSSharedStylesPopUpButtonCell, P1 = cocoa.MSShareableObjectReference>(_cachedImageForPopupButtonCell: P0, _withSharedObject: P1): R;
    popupButtonCell_didCreatePreviewImage_forSharedObject<R = void, P0 = cocoa.MSSharedStylesPopUpButtonCell, P1 = cocoa.NSImage, P2 = cocoa.MSShareableObjectReference>(_popupButtonCell: P0, _didCreatePreviewImage: P1, _forSharedObject: P2): R;
  }
  namespace classes {
    export interface MSSharedStylesPopUpButtonCellDelegateProtocol<T = any> {  }
  }
}

declare const MSSharedStylesPopUpButtonCellDelegateProtocol: cocoa.classes.MSSharedStylesPopUpButtonCellDelegateProtocol;
