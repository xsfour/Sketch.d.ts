/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRevealPluginsAction<T = any> extends MSAction {
    label<R = unknown>(): R;
    revealPlugins<R = void, P0 = unknown>(_revealPlugins: P0): R;
  }
  namespace classes {
    export interface MSRevealPluginsAction<T = any> extends MSAction {
      alloc<R = MSRevealPluginsAction>(): R;
      new: <R = MSRevealPluginsAction>() => R;
    }
  }
}

declare const MSRevealPluginsAction: cocoa.classes.MSRevealPluginsAction;
