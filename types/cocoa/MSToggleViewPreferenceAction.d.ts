/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleViewPreferenceAction<T = any> extends MSDocumentAction {
    preferenceKey<R = unknown>(): R;
    isActive<R = boolean>(): R;
    validate<R = boolean>(): R;
    refreshDocumentOverlayAfterDefaultsChange<R = void>(): R;
  }
  namespace classes {
    export interface MSToggleViewPreferenceAction<T = any> extends MSDocumentAction {
      alloc<R = MSToggleViewPreferenceAction>(): R;
      new: <R = MSToggleViewPreferenceAction>() => R;
    }
  }
}

declare const MSToggleViewPreferenceAction: cocoa.classes.MSToggleViewPreferenceAction;
