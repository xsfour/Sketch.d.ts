/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSideBarViewControllerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    pageListCollapsed<R = boolean>(): R;
    setPageListCollapsed<R = void, P0 = boolean>(_v: P0): R;
    pageListHeight<R = number>(): R;
    setPageListHeight<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface BCSideBarViewControllerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const BCSideBarViewControllerDelegateProtocol: cocoa.classes.BCSideBarViewControllerDelegateProtocol;
