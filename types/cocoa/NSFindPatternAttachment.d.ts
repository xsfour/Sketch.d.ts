/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindPatternAttachment<T = any> extends cocoa.NSTextAttachment {
    description<R = unknown>(): R;
  }
  namespace classes {
    export interface NSFindPatternAttachment<T = any> extends cocoa.classes.NSTextAttachment {  }
  }
}

declare const NSFindPatternAttachment: cocoa.classes.NSFindPatternAttachment;
