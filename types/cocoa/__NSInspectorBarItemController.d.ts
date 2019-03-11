/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSInspectorBarItemController<T = any> extends cocoa.NSObject, cocoa.NSInspectorBarItemControllerProtocol, cocoa.NSMenuDelegateProtocol, cocoa.NSComboBoxCellDataSourceProtocol {}
  namespace classes {
    export interface __NSInspectorBarItemController<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSInspectorBarItemControllerProtocol, cocoa.classes.NSMenuDelegateProtocol, cocoa.classes.NSComboBoxCellDataSourceProtocol {
      alloc<R = __NSInspectorBarItemController>(): R;
      new: <R = __NSInspectorBarItemController>() => R;
      favoriteFontSizes<R = unknown>(): R;
    }
  }
}
