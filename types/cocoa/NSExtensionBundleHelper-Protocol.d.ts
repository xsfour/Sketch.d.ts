/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtensionBundleHelperProtocol<T = any> {
    __queryPhotoServiceAuthorizationStatusForPlugInUUID_completion<R = void, P0 = cocoa.NSUUID, P1 = cocoa.CDUnknownBlockType>(___queryPhotoServiceAuthorizationStatusForPlugInUUID: P0, _completion: P1): R;
    __localizedInfoDictionaryObjectForKeys_withPlugInUUID_completion<R = void, P0 = cocoa.NSArray, P1 = cocoa.NSUUID, P2 = cocoa.CDUnknownBlockType>(___localizedInfoDictionaryObjectForKeys: P0, _withPlugInUUID: P1, _completion: P2): R;
  }
  namespace classes {
    export interface NSExtensionBundleHelperProtocol<T = any> {  }
  }
}

declare const NSExtensionBundleHelperProtocol: cocoa.classes.NSExtensionBundleHelperProtocol;
