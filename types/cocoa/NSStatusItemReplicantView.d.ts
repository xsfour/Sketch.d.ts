/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStatusItemReplicantView<T = any> extends cocoa.NSView {
    allowsVibrancy<R = boolean>(): R;
    drawBlock<R = cocoa.CDUnknownBlockType>(): R;
    setDrawBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface NSStatusItemReplicantView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSStatusItemReplicantView>(): R;
      new: <R = NSStatusItemReplicantView>() => R;
    }
  }
}

declare const NSStatusItemReplicantView: cocoa.classes.NSStatusItemReplicantView;
