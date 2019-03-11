/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleColorStylePartInspectorViewController<T = any> extends cocoa.MSMultipleStylePartInspectorViewController {
    closeAnyColorPopover<R = void>(): R;
    openPopoverAtIndex<R = void, P0 = number>(_openPopoverAtIndex: P0): R;
    currentPopoverIndex<R = cocoa.NSNumber>(): R;
    setCurrentPopoverIndex<R = void, P0 = cocoa.NSNumber>(_v: P0): R;
  }
  namespace classes {
    export interface MSMultipleColorStylePartInspectorViewController<T = any> extends cocoa.classes.MSMultipleStylePartInspectorViewController {
      alloc<R = MSMultipleColorStylePartInspectorViewController>(): R;
      new: <R = MSMultipleColorStylePartInspectorViewController>() => R;
    }
  }
}

declare const MSMultipleColorStylePartInspectorViewController: cocoa.classes.MSMultipleColorStylePartInspectorViewController;
