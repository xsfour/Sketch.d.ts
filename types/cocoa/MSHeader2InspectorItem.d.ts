/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHeader2InspectorItem<T = any> extends cocoa.MSInspectorItem {
    label<R = cocoa.NSTextField>(): R;
    setLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    labelText<R = cocoa.NSString>(): R;
    setLabelText<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSHeader2InspectorItem<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSHeader2InspectorItem>(): R;
      new: <R = MSHeader2InspectorItem>() => R;
    }
  }
}

declare const MSHeader2InspectorItem: cocoa.classes.MSHeader2InspectorItem;
