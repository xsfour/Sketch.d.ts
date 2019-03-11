/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSItemProviderWritingProtocol<T = any> extends cocoa.NSObjectProtocol {
    loadDataWithTypeIdentifier_forItemProviderCompletionHandler<R = cocoa.NSProgress, P0 = cocoa.NSString, P1 = cocoa.CDUnknownBlockType>(_loadDataWithTypeIdentifier: P0, _forItemProviderCompletionHandler: P1): R;
    itemProviderVisibilityForRepresentationWithTypeIdentifier<R = number, P0 = cocoa.NSString>(_itemProviderVisibilityForRepresentationWithTypeIdentifier: P0): R;
    writableTypeIdentifiersForItemProvider<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSItemProviderWritingProtocol<T = any> extends cocoa.classes.NSObjectProtocol {
      writableTypeIdentifiersForItemProvider<R = cocoa.NSArray>(): R;
    }
  }
}

declare const NSItemProviderWritingProtocol: cocoa.classes.NSItemProviderWritingProtocol;
