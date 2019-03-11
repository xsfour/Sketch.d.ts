/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCOutlineViewDelegateProtocol<T = any> extends cocoa.NSOutlineViewDelegateProtocol {
    isOutlineViewShowingContextMenu<R = boolean, P0 = cocoa.BCOutlineView>(_isOutlineViewShowingContextMenu: P0): R;
  }
  namespace classes {
    export interface BCOutlineViewDelegateProtocol<T = any> extends cocoa.classes.NSOutlineViewDelegateProtocol {  }
  }
}

declare const BCOutlineViewDelegateProtocol: cocoa.classes.BCOutlineViewDelegateProtocol;
