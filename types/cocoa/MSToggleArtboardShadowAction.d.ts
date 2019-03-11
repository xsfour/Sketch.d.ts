/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleArtboardShadowAction<T = any> extends cocoa.MSToggleViewPreferenceAction {
    label<R = unknown>(): R;
    toggleArtboardShadow<R = void, P0 = unknown>(_toggleArtboardShadow: P0): R;
  }
  namespace classes {
    export interface MSToggleArtboardShadowAction<T = any> extends cocoa.classes.MSToggleViewPreferenceAction {
      alloc<R = MSToggleArtboardShadowAction>(): R;
      new: <R = MSToggleArtboardShadowAction>() => R;
    }
  }
}

declare const MSToggleArtboardShadowAction: cocoa.classes.MSToggleArtboardShadowAction;
