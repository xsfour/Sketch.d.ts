/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderBarContainerProtocol<T = any> extends cocoa.NSObjectProtocol {
    findBarViewDidChangeHeight<R = void>(): R;
    contentView<R = cocoa.NSView>(): R;
    findBarVisible<R = boolean>(): R;
    setFindBarVisible<R = void, P0 = boolean>(_v: P0): R;
    findBarView<R = cocoa.NSView>(): R;
    setFindBarView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSTextFinderBarContainerProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTextFinderBarContainerProtocol: cocoa.classes.NSTextFinderBarContainerProtocol;
