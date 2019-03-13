/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetProtocol<T = any> extends NSObjectProtocol, NSCopyingProtocol {
    isAssetEqual<R = boolean, P0 = MSAsset>(_isAssetEqual: P0): R;
    assetType<R = number>(): R;
  }
  namespace classes {
    export interface MSAssetProtocol<T = any> extends NSObjectProtocol, NSCopyingProtocol {  }
  }
}
