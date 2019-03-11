/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPreferenceItemDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    preferenceItemHasUpdated<R = void, P0 = cocoa.MSAssetPreferenceItem>(_preferenceItemHasUpdated: P0): R;
  }
  namespace classes {
    export interface MSAssetPreferenceItemDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSAssetPreferenceItemDelegateProtocol: cocoa.classes.MSAssetPreferenceItemDelegateProtocol;
