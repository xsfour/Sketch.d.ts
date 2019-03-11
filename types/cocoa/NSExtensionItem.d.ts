/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtensionItem<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSSecureCodingProtocol {
    _matchingDictionaryRepresentation<R = unknown>(): R;
    description<R = unknown>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    dealloc<R = void>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    userInfo<R = cocoa.NSDictionary>(): R;
    setUserInfo<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    attachments<R = cocoa.NSArray>(): R;
    setAttachments<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    attributedContentText<R = cocoa.NSAttributedString>(): R;
    setAttributedContentText<R = void, P0 = cocoa.NSAttributedString>(_v: P0): R;
    attributedTitle<R = cocoa.NSAttributedString>(): R;
    setAttributedTitle<R = void, P0 = cocoa.NSAttributedString>(_v: P0): R;
  }
  namespace classes {
    export interface NSExtensionItem<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSExtensionItem>(): R;
      new: <R = NSExtensionItem>() => R;
    }
  }
}

declare const NSExtensionItem: cocoa.classes.NSExtensionItem;
