/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCOutlineViewPopupConfiguratorProtocol<T = any> {
    updatePopup_forState<R = boolean, P0 = cocoa.NSPopUpButton, P1 = number>(_updatePopup: P0, _forState: P1): R;
  }
  namespace classes {
    export interface BCOutlineViewPopupConfiguratorProtocol<T = any> {  }
  }
}

declare const BCOutlineViewPopupConfiguratorProtocol: cocoa.classes.BCOutlineViewPopupConfiguratorProtocol;
