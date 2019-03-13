/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleSliceInteractionAction<T = any> extends MSToggleViewPreferenceAction {
    labelForToolbar<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    toggleSliceInteraction<R = void, P0 = unknown>(_toggleSliceInteraction: P0): R;
  }
  namespace classes {
    export interface MSToggleSliceInteractionAction<T = any> extends MSToggleViewPreferenceAction {
      alloc<R = MSToggleSliceInteractionAction>(): R;
      new: <R = MSToggleSliceInteractionAction>() => R;
    }
  }
}

declare const MSToggleSliceInteractionAction: cocoa.classes.MSToggleSliceInteractionAction;
