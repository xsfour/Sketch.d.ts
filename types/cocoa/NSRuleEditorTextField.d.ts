/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorTextField<T = any> extends cocoa.NSTextField {}
  namespace classes {
    export interface NSRuleEditorTextField<T = any> extends cocoa.classes.NSTextField {
      alloc<R = NSRuleEditorTextField>(): R;
      new: <R = NSRuleEditorTextField>() => R;
    }
  }
}

declare const NSRuleEditorTextField: cocoa.classes.NSRuleEditorTextField;
