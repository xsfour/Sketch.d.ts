/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFeedbackAction<T = any> extends cocoa.MSAction {
    label<R = unknown>(): R;
    feedback<R = void, P0 = unknown>(_feedback: P0): R;
  }
  namespace classes {
    export interface MSFeedbackAction<T = any> extends cocoa.classes.MSAction {
      alloc<R = MSFeedbackAction>(): R;
      new: <R = MSFeedbackAction>() => R;
    }
  }
}

declare const MSFeedbackAction: cocoa.classes.MSFeedbackAction;
