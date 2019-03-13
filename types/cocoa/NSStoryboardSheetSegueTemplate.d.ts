/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardSheetSegueTemplate<T = any> extends NSStoryboardSegueTemplate, NSCodingProtocol {}
  namespace classes {
    export interface NSStoryboardSheetSegueTemplate<T = any> extends NSStoryboardSegueTemplate, NSCodingProtocol {
      alloc<R = NSStoryboardSheetSegueTemplate>(): R;
      new: <R = NSStoryboardSheetSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardSheetSegueTemplate: cocoa.classes.NSStoryboardSheetSegueTemplate;
