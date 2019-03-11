/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayoutSettingsAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    layoutSettings<R = void, P0 = unknown>(_layoutSettings: P0): R;
  }
  namespace classes {
    export interface MSLayoutSettingsAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSLayoutSettingsAction>(): R;
      new: <R = MSLayoutSettingsAction>() => R;
    }
  }
}

declare const MSLayoutSettingsAction: cocoa.classes.MSLayoutSettingsAction;
