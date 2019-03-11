/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAnimationContextCompletionHandlerSuspensionProtocol<T = any> extends cocoa.NSObjectProtocol {
    invalidate<R = void>(): R;
  }
  namespace classes {
    export interface NSAnimationContextCompletionHandlerSuspensionProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSAnimationContextCompletionHandlerSuspensionProtocol: cocoa.classes.NSAnimationContextCompletionHandlerSuspensionProtocol;
