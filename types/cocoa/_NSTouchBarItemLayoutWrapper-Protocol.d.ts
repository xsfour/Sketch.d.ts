/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarItemLayoutWrapperProtocol<T = any> extends cocoa.NSObjectProtocol {
    isSpace<R = boolean>(): R;
    maxSize<R = cocoa.CGSize>(): R;
    minSize<R = cocoa.CGSize>(): R;
    preferredTrailingPosition<R = number>(): R;
    preferredZOrder<R = number>(): R;
    itemPosition<R = number>(): R;
    priorityIndex<R = number>(): R;
    contentClippingSize<R = cocoa.CGSize>(): R;
    preferredSize<R = cocoa.CGSize>(): R;
  }
  namespace classes {
    export interface _NSTouchBarItemLayoutWrapperProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}
