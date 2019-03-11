/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRGBSliders<T = any> extends cocoa.NSColorSpaceSliders {
    setEntryMode<R = void, P0 = number>(_setEntryMode: P0): R;
    hexAction<R = void, P0 = unknown>(_hexAction: P0): R;
    worksWhenModal<R = boolean>(): R;
    rgbView<R = cocoa.NSView>(): R;
    setRgbView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSRGBSliders<T = any> extends cocoa.classes.NSColorSpaceSliders {
      alloc<R = NSRGBSliders>(): R;
      new: <R = NSRGBSliders>() => R;
    }
  }
}

declare const NSRGBSliders: cocoa.classes.NSRGBSliders;
