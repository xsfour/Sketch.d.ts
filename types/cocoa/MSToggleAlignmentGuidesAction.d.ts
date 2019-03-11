/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleAlignmentGuidesAction<T = any> extends cocoa.MSToggleViewPreferenceAction {
    label<R = unknown>(): R;
    toggleAlignmentGuides<R = void, P0 = unknown>(_toggleAlignmentGuides: P0): R;
  }
  namespace classes {
    export interface MSToggleAlignmentGuidesAction<T = any> extends cocoa.classes.MSToggleViewPreferenceAction {
      alloc<R = MSToggleAlignmentGuidesAction>(): R;
      new: <R = MSToggleAlignmentGuidesAction>() => R;
    }
  }
}

declare const MSToggleAlignmentGuidesAction: cocoa.classes.MSToggleAlignmentGuidesAction;
