/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserPreviewColumnViewController<T = any> extends cocoa.NSBrowserColumnViewController {
    setMenu<R = void, P0 = unknown>(_setMenu: P0): R;
    setSelectionIndexes<R = void, P0 = unknown>(_setSelectionIndexes: P0): R;
    selectionIndexes<R = unknown>(): R;
    firstValidRowIndex<R = number>(): R;
    numberOfRows<R = number>(): R;
    setAllowsTypeSelect<R = void, P0 = boolean>(_setAllowsTypeSelect: P0): R;
    allowsTypeSelect<R = boolean>(): R;
    setDrawsBackground<R = void, P0 = boolean>(_setDrawsBackground: P0): R;
    drawsBackground<R = boolean>(): R;
    setAllowsEmptySelection<R = void, P0 = boolean>(_setAllowsEmptySelection: P0): R;
    allowsEmptySelection<R = boolean>(): R;
    setAllowsMultipleSelection<R = void, P0 = boolean>(_setAllowsMultipleSelection: P0): R;
    allowsMultipleSelection<R = boolean>(): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    previewViewController<R = cocoa.NSViewController>(): R;
    setPreviewViewController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
  }
  namespace classes {
    export interface _NSBrowserPreviewColumnViewController<T = any> extends cocoa.classes.NSBrowserColumnViewController {
      alloc<R = _NSBrowserPreviewColumnViewController>(): R;
      new: <R = _NSBrowserPreviewColumnViewController>() => R;
    }
  }
}
