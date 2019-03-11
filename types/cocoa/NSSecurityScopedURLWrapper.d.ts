/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSecurityScopedURLWrapper<T = any> extends cocoa.NSObject, cocoa.NSSecureCodingProtocol {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithURL_readonly_scope<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown>(_initWithURL: P0, _readonly: P1, _scope: P2): R;
    initWithURL_readonly_extensionClass<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown>(_initWithURL: P0, _readonly: P1, _extensionClass: P2): R;
    initWithURL_readonly<R = unknown, P0 = unknown, P1 = boolean>(_initWithURL: P0, _readonly: P1): R;
    initWithURL<R = unknown, P0 = unknown>(_initWithURL: P0): R;
    initWithProviderIdentifier_domainIdentifier_itemIdentifier<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithProviderIdentifier: P0, _domainIdentifier: P1, _itemIdentifier: P2): R;
    itemIdentifier<R = cocoa.NSString>(): R;
    domainIdentifier<R = cocoa.NSString>(): R;
    providerIdentifier<R = cocoa.NSString>(): R;
    backedByFileProvider<R = boolean>(): R;
    readonly<R = boolean>(): R;
    url<R = cocoa.NSURL>(): R;
    _scope<R = cocoa.NSData>(): R;
  }
  namespace classes {
    export interface NSSecurityScopedURLWrapper<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSSecurityScopedURLWrapper>(): R;
      new: <R = NSSecurityScopedURLWrapper>() => R;
    }
  }
}

declare const NSSecurityScopedURLWrapper: cocoa.classes.NSSecurityScopedURLWrapper;
