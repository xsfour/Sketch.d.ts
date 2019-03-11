/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleFlowInteractionAction<T = any> extends cocoa.MSToggleViewPreferenceAction {
    labelForToolbar<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    toggleFlowInteraction<R = void, P0 = unknown>(_toggleFlowInteraction: P0): R;
  }
  namespace classes {
    export interface MSToggleFlowInteractionAction<T = any> extends cocoa.classes.MSToggleViewPreferenceAction {
      alloc<R = MSToggleFlowInteractionAction>(): R;
      new: <R = MSToggleFlowInteractionAction>() => R;
    }
  }
}

declare const MSToggleFlowInteractionAction: cocoa.classes.MSToggleFlowInteractionAction;
