/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSRuleEditorViewUnboundRowHolder<T = any> extends NSObject, NSCodingProtocol {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSRuleEditorViewUnboundRowHolder<T = any> extends NSObject, NSCodingProtocol {
      alloc<R = _NSRuleEditorViewUnboundRowHolder>(): R;
      new: <R = _NSRuleEditorViewUnboundRowHolder>() => R;
    }
  }
}
