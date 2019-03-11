/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardModalSegueTemplate<T = any> extends cocoa.NSStoryboardSegueTemplate, cocoa.NSCodingProtocol {}
  namespace classes {
    export interface NSStoryboardModalSegueTemplate<T = any> extends cocoa.classes.NSStoryboardSegueTemplate, cocoa.classes.NSCodingProtocol {
      alloc<R = NSStoryboardModalSegueTemplate>(): R;
      new: <R = NSStoryboardModalSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardModalSegueTemplate: cocoa.classes.NSStoryboardModalSegueTemplate;
