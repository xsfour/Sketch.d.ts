/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorTextField<T = any> extends NSTextField {}
  namespace classes {
    export interface NSRuleEditorTextField<T = any> extends NSTextField {
      alloc<R = NSRuleEditorTextField>(): R;
      new: <R = NSRuleEditorTextField>() => R;
    }
  }
}

declare const NSRuleEditorTextField: cocoa.classes.NSRuleEditorTextField;
