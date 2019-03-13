/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRunCustomScriptAction<T = any> extends MSAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    runCustomScript<R = void, P0 = unknown>(_runCustomScript: P0): R;
  }
  namespace classes {
    export interface MSRunCustomScriptAction<T = any> extends MSAction {
      alloc<R = MSRunCustomScriptAction>(): R;
      new: <R = MSRunCustomScriptAction>() => R;
    }
  }
}

declare const MSRunCustomScriptAction: cocoa.classes.MSRunCustomScriptAction;
