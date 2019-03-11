/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDebugTouchBarTableRowView<T = any> extends cocoa.NSTableRowView {
    allowsVibrancy<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSDebugTouchBarTableRowView<T = any> extends cocoa.classes.NSTableRowView {
      alloc<R = _NSDebugTouchBarTableRowView>(): R;
      new: <R = _NSDebugTouchBarTableRowView>() => R;
    }
  }
}
