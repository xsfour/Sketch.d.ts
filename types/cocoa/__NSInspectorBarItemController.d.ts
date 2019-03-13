/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSInspectorBarItemController<T = any> extends NSObject, NSInspectorBarItemControllerProtocol, NSMenuDelegateProtocol, NSComboBoxCellDataSourceProtocol {}
  namespace classes {
    export interface __NSInspectorBarItemController<T = any> extends NSObject, NSInspectorBarItemControllerProtocol, NSMenuDelegateProtocol, NSComboBoxCellDataSourceProtocol {
      alloc<R = __NSInspectorBarItemController>(): R;
      new: <R = __NSInspectorBarItemController>() => R;
      favoriteFontSizes<R = unknown>(): R;
    }
  }
}
