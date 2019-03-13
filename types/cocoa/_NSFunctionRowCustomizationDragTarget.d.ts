/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowCustomizationDragTarget<T = any> extends NSView {
    delegate<R = _NSFunctionRowCustomizationDragTargetDelegate>(): R;
    setDelegate<R = void, P0 = _NSFunctionRowCustomizationDragTargetDelegate>(_v: P0): R;
    dragInBounds<R = boolean>(): R;
    setDragInBounds<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFunctionRowCustomizationDragTarget<T = any> extends NSView {
      alloc<R = _NSFunctionRowCustomizationDragTarget>(): R;
      new: <R = _NSFunctionRowCustomizationDragTarget>() => R;
    }
  }
}
