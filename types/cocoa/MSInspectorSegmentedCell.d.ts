/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSegmentedCell<T = any> extends cocoa.NSSegmentedCell {
    cxx_destruct<R = void>(): R;
    alternateImage3<R = cocoa.NSImage>(): R;
    setAlternateImage3<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    alternateImage2<R = cocoa.NSImage>(): R;
    setAlternateImage2<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    alternateImage1<R = cocoa.NSImage>(): R;
    setAlternateImage1<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    alternateImage0<R = cocoa.NSImage>(): R;
    setAlternateImage0<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    drawHighlighted<R = boolean>(): R;
    setDrawHighlighted<R = void, P0 = boolean>(_v: P0): R;
    alternateImages<R = cocoa.NSMutableDictionary>(): R;
    setAlternateImages<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    images<R = cocoa.NSMutableDictionary>(): R;
    setImages<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    highlightLocation<R = cocoa.CGPoint>(): R;
    setHighlightLocation<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
  }
  namespace classes {
    export interface MSInspectorSegmentedCell<T = any> extends cocoa.classes.NSSegmentedCell {
      alloc<R = MSInspectorSegmentedCell>(): R;
      new: <R = MSInspectorSegmentedCell>() => R;
    }
  }
}

declare const MSInspectorSegmentedCell: cocoa.classes.MSInspectorSegmentedCell;
