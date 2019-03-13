/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeFlowAnimationFromRightAnimationAction<T = any> extends MSChangeFlowAnimationAction {
    label<R = unknown>(): R;
    changeFlowAnimationToFromRightAnimation<R = void, P0 = unknown>(_changeFlowAnimationToFromRightAnimation: P0): R;
  }
  namespace classes {
    export interface MSChangeFlowAnimationFromRightAnimationAction<T = any> extends MSChangeFlowAnimationAction {
      alloc<R = MSChangeFlowAnimationFromRightAnimationAction>(): R;
      new: <R = MSChangeFlowAnimationFromRightAnimationAction>() => R;
    }
  }
}

declare const MSChangeFlowAnimationFromRightAnimationAction: cocoa.classes.MSChangeFlowAnimationFromRightAnimationAction;
