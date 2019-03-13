/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSegmentedCell<T = any> extends NSSegmentedCell {
    cxx_destruct<R = void>(): R;
    alternateImage3<R = NSImage>(): R;
    setAlternateImage3<R = void, P0 = NSImage>(_v: P0): R;
    alternateImage2<R = NSImage>(): R;
    setAlternateImage2<R = void, P0 = NSImage>(_v: P0): R;
    alternateImage1<R = NSImage>(): R;
    setAlternateImage1<R = void, P0 = NSImage>(_v: P0): R;
    alternateImage0<R = NSImage>(): R;
    setAlternateImage0<R = void, P0 = NSImage>(_v: P0): R;
    drawHighlighted<R = boolean>(): R;
    setDrawHighlighted<R = void, P0 = boolean>(_v: P0): R;
    alternateImages<R = NSMutableDictionary>(): R;
    setAlternateImages<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    images<R = NSMutableDictionary>(): R;
    setImages<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    highlightLocation<R = CGPoint>(): R;
    setHighlightLocation<R = void, P0 = CGPoint>(_v: P0): R;
  }
  namespace classes {
    export interface MSInspectorSegmentedCell<T = any> extends NSSegmentedCell {
      alloc<R = MSInspectorSegmentedCell>(): R;
      new: <R = MSInspectorSegmentedCell>() => R;
    }
  }
}

declare const MSInspectorSegmentedCell: cocoa.classes.MSInspectorSegmentedCell;
