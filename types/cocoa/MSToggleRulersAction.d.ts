/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleRulersAction<T = any> extends cocoa.MSToggleVisibilityAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    isActive<R = boolean>(): R;
    toggleRulers<R = void, P0 = unknown>(_toggleRulers: P0): R;
  }
  namespace classes {
    export interface MSToggleRulersAction<T = any> extends cocoa.classes.MSToggleVisibilityAction {
      alloc<R = MSToggleRulersAction>(): R;
      new: <R = MSToggleRulersAction>() => R;
    }
  }
}

declare const MSToggleRulersAction: cocoa.classes.MSToggleRulersAction;
