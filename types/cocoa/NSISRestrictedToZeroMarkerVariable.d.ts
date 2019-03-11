/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISRestrictedToZeroMarkerVariable<T = any> extends cocoa.NSISVariable {
    shouldBeMinimized<R = boolean>(): R;
    valueRestriction<R = number>(): R;
  }
  namespace classes {
    export interface NSISRestrictedToZeroMarkerVariable<T = any> extends cocoa.classes.NSISVariable {
      alloc<R = NSISRestrictedToZeroMarkerVariable>(): R;
      new: <R = NSISRestrictedToZeroMarkerVariable>() => R;
    }
  }
}

declare const NSISRestrictedToZeroMarkerVariable: cocoa.classes.NSISRestrictedToZeroMarkerVariable;
