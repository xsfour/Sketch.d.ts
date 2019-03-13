/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTreeParentNodeProtocol<T = any> extends NSObjectProtocol {
    touchBarLayoutDirection<R = number>(): R;
    touchBarContainingChildNodes<R = NSTouchBar>(): R;
  }
  namespace classes {
    export interface NSTouchBarItemTreeParentNodeProtocol<T = any> extends NSObjectProtocol {  }
  }
}
