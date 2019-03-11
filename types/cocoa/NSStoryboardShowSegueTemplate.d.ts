/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardShowSegueTemplate<T = any> extends cocoa.NSStoryboardSegueTemplate, cocoa.NSCodingProtocol {
    uniqueControllerIdentifier<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSStoryboardShowSegueTemplate<T = any> extends cocoa.classes.NSStoryboardSegueTemplate, cocoa.classes.NSCodingProtocol {
      alloc<R = NSStoryboardShowSegueTemplate>(): R;
      new: <R = NSStoryboardShowSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardShowSegueTemplate: cocoa.classes.NSStoryboardShowSegueTemplate;
