/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISRestrictedToNonNegativeVariableToBeMinimized<T = any> extends cocoa.NSISVariable {
    shouldBeMinimized<R = boolean>(): R;
    valueRestriction<R = number>(): R;
  }
  namespace classes {
    export interface NSISRestrictedToNonNegativeVariableToBeMinimized<T = any> extends cocoa.classes.NSISVariable {
      alloc<R = NSISRestrictedToNonNegativeVariableToBeMinimized>(): R;
      new: <R = NSISRestrictedToNonNegativeVariableToBeMinimized>() => R;
    }
  }
}

declare const NSISRestrictedToNonNegativeVariableToBeMinimized: cocoa.classes.NSISRestrictedToNonNegativeVariableToBeMinimized;
