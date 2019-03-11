/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarCustomizationPreviewDebugCursorView<T = any> extends cocoa.NSView {
    isFlipped<R = boolean>(): R;
    cursorPoint<R = cocoa.CGPoint>(): R;
    setCursorPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTouchBarCustomizationPreviewDebugCursorView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSTouchBarCustomizationPreviewDebugCursorView>(): R;
      new: <R = _NSTouchBarCustomizationPreviewDebugCursorView>() => R;
    }
  }
}
