/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHeader2InspectorItem<T = any> extends MSInspectorItem {
    label<R = NSTextField>(): R;
    setLabel<R = void, P0 = NSTextField>(_v: P0): R;
    labelText<R = NSString>(): R;
    setLabelText<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSHeader2InspectorItem<T = any> extends MSInspectorItem {
      alloc<R = MSHeader2InspectorItem>(): R;
      new: <R = MSHeader2InspectorItem>() => R;
    }
  }
}

declare const MSHeader2InspectorItem: cocoa.classes.MSHeader2InspectorItem;
