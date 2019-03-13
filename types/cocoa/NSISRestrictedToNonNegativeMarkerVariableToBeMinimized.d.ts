/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISRestrictedToNonNegativeMarkerVariableToBeMinimized<T = any> extends NSISVariable {
    shouldBeMinimized<R = boolean>(): R;
    valueRestriction<R = number>(): R;
  }
  namespace classes {
    export interface NSISRestrictedToNonNegativeMarkerVariableToBeMinimized<T = any> extends NSISVariable {
      alloc<R = NSISRestrictedToNonNegativeMarkerVariableToBeMinimized>(): R;
      new: <R = NSISRestrictedToNonNegativeMarkerVariableToBeMinimized>() => R;
    }
  }
}

declare const NSISRestrictedToNonNegativeMarkerVariableToBeMinimized: cocoa.classes.NSISRestrictedToNonNegativeMarkerVariableToBeMinimized;
