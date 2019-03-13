/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSItemProviderWritingProtocol<T = any> extends NSObjectProtocol {
    loadDataWithTypeIdentifier_forItemProviderCompletionHandler<R = NSProgress, P0 = NSString, P1 = CDUnknownBlockType>(_loadDataWithTypeIdentifier: P0, _forItemProviderCompletionHandler: P1): R;
    itemProviderVisibilityForRepresentationWithTypeIdentifier<R = number, P0 = NSString>(_itemProviderVisibilityForRepresentationWithTypeIdentifier: P0): R;
    writableTypeIdentifiersForItemProvider<R = NSArray>(): R;
  }
  namespace classes {
    export interface NSItemProviderWritingProtocol<T = any> extends NSObjectProtocol {
      writableTypeIdentifiersForItemProvider<R = NSArray>(): R;
    }
  }
}
