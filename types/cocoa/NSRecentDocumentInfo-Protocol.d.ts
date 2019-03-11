/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRecentDocumentInfoProtocol<T = any> extends cocoa.NSObjectProtocol {
    resolveURLWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_resolveURLWithCompletionHandler: P0): R;
    state<R = number>(): R;
    icon<R = cocoa.NSImage>(): R;
    displayName<R = cocoa.NSString>(): R;
    URL<R = cocoa.NSURL>(): R;
  }
  namespace classes {
    export interface NSRecentDocumentInfoProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSRecentDocumentInfoProtocol: cocoa.classes.NSRecentDocumentInfoProtocol;
