/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRunPluginAction<T = any> extends MSAction {
    label<R = unknown>(): R;
    runPlugin<R = void, P0 = unknown>(_runPlugin: P0): R;
  }
  namespace classes {
    export interface MSRunPluginAction<T = any> extends MSAction {
      alloc<R = MSRunPluginAction>(): R;
      new: <R = MSRunPluginAction>() => R;
    }
  }
}

declare const MSRunPluginAction: cocoa.classes.MSRunPluginAction;
