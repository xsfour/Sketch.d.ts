/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorViewSliceDropSeparator<T = any> extends NSRuleEditorViewSlice {}
  namespace classes {
    export interface NSRuleEditorViewSliceDropSeparator<T = any> extends NSRuleEditorViewSlice {
      alloc<R = NSRuleEditorViewSliceDropSeparator>(): R;
      new: <R = NSRuleEditorViewSliceDropSeparator>() => R;
    }
  }
}

declare const NSRuleEditorViewSliceDropSeparator: cocoa.classes.NSRuleEditorViewSliceDropSeparator;
