/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDebugResponderChainTableCellView<T = any> extends NSTableCellView {
    isFlipped<R = boolean>(): R;
    secondaryLabel<R = NSTextField>(): R;
    setSecondaryLabel<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace classes {
    export interface _NSDebugResponderChainTableCellView<T = any> extends NSTableCellView {
      alloc<R = _NSDebugResponderChainTableCellView>(): R;
      new: <R = _NSDebugResponderChainTableCellView>() => R;
    }
  }
}
