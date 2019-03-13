/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSRuleEditorCache<T = any> extends NSObject {
    description<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSRuleEditorCache<T = any> extends NSObject {
      alloc<R = _NSRuleEditorCache>(): R;
      new: <R = _NSRuleEditorCache>() => R;
    }
  }
}
