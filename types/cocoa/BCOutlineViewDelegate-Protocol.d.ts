/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCOutlineViewDelegateProtocol<T = any> extends NSOutlineViewDelegateProtocol {
    isOutlineViewShowingContextMenu<R = boolean, P0 = BCOutlineView>(_isOutlineViewShowingContextMenu: P0): R;
  }
  namespace classes {
    export interface BCOutlineViewDelegateProtocol<T = any> extends NSOutlineViewDelegateProtocol {  }
  }
}
