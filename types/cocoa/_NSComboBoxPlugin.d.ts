/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSComboBoxPlugin<T = any> extends cocoa._NSSelectionBinderPlugin {}
  namespace classes {
    export interface _NSComboBoxPlugin<T = any> extends cocoa.classes._NSSelectionBinderPlugin {
      alloc<R = _NSComboBoxPlugin>(): R;
      new: <R = _NSComboBoxPlugin>() => R;
    }
  }
}
