/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKDiskCacheDelegateProtocol<T = any> extends NSObjectProtocol {
    diskCache_dataForKey<R = NSData, P0 = SMKDiskCache, P1 = NSString>(_diskCache: P0, _dataForKey: P1): R;
  }
  namespace classes {
    export interface SMKDiskCacheDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
