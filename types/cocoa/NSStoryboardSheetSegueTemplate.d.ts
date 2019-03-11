/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardSheetSegueTemplate<T = any> extends cocoa.NSStoryboardSegueTemplate, cocoa.NSCodingProtocol {}
  namespace classes {
    export interface NSStoryboardSheetSegueTemplate<T = any> extends cocoa.classes.NSStoryboardSegueTemplate, cocoa.classes.NSCodingProtocol {
      alloc<R = NSStoryboardSheetSegueTemplate>(): R;
      new: <R = NSStoryboardSheetSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardSheetSegueTemplate: cocoa.classes.NSStoryboardSheetSegueTemplate;
