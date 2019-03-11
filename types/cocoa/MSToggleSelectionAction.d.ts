/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleSelectionAction<T = any> extends cocoa.MSToggleViewPreferenceAction {
    label<R = unknown>(): R;
    toggleSelection<R = void, P0 = unknown>(_toggleSelection: P0): R;
  }
  namespace classes {
    export interface MSToggleSelectionAction<T = any> extends cocoa.classes.MSToggleViewPreferenceAction {
      alloc<R = MSToggleSelectionAction>(): R;
      new: <R = MSToggleSelectionAction>() => R;
    }
  }
}

declare const MSToggleSelectionAction: cocoa.classes.MSToggleSelectionAction;
