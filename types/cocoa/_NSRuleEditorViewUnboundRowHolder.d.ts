/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSRuleEditorViewUnboundRowHolder<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSRuleEditorViewUnboundRowHolder<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol {
      alloc<R = _NSRuleEditorViewUnboundRowHolder>(): R;
      new: <R = _NSRuleEditorViewUnboundRowHolder>() => R;
    }
  }
}
