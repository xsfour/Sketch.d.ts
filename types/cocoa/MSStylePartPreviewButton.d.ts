/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePartPreviewButton<T = any> extends cocoa.MSInspectorButton {
    cxx_destruct<R = void>(): R;
    contentRect<R = cocoa.CGRect>(): R;
    drawButton<R = void>(): R;
    dragOwner<R = unknown>(): R;
    setDragOwner<R = void, P0 = unknown>(_v: P0): R;
    delegate<R = cocoa.MSStylePartPreviewButtonDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSStylePartPreviewButtonDelegate>(_v: P0): R;
    color<R = cocoa.NSColor>(): R;
    setColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    stylePart<R = cocoa.MSStylePart>(): R;
    setStylePart<R = void, P0 = cocoa.MSStylePart>(_v: P0): R;
  }
  namespace classes {
    export interface MSStylePartPreviewButton<T = any> extends cocoa.classes.MSInspectorButton {
      alloc<R = MSStylePartPreviewButton>(): R;
      new: <R = MSStylePartPreviewButton>() => R;
    }
  }
}

declare const MSStylePartPreviewButton: cocoa.classes.MSStylePartPreviewButton;
