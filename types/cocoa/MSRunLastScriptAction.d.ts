/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRunLastScriptAction<T = any> extends MSAction {
    label<R = unknown>(): R;
    runLastScript<R = void, P0 = unknown>(_runLastScript: P0): R;
  }
  namespace classes {
    export interface MSRunLastScriptAction<T = any> extends MSAction {
      alloc<R = MSRunLastScriptAction>(): R;
      new: <R = MSRunLastScriptAction>() => R;
    }
  }
}

declare const MSRunLastScriptAction: cocoa.classes.MSRunLastScriptAction;
