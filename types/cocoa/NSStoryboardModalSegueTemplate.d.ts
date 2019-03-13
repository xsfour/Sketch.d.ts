/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardModalSegueTemplate<T = any> extends NSStoryboardSegueTemplate, NSCodingProtocol {}
  namespace classes {
    export interface NSStoryboardModalSegueTemplate<T = any> extends NSStoryboardSegueTemplate, NSCodingProtocol {
      alloc<R = NSStoryboardModalSegueTemplate>(): R;
      new: <R = NSStoryboardModalSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardModalSegueTemplate: cocoa.classes.NSStoryboardModalSegueTemplate;
