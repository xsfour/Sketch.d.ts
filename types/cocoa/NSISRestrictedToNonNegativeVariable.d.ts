/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISRestrictedToNonNegativeVariable<T = any> extends NSISVariable {
    shouldBeMinimized<R = boolean>(): R;
    valueRestriction<R = number>(): R;
  }
  namespace classes {
    export interface NSISRestrictedToNonNegativeVariable<T = any> extends NSISVariable {
      alloc<R = NSISRestrictedToNonNegativeVariable>(): R;
      new: <R = NSISRestrictedToNonNegativeVariable>() => R;
    }
  }
}

declare const NSISRestrictedToNonNegativeVariable: cocoa.classes.NSISRestrictedToNonNegativeVariable;
