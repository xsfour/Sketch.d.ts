/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderBarContainerProtocol<T = any> extends NSObjectProtocol {
    findBarViewDidChangeHeight<R = void>(): R;
    contentView<R = NSView>(): R;
    findBarVisible<R = boolean>(): R;
    setFindBarVisible<R = void, P0 = boolean>(_v: P0): R;
    findBarView<R = NSView>(): R;
    setFindBarView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSTextFinderBarContainerProtocol<T = any> extends NSObjectProtocol {  }
  }
}
