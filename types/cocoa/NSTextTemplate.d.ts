/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextTemplate<T = any> extends cocoa.NSViewTemplate {}
  namespace classes {
    export interface NSTextTemplate<T = any> extends cocoa.classes.NSViewTemplate {
      alloc<R = NSTextTemplate>(): R;
      new: <R = NSTextTemplate>() => R;
    }
  }
}

declare const NSTextTemplate: cocoa.classes.NSTextTemplate;
