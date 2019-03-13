/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDebugTouchBarTableCellView<T = any> extends NSTableCellView {
    isFlipped<R = boolean>(): R;
    showInspectorPopover<R = void, P0 = unknown>(_showInspectorPopover: P0): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    secondaryLabel<R = NSTextField>(): R;
    setSecondaryLabel<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace classes {
    export interface _NSDebugTouchBarTableCellView<T = any> extends NSTableCellView {
      alloc<R = _NSDebugTouchBarTableCellView>(): R;
      new: <R = _NSDebugTouchBarTableCellView>() => R;
    }
  }
}
