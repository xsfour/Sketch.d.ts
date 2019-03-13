/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeToSketchAction<T = any> extends MSAction {
    label<R = unknown>(): R;
    welcomeToSketch<R = void, P0 = unknown>(_welcomeToSketch: P0): R;
  }
  namespace classes {
    export interface MSWelcomeToSketchAction<T = any> extends MSAction {
      alloc<R = MSWelcomeToSketchAction>(): R;
      new: <R = MSWelcomeToSketchAction>() => R;
    }
  }
}

declare const MSWelcomeToSketchAction: cocoa.classes.MSWelcomeToSketchAction;
