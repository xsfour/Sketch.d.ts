/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleColorStylePartInspectorViewController<T = any> extends MSMultipleStylePartInspectorViewController {
    closeAnyColorPopover<R = void>(): R;
    openPopoverAtIndex<R = void, P0 = number>(_openPopoverAtIndex: P0): R;
    currentPopoverIndex<R = NSNumber>(): R;
    setCurrentPopoverIndex<R = void, P0 = NSNumber>(_v: P0): R;
  }
  namespace classes {
    export interface MSMultipleColorStylePartInspectorViewController<T = any> extends MSMultipleStylePartInspectorViewController {
      alloc<R = MSMultipleColorStylePartInspectorViewController>(): R;
      new: <R = MSMultipleColorStylePartInspectorViewController>() => R;
    }
  }
}

declare const MSMultipleColorStylePartInspectorViewController: cocoa.classes.MSMultipleColorStylePartInspectorViewController;
