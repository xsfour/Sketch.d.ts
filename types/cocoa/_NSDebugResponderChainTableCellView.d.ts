/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDebugResponderChainTableCellView<T = any> extends cocoa.NSTableCellView {
    isFlipped<R = boolean>(): R;
    secondaryLabel<R = cocoa.NSTextField>(): R;
    setSecondaryLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
  }
  namespace classes {
    export interface _NSDebugResponderChainTableCellView<T = any> extends cocoa.classes.NSTableCellView {
      alloc<R = _NSDebugResponderChainTableCellView>(): R;
      new: <R = _NSDebugResponderChainTableCellView>() => R;
    }
  }
}
