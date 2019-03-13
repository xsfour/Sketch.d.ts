/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCandidateTextCell<T = any> extends NSTextFieldCell {}
  namespace classes {
    export interface NSCandidateTextCell<T = any> extends NSTextFieldCell {
      alloc<R = NSCandidateTextCell>(): R;
      new: <R = NSCandidateTextCell>() => R;
    }
  }
}

declare const NSCandidateTextCell: cocoa.classes.NSCandidateTextCell;
