/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStatusItemReplicantView<T = any> extends NSView {
    allowsVibrancy<R = boolean>(): R;
    drawBlock<R = CDUnknownBlockType>(): R;
    setDrawBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface NSStatusItemReplicantView<T = any> extends NSView {
      alloc<R = NSStatusItemReplicantView>(): R;
      new: <R = NSStatusItemReplicantView>() => R;
    }
  }
}

declare const NSStatusItemReplicantView: cocoa.classes.NSStatusItemReplicantView;
