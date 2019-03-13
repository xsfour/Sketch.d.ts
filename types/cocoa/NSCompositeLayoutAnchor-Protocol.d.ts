/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCompositeLayoutAnchorProtocol<T = any> {
    _childAnchors<R = NSArray>(): R;
  }
  namespace classes {
    export interface NSCompositeLayoutAnchorProtocol<T = any> {  }
  }
}
