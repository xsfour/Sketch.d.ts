/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderTickMarksDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    rectOfTickMarkAtIndex<R = cocoa.CGRect, P0 = number>(_rectOfTickMarkAtIndex: P0): R;
  }
  namespace classes {
    export interface NSSliderTickMarksDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSSliderTickMarksDelegateProtocol: cocoa.classes.NSSliderTickMarksDelegateProtocol;
