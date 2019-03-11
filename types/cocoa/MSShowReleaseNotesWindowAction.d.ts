/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowReleaseNotesWindowAction<T = any> extends cocoa.MSAction {
    label<R = unknown>(): R;
    showReleaseNotesWindow<R = void, P0 = unknown>(_showReleaseNotesWindow: P0): R;
  }
  namespace classes {
    export interface MSShowReleaseNotesWindowAction<T = any> extends cocoa.classes.MSAction {
      alloc<R = MSShowReleaseNotesWindowAction>(): R;
      new: <R = MSShowReleaseNotesWindowAction>() => R;
    }
  }
}

declare const MSShowReleaseNotesWindowAction: cocoa.classes.MSShowReleaseNotesWindowAction;
