/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHSBSliders<T = any> extends NSColorSpaceSliders {
    worksWhenModal<R = boolean>(): R;
    viewSizeChanged<R = void, P0 = unknown>(_viewSizeChanged: P0): R;
    hsbView<R = NSView>(): R;
    setHsbView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSHSBSliders<T = any> extends NSColorSpaceSliders {
      alloc<R = NSHSBSliders>(): R;
      new: <R = NSHSBSliders>() => R;
    }
  }
}

declare const NSHSBSliders: cocoa.classes.NSHSBSliders;
