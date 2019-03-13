/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDebugResponderChainTableRowView<T = any> extends NSTableRowView {
    allowsVibrancy<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSDebugResponderChainTableRowView<T = any> extends NSTableRowView {
      alloc<R = _NSDebugResponderChainTableRowView>(): R;
      new: <R = _NSDebugResponderChainTableRowView>() => R;
    }
  }
}
