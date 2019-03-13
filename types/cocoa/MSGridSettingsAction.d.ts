/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGridSettingsAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    gridSettings<R = void, P0 = unknown>(_gridSettings: P0): R;
  }
  namespace classes {
    export interface MSGridSettingsAction<T = any> extends MSDocumentAction {
      alloc<R = MSGridSettingsAction>(): R;
      new: <R = MSGridSettingsAction>() => R;
    }
  }
}

declare const MSGridSettingsAction: cocoa.classes.MSGridSettingsAction;
