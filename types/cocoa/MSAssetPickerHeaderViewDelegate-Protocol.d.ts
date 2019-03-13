/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPickerHeaderViewDelegateProtocol<T = any> extends NSObjectProtocol {
    assetHeaderViewDidClick<R = void, P0 = MSAssetPickerHeaderView>(_assetHeaderViewDidClick: P0): R;
  }
  namespace classes {
    export interface MSAssetPickerHeaderViewDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
