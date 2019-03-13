/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleLayerHighlightAction<T = any> extends MSToggleViewPreferenceAction {
    label<R = unknown>(): R;
    toggleLayerHighlight<R = void, P0 = unknown>(_toggleLayerHighlight: P0): R;
  }
  namespace classes {
    export interface MSToggleLayerHighlightAction<T = any> extends MSToggleViewPreferenceAction {
      alloc<R = MSToggleLayerHighlightAction>(): R;
      new: <R = MSToggleLayerHighlightAction>() => R;
    }
  }
}

declare const MSToggleLayerHighlightAction: cocoa.classes.MSToggleLayerHighlightAction;
