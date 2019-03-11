/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSimpleImageView<T = any> extends cocoa.NSView {
    performBlockWithLayerContents<R = void, P0 = cocoa.CDUnknownBlockType>(_performBlockWithLayerContents: P0): R;
    wantsUpdateLayer<R = boolean>(): R;
    tintColor<R = cocoa.NSColor>(): R;
    backgroundStyle<R = number>(): R;
    image<R = cocoa.NSImage>(): R;
    state<R = number>(): R;
  }
  namespace classes {
    export interface _NSSimpleImageView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSSimpleImageView>(): R;
      new: <R = _NSSimpleImageView>() => R;
    }
  }
}
