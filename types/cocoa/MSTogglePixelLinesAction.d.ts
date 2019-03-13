/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTogglePixelLinesAction<T = any> extends MSToggleViewPreferenceAction {
    label<R = unknown>(): R;
    togglePixelLines<R = void, P0 = unknown>(_togglePixelLines: P0): R;
  }
  namespace classes {
    export interface MSTogglePixelLinesAction<T = any> extends MSToggleViewPreferenceAction {
      alloc<R = MSTogglePixelLinesAction>(): R;
      new: <R = MSTogglePixelLinesAction>() => R;
    }
  }
}

declare const MSTogglePixelLinesAction: cocoa.classes.MSTogglePixelLinesAction;
