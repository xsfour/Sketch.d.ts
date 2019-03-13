/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageForeignSymbolTableCellView<T = any> extends NSTableCellView {
    setBackgroundStyle<R = void, P0 = number>(_setBackgroundStyle: P0): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    sharedObjectView<R = MSSharedObjectView>(): R;
    setSharedObjectView<R = void, P0 = MSSharedObjectView>(_v: P0): R;
    secondaryTextField<R = NSTextField>(): R;
    setSecondaryTextField<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace classes {
    export interface MSManageForeignSymbolTableCellView<T = any> extends NSTableCellView {
      alloc<R = MSManageForeignSymbolTableCellView>(): R;
      new: <R = MSManageForeignSymbolTableCellView>() => R;
    }
  }
}

declare const MSManageForeignSymbolTableCellView: cocoa.classes.MSManageForeignSymbolTableCellView;
