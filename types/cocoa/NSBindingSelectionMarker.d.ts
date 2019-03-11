/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBindingSelectionMarker<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {}
  namespace classes {
    export interface NSBindingSelectionMarker<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSBindingSelectionMarker>(): R;
      new: <R = NSBindingSelectionMarker>() => R;
      notApplicableSelectionMarker<R = unknown>(): R;
      noSelectionMarker<R = unknown>(): R;
      multipleValuesSelectionMarker<R = unknown>(): R;
    }
  }
}

declare const NSBindingSelectionMarker: cocoa.classes.NSBindingSelectionMarker;
