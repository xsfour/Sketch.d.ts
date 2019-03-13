/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickLookTouchBarPanel<T = any> extends NSPanel {
    backingScaleFactor<R = number>(): R;
    colorSpace<R = unknown>(): R;
    isVisible<R = boolean>(): R;
    worksWhenModal<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSQuickLookTouchBarPanel<T = any> extends NSPanel {
      alloc<R = _NSQuickLookTouchBarPanel>(): R;
      new: <R = _NSQuickLookTouchBarPanel>() => R;
    }
  }
}
