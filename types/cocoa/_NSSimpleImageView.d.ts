/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSimpleImageView<T = any> extends NSView {
    performBlockWithLayerContents<R = void, P0 = CDUnknownBlockType>(_performBlockWithLayerContents: P0): R;
    wantsUpdateLayer<R = boolean>(): R;
    tintColor<R = NSColor>(): R;
    backgroundStyle<R = number>(): R;
    image<R = NSImage>(): R;
    state<R = number>(): R;
  }
  namespace classes {
    export interface _NSSimpleImageView<T = any> extends NSView {
      alloc<R = _NSSimpleImageView>(): R;
      new: <R = _NSSimpleImageView>() => R;
    }
  }
}
