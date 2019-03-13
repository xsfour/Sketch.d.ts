/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CATransactionCompletionItem<T = any> {
    // + CATransactionCompletionItem(NSAnimationContextCompletionHandlerSuspension):
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface CATransactionCompletionItem<T = any> {
      // + CATransactionCompletionItem(NSAnimationContextCompletionHandlerSuspension):
      
    }
  }
}

declare const CATransactionCompletionItem: cocoa.classes.CATransactionCompletionItem;
