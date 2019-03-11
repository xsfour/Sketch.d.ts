/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorButtonCell<T = any> extends cocoa.NSButtonCell {
    setRuleEditorButtonType<R = void, P0 = number>(_setRuleEditorButtonType: P0): R;
  }
  namespace classes {
    export interface NSRuleEditorButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = NSRuleEditorButtonCell>(): R;
      new: <R = NSRuleEditorButtonCell>() => R;
    }
  }
}

declare const NSRuleEditorButtonCell: cocoa.classes.NSRuleEditorButtonCell;
