/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMirrorToolbarItemView<T = any> extends NSView {
    controls<R = NSArray>(): R;
  }
  namespace classes {
    export interface MSMirrorToolbarItemView<T = any> extends NSView {
      alloc<R = MSMirrorToolbarItemView>(): R;
      new: <R = MSMirrorToolbarItemView>() => R;
    }
  }
}

declare const MSMirrorToolbarItemView: cocoa.classes.MSMirrorToolbarItemView;
