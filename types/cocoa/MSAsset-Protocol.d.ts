/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetProtocol<T = any> extends cocoa.NSObjectProtocol, cocoa.NSCopyingProtocol {
    isAssetEqual<R = boolean, P0 = cocoa.MSAsset>(_isAssetEqual: P0): R;
    assetType<R = number>(): R;
  }
  namespace classes {
    export interface MSAssetProtocol<T = any> extends cocoa.classes.NSObjectProtocol, cocoa.classes.NSCopyingProtocol {  }
  }
}

declare const MSAssetProtocol: cocoa.classes.MSAssetProtocol;
