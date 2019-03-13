/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardEmbedSegueTemplate<T = any> extends NSStoryboardSegueTemplate, NSCodingProtocol {
    containerView<R = NSView>(): R;
    setContainerView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSStoryboardEmbedSegueTemplate<T = any> extends NSStoryboardSegueTemplate, NSCodingProtocol {
      alloc<R = NSStoryboardEmbedSegueTemplate>(): R;
      new: <R = NSStoryboardEmbedSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardEmbedSegueTemplate: cocoa.classes.NSStoryboardEmbedSegueTemplate;
