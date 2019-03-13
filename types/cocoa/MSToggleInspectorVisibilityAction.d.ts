/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleInspectorVisibilityAction<T = any> extends MSToggleVisibilityAction {
    label<R = unknown>(): R;
    isActive<R = boolean>(): R;
    toggleInspectorVisibility<R = void, P0 = unknown>(_toggleInspectorVisibility: P0): R;
  }
  namespace classes {
    export interface MSToggleInspectorVisibilityAction<T = any> extends MSToggleVisibilityAction {
      alloc<R = MSToggleInspectorVisibilityAction>(): R;
      new: <R = MSToggleInspectorVisibilityAction>() => R;
    }
  }
}

declare const MSToggleInspectorVisibilityAction: cocoa.classes.MSToggleInspectorVisibilityAction;
