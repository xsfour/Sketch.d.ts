/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKDiskCacheDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    diskCache_dataForKey<R = cocoa.NSData, P0 = cocoa.SMKDiskCache, P1 = cocoa.NSString>(_diskCache: P0, _dataForKey: P1): R;
  }
  namespace classes {
    export interface SMKDiskCacheDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const SMKDiskCacheDelegateProtocol: cocoa.classes.SMKDiskCacheDelegateProtocol;
