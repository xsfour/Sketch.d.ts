/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeFlowAnimationNoAnimationAction<T = any> extends MSChangeFlowAnimationAction {
    label<R = unknown>(): R;
    changeFlowAnimationToNoAnimation<R = void, P0 = unknown>(_changeFlowAnimationToNoAnimation: P0): R;
  }
  namespace classes {
    export interface MSChangeFlowAnimationNoAnimationAction<T = any> extends MSChangeFlowAnimationAction {
      alloc<R = MSChangeFlowAnimationNoAnimationAction>(): R;
      new: <R = MSChangeFlowAnimationNoAnimationAction>() => R;
    }
  }
}

declare const MSChangeFlowAnimationNoAnimationAction: cocoa.classes.MSChangeFlowAnimationNoAnimationAction;
