/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRecentDocumentInfoProtocol<T = any> extends NSObjectProtocol {
    resolveURLWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_resolveURLWithCompletionHandler: P0): R;
    state<R = number>(): R;
    icon<R = NSImage>(): R;
    displayName<R = NSString>(): R;
    URL<R = NSURL>(): R;
  }
  namespace classes {
    export interface NSRecentDocumentInfoProtocol<T = any> extends NSObjectProtocol {  }
  }
}
