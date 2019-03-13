/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeFlowAnimationAction<T = any> extends MSDocumentAction {
    isActive<R = boolean>(): R;
    validate<R = boolean>(): R;
    animationType<R = number>(): R;
  }
  namespace classes {
    export interface MSChangeFlowAnimationAction<T = any> extends MSDocumentAction {
      alloc<R = MSChangeFlowAnimationAction>(): R;
      new: <R = MSChangeFlowAnimationAction>() => R;
    }
  }
}

declare const MSChangeFlowAnimationAction: cocoa.classes.MSChangeFlowAnimationAction;
