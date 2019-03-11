/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardEmbedSegueTemplate<T = any> extends cocoa.NSStoryboardSegueTemplate, cocoa.NSCodingProtocol {
    containerView<R = cocoa.NSView>(): R;
    setContainerView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSStoryboardEmbedSegueTemplate<T = any> extends cocoa.classes.NSStoryboardSegueTemplate, cocoa.classes.NSCodingProtocol {
      alloc<R = NSStoryboardEmbedSegueTemplate>(): R;
      new: <R = NSStoryboardEmbedSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardEmbedSegueTemplate: cocoa.classes.NSStoryboardEmbedSegueTemplate;
