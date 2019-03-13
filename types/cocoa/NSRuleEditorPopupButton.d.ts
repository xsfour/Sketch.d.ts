/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorPopupButton<T = any> extends NSPopUpButton {}
  namespace classes {
    export interface NSRuleEditorPopupButton<T = any> extends NSPopUpButton {
      alloc<R = NSRuleEditorPopupButton>(): R;
      new: <R = NSRuleEditorPopupButton>() => R;
    }
  }
}

declare const NSRuleEditorPopupButton: cocoa.classes.NSRuleEditorPopupButton;
