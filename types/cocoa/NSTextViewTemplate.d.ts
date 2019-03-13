/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextViewTemplate<T = any> extends NSViewTemplate {}
  namespace classes {
    export interface NSTextViewTemplate<T = any> extends NSViewTemplate {
      alloc<R = NSTextViewTemplate>(): R;
      new: <R = NSTextViewTemplate>() => R;
    }
  }
}

declare const NSTextViewTemplate: cocoa.classes.NSTextViewTemplate;
