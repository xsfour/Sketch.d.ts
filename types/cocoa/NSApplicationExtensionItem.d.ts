/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSApplicationExtensionItem<T = any> extends cocoa.NSObject, cocoa.NSSecureCodingProtocol, cocoa.NSCopyingProtocol {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    dealloc<R = void>(): R;
    userInfo<R = cocoa.NSDictionary>(): R;
    setUserInfo<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    location<R = cocoa.CLLocation>(): R;
    setLocation<R = void, P0 = cocoa.CLLocation>(_v: P0): R;
    links<R = cocoa.NSArray>(): R;
    setLinks<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    attachments<R = cocoa.NSArray>(): R;
    setAttachments<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    videoAssets<R = cocoa.NSArray>(): R;
    setVideoAssets<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    photoAssets<R = cocoa.NSArray>(): R;
    setPhotoAssets<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    contentText<R = cocoa.NSString>(): R;
    setContentText<R = void, P0 = cocoa.NSString>(_v: P0): R;
    titleText<R = cocoa.NSString>(): R;
    setTitleText<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSApplicationExtensionItem<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSecureCodingProtocol, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSApplicationExtensionItem>(): R;
      new: <R = NSApplicationExtensionItem>() => R;
    }
  }
}

declare const NSApplicationExtensionItem: cocoa.classes.NSApplicationExtensionItem;
