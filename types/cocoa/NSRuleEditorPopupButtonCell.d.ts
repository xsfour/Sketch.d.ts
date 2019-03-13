/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorPopupButtonCell<T = any> extends NSPopUpButtonCell {
    arrowPosition<R = number>(): R;
    sliceIsEditable<R = boolean>(): R;
  }
  namespace classes {
    export interface NSRuleEditorPopupButtonCell<T = any> extends NSPopUpButtonCell {
      alloc<R = NSRuleEditorPopupButtonCell>(): R;
      new: <R = NSRuleEditorPopupButtonCell>() => R;
    }
  }
}

declare const NSRuleEditorPopupButtonCell: cocoa.classes.NSRuleEditorPopupButtonCell;
