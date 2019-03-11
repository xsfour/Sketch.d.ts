/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePartInspectorItem<T = any> extends cocoa.NSViewController {
    cxx_destruct<R = void>(): R;
    sectionWithIdentifierWillCollapse<R = void, P0 = unknown>(_sectionWithIdentifierWillCollapse: P0): R;
    updateDisplayedValues<R = void>(): R;
    delegate<R = cocoa.MSStylePartInspectorItemDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSStylePartInspectorItemDelegate>(_v: P0): R;
    stylesController<R = cocoa.NSArrayController>(): R;
    setStylesController<R = void, P0 = cocoa.NSArrayController>(_v: P0): R;
    styleParts<R = cocoa.NSArray>(): R;
    setStyleParts<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    layers<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MSStylePartInspectorItem<T = any> extends cocoa.classes.NSViewController {
      alloc<R = MSStylePartInspectorItem>(): R;
      new: <R = MSStylePartInspectorItem>() => R;
    }
  }
}

declare const MSStylePartInspectorItem: cocoa.classes.MSStylePartInspectorItem;
