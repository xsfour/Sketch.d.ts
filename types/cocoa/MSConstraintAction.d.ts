/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstraintAction<T = any> extends cocoa.MSDocumentAction {
    validate<R = boolean>(): R;
    stateForConstraint<R = number>(): R;
    isActive<R = boolean>(): R;
    validationKeyPath<R = cocoa.NSString>(): R;
    actionKeyPath<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSConstraintAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSConstraintAction>(): R;
      new: <R = MSConstraintAction>() => R;
    }
  }
}

declare const MSConstraintAction: cocoa.classes.MSConstraintAction;
