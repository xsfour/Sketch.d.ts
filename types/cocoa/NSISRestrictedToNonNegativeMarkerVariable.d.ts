/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISRestrictedToNonNegativeMarkerVariable<T = any> extends cocoa.NSISVariable {
    shouldBeMinimized<R = boolean>(): R;
    valueRestriction<R = number>(): R;
  }
  namespace classes {
    export interface NSISRestrictedToNonNegativeMarkerVariable<T = any> extends cocoa.classes.NSISVariable {
      alloc<R = NSISRestrictedToNonNegativeMarkerVariable>(): R;
      new: <R = NSISRestrictedToNonNegativeMarkerVariable>() => R;
    }
  }
}

declare const NSISRestrictedToNonNegativeMarkerVariable: cocoa.classes.NSISRestrictedToNonNegativeMarkerVariable;
