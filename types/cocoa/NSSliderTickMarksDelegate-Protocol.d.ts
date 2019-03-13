/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderTickMarksDelegateProtocol<T = any> extends NSObjectProtocol {
    rectOfTickMarkAtIndex<R = CGRect, P0 = number>(_rectOfTickMarkAtIndex: P0): R;
  }
  namespace classes {
    export interface NSSliderTickMarksDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
