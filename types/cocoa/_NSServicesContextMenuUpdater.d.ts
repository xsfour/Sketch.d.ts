/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSServicesContextMenuUpdater<T = any> extends cocoa._NSServicesMenuUpdater {
    dispose<R = void>(): R;
    initWithMenuRef_correspondingToMenu_withRequestorChain<R = unknown, P0 = cocoa.OpaqueMenuRef, P1 = unknown, P2 = unknown>(_initWithMenuRef: P0, _correspondingToMenu: P1, _withRequestorChain: P2): R;
  }
  namespace classes {
    export interface _NSServicesContextMenuUpdater<T = any> extends cocoa.classes._NSServicesMenuUpdater {
      alloc<R = _NSServicesContextMenuUpdater>(): R;
      new: <R = _NSServicesContextMenuUpdater>() => R;
    }
  }
}
