/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCMYKSliders<T = any> extends cocoa.NSColorSpaceSliders {
    worksWhenModal<R = boolean>(): R;
    viewSizeChanged<R = void, P0 = unknown>(_viewSizeChanged: P0): R;
    cmykView<R = cocoa.NSView>(): R;
    setCmykView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSCMYKSliders<T = any> extends cocoa.classes.NSColorSpaceSliders {
      alloc<R = NSCMYKSliders>(): R;
      new: <R = NSCMYKSliders>() => R;
    }
  }
}

declare const NSCMYKSliders: cocoa.classes.NSCMYKSliders;
