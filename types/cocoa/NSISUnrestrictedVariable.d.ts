/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISUnrestrictedVariable<T = any> extends cocoa.NSISVariable {
    shouldBeMinimized<R = boolean>(): R;
    valueRestriction<R = number>(): R;
  }
  namespace classes {
    export interface NSISUnrestrictedVariable<T = any> extends cocoa.classes.NSISVariable {
      alloc<R = NSISUnrestrictedVariable>(): R;
      new: <R = NSISUnrestrictedVariable>() => R;
    }
  }
}

declare const NSISUnrestrictedVariable: cocoa.classes.NSISUnrestrictedVariable;
