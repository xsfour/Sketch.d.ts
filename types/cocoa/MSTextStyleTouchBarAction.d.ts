/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextStyleTouchBarAction<T = any> extends cocoa.MSDocumentAction, cocoa.NSTouchBarDelegateProtocol {
    label<R = unknown>(): R;
    applySharedStyle<R = void, P0 = unknown>(_applySharedStyle: P0): R;
    textStyles<R = unknown>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSTextStyleTouchBarAction<T = any> extends cocoa.classes.MSDocumentAction, cocoa.classes.NSTouchBarDelegateProtocol {
      alloc<R = MSTextStyleTouchBarAction>(): R;
      new: <R = MSTextStyleTouchBarAction>() => R;
    }
  }
}

declare const MSTextStyleTouchBarAction: cocoa.classes.MSTextStyleTouchBarAction;
