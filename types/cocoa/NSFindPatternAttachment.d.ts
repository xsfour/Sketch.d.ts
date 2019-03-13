/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindPatternAttachment<T = any> extends NSTextAttachment {
    description<R = unknown>(): R;
  }
  namespace classes {
    export interface NSFindPatternAttachment<T = any> extends NSTextAttachment {  }
  }
}

declare const NSFindPatternAttachment: cocoa.classes.NSFindPatternAttachment;
