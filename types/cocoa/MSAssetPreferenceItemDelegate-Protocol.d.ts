/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPreferenceItemDelegateProtocol<T = any> extends NSObjectProtocol {
    preferenceItemHasUpdated<R = void, P0 = MSAssetPreferenceItem>(_preferenceItemHasUpdated: P0): R;
  }
  namespace classes {
    export interface MSAssetPreferenceItemDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
