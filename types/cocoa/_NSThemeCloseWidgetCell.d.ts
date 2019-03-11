/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThemeCloseWidgetCell<T = any> extends cocoa._NSThemeWidgetCell {
    setEditedFlag<R = boolean, P0 = boolean>(_setEditedFlag: P0): R;
    accessibilityIsEditedAttributeSettable<R = boolean>(): R;
    accessibilityEditedAttribute<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSThemeCloseWidgetCell<T = any> extends cocoa.classes._NSThemeWidgetCell {
      alloc<R = _NSThemeCloseWidgetCell>(): R;
      new: <R = _NSThemeCloseWidgetCell>() => R;
    }
  }
}
