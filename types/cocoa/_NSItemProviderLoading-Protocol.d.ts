/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSItemProviderLoadingProtocol<T = any> extends cocoa.NSObjectProtocol, cocoa.NSSecureCodingProtocol {
    loadPreviewImageWithCompletionHandler_expectedValueClass_options<R = void, P0 = cocoa.CDUnknownBlockType, P1 = unknown, P2 = cocoa.NSDictionary>(_loadPreviewImageWithCompletionHandler: P0, _expectedValueClass: P1, _options: P2): R;
    loadItemForTypeIdentifier_completionHandler_expectedValueClass_options<R = void, P0 = cocoa.NSString, P1 = cocoa.CDUnknownBlockType, P2 = unknown, P3 = cocoa.NSDictionary>(_loadItemForTypeIdentifier: P0, _completionHandler: P1, _expectedValueClass: P2, _options: P3): R;
  }
  namespace classes {
    export interface _NSItemProviderLoadingProtocol<T = any> extends cocoa.classes.NSObjectProtocol, cocoa.classes.NSSecureCodingProtocol {  }
  }
}
