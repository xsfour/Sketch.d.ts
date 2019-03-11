/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSServicesPrincipalMenuUpdater<T = any> extends cocoa._NSServicesMenuUpdater {
    addNonserviceMenuItemsToMenu<R = void, P0 = unknown>(_addNonserviceMenuItemsToMenu: P0): R;
  }
  namespace classes {
    export interface _NSServicesPrincipalMenuUpdater<T = any> extends cocoa.classes._NSServicesMenuUpdater {
      alloc<R = _NSServicesPrincipalMenuUpdater>(): R;
      new: <R = _NSServicesPrincipalMenuUpdater>() => R;
      _sharedPrincipalUpdater<R = unknown>(): R;
    }
  }
}
