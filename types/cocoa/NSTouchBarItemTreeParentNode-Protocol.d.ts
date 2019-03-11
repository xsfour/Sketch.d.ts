/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTreeParentNodeProtocol<T = any> extends cocoa.NSObjectProtocol {
    touchBarLayoutDirection<R = number>(): R;
    touchBarContainingChildNodes<R = cocoa.NSTouchBar>(): R;
  }
  namespace classes {
    export interface NSTouchBarItemTreeParentNodeProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTouchBarItemTreeParentNodeProtocol: cocoa.classes.NSTouchBarItemTreeParentNodeProtocol;
