/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleLayerListVisibilityAction<T = any> extends MSToggleVisibilityAction {
    label<R = unknown>(): R;
    isActive<R = boolean>(): R;
    toggleLayerListVisibility<R = void, P0 = unknown>(_toggleLayerListVisibility: P0): R;
  }
  namespace classes {
    export interface MSToggleLayerListVisibilityAction<T = any> extends MSToggleVisibilityAction {
      alloc<R = MSToggleLayerListVisibilityAction>(): R;
      new: <R = MSToggleLayerListVisibilityAction>() => R;
    }
  }
}

declare const MSToggleLayerListVisibilityAction: cocoa.classes.MSToggleLayerListVisibilityAction;
