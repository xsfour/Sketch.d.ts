/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorTextFieldCell<T = any> extends NSTextFieldCell {}
  namespace classes {
    export interface NSRuleEditorTextFieldCell<T = any> extends NSTextFieldCell {
      alloc<R = NSRuleEditorTextFieldCell>(): R;
      new: <R = NSRuleEditorTextFieldCell>() => R;
    }
  }
}

declare const NSRuleEditorTextFieldCell: cocoa.classes.NSRuleEditorTextFieldCell;
