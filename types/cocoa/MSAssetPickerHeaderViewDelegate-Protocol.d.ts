/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPickerHeaderViewDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    assetHeaderViewDidClick<R = void, P0 = cocoa.MSAssetPickerHeaderView>(_assetHeaderViewDidClick: P0): R;
  }
  namespace classes {
    export interface MSAssetPickerHeaderViewDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSAssetPickerHeaderViewDelegateProtocol: cocoa.classes.MSAssetPickerHeaderViewDelegateProtocol;
