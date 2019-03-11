/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorTextFieldCell<T = any> extends cocoa.NSTextFieldCell {}
  namespace classes {
    export interface NSRuleEditorTextFieldCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = NSRuleEditorTextFieldCell>(): R;
      new: <R = NSRuleEditorTextFieldCell>() => R;
    }
  }
}

declare const NSRuleEditorTextFieldCell: cocoa.classes.NSRuleEditorTextFieldCell;
