/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSItemProviderExtensionVendorLoadOperator<T = any> extends cocoa.NSObject, cocoa._NSItemProviderLoadingProtocol {
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    dealloc<R = void>(): R;
    initWithExtensionContextIdentifier<R = unknown, P0 = unknown>(_initWithExtensionContextIdentifier: P0): R;
    extensionContextIdentifier<R = cocoa.NSUUID>(): R;
    setExtensionContextIdentifier<R = void, P0 = cocoa.NSUUID>(_v: P0): R;
    identifier<R = cocoa.NSUUID>(): R;
    setIdentifier<R = void, P0 = cocoa.NSUUID>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSItemProviderExtensionVendorLoadOperator<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSItemProviderLoadingProtocol {
      alloc<R = _NSItemProviderExtensionVendorLoadOperator>(): R;
      new: <R = _NSItemProviderExtensionVendorLoadOperator>() => R;
    }
  }
}
