/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowCustomizationDragTarget<T = any> extends cocoa.NSView {
    delegate<R = cocoa._NSFunctionRowCustomizationDragTargetDelegate>(): R;
    setDelegate<R = void, P0 = cocoa._NSFunctionRowCustomizationDragTargetDelegate>(_v: P0): R;
    dragInBounds<R = boolean>(): R;
    setDragInBounds<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFunctionRowCustomizationDragTarget<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSFunctionRowCustomizationDragTarget>(): R;
      new: <R = _NSFunctionRowCustomizationDragTarget>() => R;
    }
  }
}
