/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorModePickerAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    colorInspectorMode<R = number>(): R;
    colorInspector<R = unknown>(): R;
    switchToColorTabAtIndex<R = void, P0 = number>(_switchToColorTabAtIndex: P0): R;
  }
  namespace classes {
    export interface MSColorInspectorModePickerAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSColorInspectorModePickerAction>(): R;
      new: <R = MSColorInspectorModePickerAction>() => R;
    }
  }
}

declare const MSColorInspectorModePickerAction: cocoa.classes.MSColorInspectorModePickerAction;
