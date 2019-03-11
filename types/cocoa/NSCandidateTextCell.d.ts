/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCandidateTextCell<T = any> extends cocoa.NSTextFieldCell {}
  namespace classes {
    export interface NSCandidateTextCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = NSCandidateTextCell>(): R;
      new: <R = NSCandidateTextCell>() => R;
    }
  }
}

declare const NSCandidateTextCell: cocoa.classes.NSCandidateTextCell;
