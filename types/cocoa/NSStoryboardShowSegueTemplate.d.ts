/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardShowSegueTemplate<T = any> extends NSStoryboardSegueTemplate, NSCodingProtocol {
    uniqueControllerIdentifier<R = NSString>(): R;
  }
  namespace classes {
    export interface NSStoryboardShowSegueTemplate<T = any> extends NSStoryboardSegueTemplate, NSCodingProtocol {
      alloc<R = NSStoryboardShowSegueTemplate>(): R;
      new: <R = NSStoryboardShowSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardShowSegueTemplate: cocoa.classes.NSStoryboardShowSegueTemplate;
