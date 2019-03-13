/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleVisibilityAction<T = any> extends MSDocumentAction {
    tabbedWindows<R = unknown>(): R;
    shouldRunForAllTabsInWindow<R = boolean>(): R;
    prepareForNewWindow<R = void>(): R;
    defaultsKey<R = unknown>(): R;
    hide<R = void>(): R;
    show<R = void>(): R;
    isActive<R = boolean>(): R;
  }
  namespace classes {
    export interface MSToggleVisibilityAction<T = any> extends MSDocumentAction {
      alloc<R = MSToggleVisibilityAction>(): R;
      new: <R = MSToggleVisibilityAction>() => R;
    }
  }
}

declare const MSToggleVisibilityAction: cocoa.classes.MSToggleVisibilityAction;
