/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSmartPunctuationController<T = any> extends cocoa.NSObject {
    clientDidReplaceRange_changeInLength<R = void, P0 = cocoa._NSRange, P1 = number>(_clientDidReplaceRange: P0, _changeInLength: P1): R;
    dealloc<R = void>(): R;
    client<R = cocoa.NSSmartPunctuationClient>(): R;
    setClient<R = void, P0 = cocoa.NSSmartPunctuationClient>(_v: P0): R;
    smartDashesEnabled<R = boolean>(): R;
    setSmartDashesEnabled<R = void, P0 = boolean>(_v: P0): R;
    smartQuotesEnabled<R = boolean>(): R;
    setSmartQuotesEnabled<R = void, P0 = boolean>(_v: P0): R;
    smartQuoteOptions<R = cocoa.NSSmartQuoteOptions>(): R;
    setSmartQuoteOptions<R = void, P0 = cocoa.NSSmartQuoteOptions>(_v: P0): R;
  }
  namespace classes {
    export interface NSSmartPunctuationController<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSSmartPunctuationController>(): R;
      new: <R = NSSmartPunctuationController>() => R;
    }
  }
}

declare const NSSmartPunctuationController: cocoa.classes.NSSmartPunctuationController;
