/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageShareableObjectsAction<T = any> extends cocoa.MSBaseSharedObjectAction {
    label<R = unknown>(): R;
    showOrganiserSheet<R = void, P0 = unknown>(_showOrganiserSheet: P0): R;
    showSheetWithTabIndex<R = void, P0 = number>(_showSheetWithTabIndex: P0): R;
  }
  namespace classes {
    export interface MSManageShareableObjectsAction<T = any> extends cocoa.classes.MSBaseSharedObjectAction {
      alloc<R = MSManageShareableObjectsAction>(): R;
      new: <R = MSManageShareableObjectsAction>() => R;
    }
  }
}

declare const MSManageShareableObjectsAction: cocoa.classes.MSManageShareableObjectsAction;
