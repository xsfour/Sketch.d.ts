/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISConstraintProtocol<T = any> extends cocoa.NSISVariableDelegateProtocol {
    secondItem<R = unknown>(): R;
    firstItem<R = unknown>(): R;
  }
  namespace classes {
    export interface NSISConstraintProtocol<T = any> extends cocoa.classes.NSISVariableDelegateProtocol {  }
  }
}

declare const NSISConstraintProtocol: cocoa.classes.NSISConstraintProtocol;
